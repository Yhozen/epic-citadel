function Warnings(alertbox, placeholder) {

	var _this = this;
	this.$alertbox = $(alertbox);
	this.placeholder = placeholder;
	this.$html     = $('html');
	this.isFirefox = this.$html.hasClass('ff2');
	this.isChrome  = this.$html.hasClass('chrome');
	this.isSafari  = this.$html.hasClass('safari');

	this.checkWebGLFeatures = function() {

		var failures = {
			'canvas': 'Canvas element not supported.',
			'webgl': 'WebGL not supported.',
			's3tc': 'S3TC texture compression not supported.'
		};

		var canvas, context, s3tc;

		try {
			canvas = document.createElement('canvas');
		} catch(e){}

		if (!canvas) return failures.canvas;

		try {
			context = canvas.getContext('experimental-webgl');
		} catch(e) {}

		if (!context) return failures.webgl;

		s3tc = context.getExtension('WEBGL_compressed_texture_s3tc') ||
			context.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
			context.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');

		if (!s3tc) return failures.s3tc;

		return true;
	};

	this.isWebAudioAvailable = function() {
		return (typeof(window.AudioContext) == "function" || typeof(window.webkitAudioContext) == "function");
	};

	this.displayIncompatiblePlaceholder = function() {
		var $placeholder = $(_this.placeholder.selector);
		$placeholder.attr('src', _this.placeholder.replacement);
		$placeholder.siblings().hide();
		$placeholder.after('<div id="msg-wrapper"><h2 id="unsupported-msg">This browser is currently unsupported. Please download <a target="_blank" href="http://www.mozilla.org/en-US/firefox/">Firefox 22</a> for an optimal experience.</h2></div>');

	};

	this.tryAnyway = function() {
	var $placeholder = $(_this.placeholder.selector);
	$('#LoadButton').hide();
		$placeholder.after('<div id="msg-wrapper"><h2 id="unsupported-msg">This browser is currently unsupported. Please download <a target="_blank" href="http://www.mozilla.org/en-US/firefox/">Firefox 22</a> for an optimal experience or <a href="#" onclick="StartLoad(); return false;">try anyway.</a></h2></div>');
	};

	this.displayMessage = function(msg) {
		_this.$alertbox.html(msg).show();
	};

	this.clearMessage = function() {
		_this.$alertbox.html('').hide();
	};

	this.init = function() {

		var glAvailable = _this.checkWebGLFeatures(),
			useFirefoxText = ' For an optimal experience, use <a href="http://www.mozilla.org/en-US/firefox/">Firefox 22</a>. Older versions of Firefox and Google Chrome may work, but will not be optimal.';


		if(_this.isChrome || _this.isSafari) {
			_this.tryAnyway();
		} else if (glAvailable !== true) {
			_this.displayIncompatiblePlaceholder();
		} else if (!_this.isFirefox) {
			_this.displayMessage(useFirefoxText);
		}

	}();

}

$(function() {

	new Warnings('#warnings', { selector: '#LoadingScreen', replacement: 'images/unsupported.jpg' });

});
