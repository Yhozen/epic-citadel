// compat.js - added 2026 to run the 2013 Epic Citadel build in modern browsers. Not part of Epic's original files.
// Fix 1: The engine scans glGetString(GL_EXTENSIONS) for the 2013 vendor-prefixed name
// " MOZ_WEBGL_compressed_texture_s3tc " (or WEBKIT_). Modern browsers only report the unprefixed
// "WEBGL_compressed_texture_s3tc", so the engine aborts with "This platform doesn't support Unreal
// Engine texture formats!". Report the legacy alias too (the real extension is still enabled via the
// unprefixed getExtension() call in Emscripten's GL.init).
(function () {
  function patch(proto) {
    if (!proto || proto.__citadelPatched) return;
    var orig = proto.getSupportedExtensions;
    proto.getSupportedExtensions = function () {
      var list = orig.call(this) || [];
      if (list.indexOf('WEBGL_compressed_texture_s3tc') >= 0 && list.indexOf('MOZ_WEBGL_compressed_texture_s3tc') < 0) {
        list = list.slice(); list.splice(1, 0, 'MOZ_WEBGL_compressed_texture_s3tc'); // not first/last, so it is space-delimited on both sides
      }
      return list;
    };
    proto.__citadelPatched = true;
  }
  patch(window.WebGLRenderingContext && WebGLRenderingContext.prototype);
})();

// Fix 2: Web Audio removed AudioListener.setVelocity / PannerNode.setVelocity (Doppler API) after 2013.
// Emscripten's OpenAL layer calls listener.setVelocity() each frame -> TypeError kills the main loop.
// Install no-op shims only where the method is missing.
(function () {
  function noop() {}
  if (window.AudioListener && !AudioListener.prototype.setVelocity) AudioListener.prototype.setVelocity = noop;
  if (window.PannerNode && !PannerNode.prototype.setVelocity) PannerNode.prototype.setVelocity = noop;
})();

// Fix 3: The page now starts loading without a click, so there is no user gesture before the engine
// creates its AudioContext and sets the music <audio> to autoplay. Chrome/Safari start both muted
// (suspended / play() rejected). Resume them on the first click, tap, or key press.
(function () {
  var contexts = [];
  ['AudioContext', 'webkitAudioContext'].forEach(function (name) {
    var Orig = window[name];
    if (!Orig) return;
    window[name] = function () {
      var ctx = new Orig();
      contexts.push(ctx);
      return ctx;
    };
    window[name].prototype = Orig.prototype;
  });
  function unlock() {
    contexts.forEach(function (ctx) { if (ctx.state === 'suspended') ctx.resume(); });
    var audio = document.querySelectorAll('audio');
    for (var i = 0; i < audio.length; i++) if (audio[i].autoplay && audio[i].paused) audio[i].play().catch(function () {});
  }
  ['pointerdown', 'keydown', 'touchend'].forEach(function (type) {
    document.addEventListener(type, unlock, true);
  });
})();
