
(function() {

  if (typeof Module == 'undefined') Module = {};
  if (!Module['preRun']) Module['preRun'] = [];
  Module["preRun"].push(function() {

function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'Binaries', true, true);
Module['FS_createPath']('/', 'Engine', true, true);
Module['FS_createPath']('/Engine', 'Stats', true, true);
Module['FS_createPath']('/', 'UDKGame', true, true);
Module['FS_createPath']('/UDKGame', 'CookedBrowser', true, true);
Module['FS_createPath']('/UDKGame', 'Movies', true, true);

    function DataRequest() {}
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.requests[name] = this;
      },
      send: function() {}
    };
  
    var filePreload0 = new DataRequest();
    filePreload0.open('GET', 'Binaries/build.properties', true);
    filePreload0.responseType = 'arraybuffer';
    filePreload0.onload = function() {
      var arrayBuffer = filePreload0.response;
      assert(arrayBuffer, 'Loading file Binaries/build.properties failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/Binaries', 'build.properties', byteArray, true, true, function() {
        Module['removeRunDependency']('fp Binaries/build.properties');

      });
    };
    Module['addRunDependency']('fp Binaries/build.properties');
    filePreload0.send(null);

    var filePreload1 = new DataRequest();
    filePreload1.open('GET', 'Engine/Stats/ChartStyle.css', true);
    filePreload1.responseType = 'arraybuffer';
    filePreload1.onload = function() {
      var arrayBuffer = filePreload1.response;
      assert(arrayBuffer, 'Loading file Engine/Stats/ChartStyle.css failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/Engine/Stats', 'ChartStyle.css', byteArray, true, true, function() {
        Module['removeRunDependency']('fp Engine/Stats/ChartStyle.css');

      });
    };
    Module['addRunDependency']('fp Engine/Stats/ChartStyle.css');
    filePreload1.send(null);

    var filePreload2 = new DataRequest();
    filePreload2.open('GET', 'Engine/Stats/FPSChart_Postamble.html', true);
    filePreload2.responseType = 'arraybuffer';
    filePreload2.onload = function() {
      var arrayBuffer = filePreload2.response;
      assert(arrayBuffer, 'Loading file Engine/Stats/FPSChart_Postamble.html failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/Engine/Stats', 'FPSChart_Postamble.html', byteArray, true, true, function() {
        Module['removeRunDependency']('fp Engine/Stats/FPSChart_Postamble.html');

      });
    };
    Module['addRunDependency']('fp Engine/Stats/FPSChart_Postamble.html');
    filePreload2.send(null);

    var filePreload3 = new DataRequest();
    filePreload3.open('GET', 'Engine/Stats/FPSChart_Preamble.html', true);
    filePreload3.responseType = 'arraybuffer';
    filePreload3.onload = function() {
      var arrayBuffer = filePreload3.response;
      assert(arrayBuffer, 'Loading file Engine/Stats/FPSChart_Preamble.html failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/Engine/Stats', 'FPSChart_Preamble.html', byteArray, true, true, function() {
        Module['removeRunDependency']('fp Engine/Stats/FPSChart_Preamble.html');

      });
    };
    Module['addRunDependency']('fp Engine/Stats/FPSChart_Preamble.html');
    filePreload3.send(null);

    var filePreload4 = new DataRequest();
    filePreload4.open('GET', 'Engine/Stats/FPSChart_Row.html', true);
    filePreload4.responseType = 'arraybuffer';
    filePreload4.onload = function() {
      var arrayBuffer = filePreload4.response;
      assert(arrayBuffer, 'Loading file Engine/Stats/FPSChart_Row.html failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/Engine/Stats', 'FPSChart_Row.html', byteArray, true, true, function() {
        Module['removeRunDependency']('fp Engine/Stats/FPSChart_Row.html');

      });
    };
    Module['addRunDependency']('fp Engine/Stats/FPSChart_Row.html');
    filePreload4.send(null);

    var filePreload5 = new DataRequest();
    filePreload5.open('GET', 'Engine/Stats/FPSStyle.css', true);
    filePreload5.responseType = 'arraybuffer';
    filePreload5.onload = function() {
      var arrayBuffer = filePreload5.response;
      assert(arrayBuffer, 'Loading file Engine/Stats/FPSStyle.css failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/Engine/Stats', 'FPSStyle.css', byteArray, true, true, function() {
        Module['removeRunDependency']('fp Engine/Stats/FPSStyle.css');

      });
    };
    Module['addRunDependency']('fp Engine/Stats/FPSStyle.css');
    filePreload5.send(null);

    var filePreload6 = new DataRequest();
    filePreload6.open('GET', 'Engine/Stats/MemoryChart_Postamble.html', true);
    filePreload6.responseType = 'arraybuffer';
    filePreload6.onload = function() {
      var arrayBuffer = filePreload6.response;
      assert(arrayBuffer, 'Loading file Engine/Stats/MemoryChart_Postamble.html failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/Engine/Stats', 'MemoryChart_Postamble.html', byteArray, true, true, function() {
        Module['removeRunDependency']('fp Engine/Stats/MemoryChart_Postamble.html');

      });
    };
    Module['addRunDependency']('fp Engine/Stats/MemoryChart_Postamble.html');
    filePreload6.send(null);

    var filePreload7 = new DataRequest();
    filePreload7.open('GET', 'Engine/Stats/MemoryChart_Preamble.html', true);
    filePreload7.responseType = 'arraybuffer';
    filePreload7.onload = function() {
      var arrayBuffer = filePreload7.response;
      assert(arrayBuffer, 'Loading file Engine/Stats/MemoryChart_Preamble.html failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/Engine/Stats', 'MemoryChart_Preamble.html', byteArray, true, true, function() {
        Module['removeRunDependency']('fp Engine/Stats/MemoryChart_Preamble.html');

      });
    };
    Module['addRunDependency']('fp Engine/Stats/MemoryChart_Preamble.html');
    filePreload7.send(null);

    var filePreload8 = new DataRequest();
    filePreload8.open('GET', 'Engine/Stats/MemoryChart_Row.html', true);
    filePreload8.responseType = 'arraybuffer';
    filePreload8.onload = function() {
      var arrayBuffer = filePreload8.response;
      assert(arrayBuffer, 'Loading file Engine/Stats/MemoryChart_Row.html failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/Engine/Stats', 'MemoryChart_Row.html', byteArray, true, true, function() {
        Module['removeRunDependency']('fp Engine/Stats/MemoryChart_Row.html');

      });
    };
    Module['addRunDependency']('fp Engine/Stats/MemoryChart_Row.html');
    filePreload8.send(null);

    var filePreload9 = new DataRequest();
    filePreload9.open('GET', 'Engine/Stats/MemoryStyle.css', true);
    filePreload9.responseType = 'arraybuffer';
    filePreload9.onload = function() {
      var arrayBuffer = filePreload9.response;
      assert(arrayBuffer, 'Loading file Engine/Stats/MemoryStyle.css failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/Engine/Stats', 'MemoryStyle.css', byteArray, true, true, function() {
        Module['removeRunDependency']('fp Engine/Stats/MemoryStyle.css');

      });
    };
    Module['addRunDependency']('fp Engine/Stats/MemoryStyle.css');
    filePreload9.send(null);

    var filePreload10 = new DataRequest();
    filePreload10.open('GET', 'UDKGame/BrowserTOC.txt', true);
    filePreload10.responseType = 'arraybuffer';
    filePreload10.onload = function() {
      var arrayBuffer = filePreload10.response;
      assert(arrayBuffer, 'Loading file UDKGame/BrowserTOC.txt failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame', 'BrowserTOC.txt', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/BrowserTOC.txt');

      });
    };
    Module['addRunDependency']('fp UDKGame/BrowserTOC.txt');
    filePreload10.send(null);

    var filePreload11 = new DataRequest();
    filePreload11.open('GET', 'UDKGame/CookedBrowser/AllShaders.bin', true);
    filePreload11.responseType = 'arraybuffer';
    filePreload11.onload = function() {
      var arrayBuffer = filePreload11.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/AllShaders.bin failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'AllShaders.bin', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/AllShaders.bin');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/AllShaders.bin');
    filePreload11.send(null);

    var filePreload12 = new DataRequest();
    filePreload12.open('GET', 'UDKGame/CookedBrowser/CachedProgramKeys.txt', true);
    filePreload12.responseType = 'arraybuffer';
    filePreload12.onload = function() {
      var arrayBuffer = filePreload12.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/CachedProgramKeys.txt failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'CachedProgramKeys.txt', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/CachedProgramKeys.txt');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/CachedProgramKeys.txt');
    filePreload12.send(null);

    var filePreload13 = new DataRequest();
    filePreload13.open('GET', 'UDKGame/CookedBrowser/CharTextures.tfc', true);
    filePreload13.responseType = 'arraybuffer';
    filePreload13.onload = function() {
      var arrayBuffer = filePreload13.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/CharTextures.tfc failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'CharTextures.tfc', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/CharTextures.tfc');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/CharTextures.tfc');
    filePreload13.send(null);

    var filePreload14 = new DataRequest();
    filePreload14.open('GET', 'UDKGame/CookedBrowser/Coalesced_INT.bin', true);
    filePreload14.responseType = 'arraybuffer';
    filePreload14.onload = function() {
      var arrayBuffer = filePreload14.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/Coalesced_INT.bin failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'Coalesced_INT.bin', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/Coalesced_INT.bin');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/Coalesced_INT.bin');
    filePreload14.send(null);

    var filePreload15 = new DataRequest();
    filePreload15.open('GET', 'UDKGame/CookedBrowser/Core.xxx', true);
    filePreload15.responseType = 'arraybuffer';
    filePreload15.onload = function() {
      var arrayBuffer = filePreload15.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/Core.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'Core.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/Core.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/Core.xxx');
    filePreload15.send(null);

    var filePreload16 = new DataRequest();
    filePreload16.open('GET', 'UDKGame/CookedBrowser/Engine.xxx', true);
    filePreload16.responseType = 'arraybuffer';
    filePreload16.onload = function() {
      var arrayBuffer = filePreload16.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/Engine.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'Engine.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/Engine.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/Engine.xxx');
    filePreload16.send(null);

    var filePreload17 = new DataRequest();
    filePreload17.open('GET', 'UDKGame/CookedBrowser/EngineShadersInfo.bin', true);
    filePreload17.responseType = 'arraybuffer';
    filePreload17.onload = function() {
      var arrayBuffer = filePreload17.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/EngineShadersInfo.bin failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'EngineShadersInfo.bin', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/EngineShadersInfo.bin');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/EngineShadersInfo.bin');
    filePreload17.send(null);

    var filePreload18 = new DataRequest();
    filePreload18.open('GET', 'UDKGame/CookedBrowser/EnvyEntry.xxx', true);
    filePreload18.responseType = 'arraybuffer';
    filePreload18.onload = function() {
      var arrayBuffer = filePreload18.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/EnvyEntry.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'EnvyEntry.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/EnvyEntry.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/EnvyEntry.xxx');
    filePreload18.send(null);

    var filePreload19 = new DataRequest();
    filePreload19.open('GET', 'UDKGame/CookedBrowser/EpicCitadel.xxx', true);
    filePreload19.responseType = 'arraybuffer';
    filePreload19.onload = function() {
      var arrayBuffer = filePreload19.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/EpicCitadel.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'EpicCitadel.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/EpicCitadel.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/EpicCitadel.xxx');
    filePreload19.send(null);

    var filePreload20 = new DataRequest();
    filePreload20.open('GET', 'UDKGame/CookedBrowser/GameFramework.xxx', true);
    filePreload20.responseType = 'arraybuffer';
    filePreload20.onload = function() {
      var arrayBuffer = filePreload20.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/GameFramework.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'GameFramework.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/GameFramework.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/GameFramework.xxx');
    filePreload20.send(null);

    var filePreload21 = new DataRequest();
    filePreload21.open('GET', 'UDKGame/CookedBrowser/GFxUI.xxx', true);
    filePreload21.responseType = 'arraybuffer';
    filePreload21.onload = function() {
      var arrayBuffer = filePreload21.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/GFxUI.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'GFxUI.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/GFxUI.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/GFxUI.xxx');
    filePreload21.send(null);

    var filePreload22 = new DataRequest();
    filePreload22.open('GET', 'UDKGame/CookedBrowser/GlobalShaderCache-PC-D3D-SM3.bin', true);
    filePreload22.responseType = 'arraybuffer';
    filePreload22.onload = function() {
      var arrayBuffer = filePreload22.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/GlobalShaderCache-PC-D3D-SM3.bin failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'GlobalShaderCache-PC-D3D-SM3.bin', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/GlobalShaderCache-PC-D3D-SM3.bin');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/GlobalShaderCache-PC-D3D-SM3.bin');
    filePreload22.send(null);

    var filePreload23 = new DataRequest();
    filePreload23.open('GET', 'UDKGame/CookedBrowser/GuidCache.xxx', true);
    filePreload23.responseType = 'arraybuffer';
    filePreload23.onload = function() {
      var arrayBuffer = filePreload23.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/GuidCache.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'GuidCache.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/GuidCache.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/GuidCache.xxx');
    filePreload23.send(null);

    var filePreload24 = new DataRequest();
    filePreload24.open('GET', 'UDKGame/CookedBrowser/IpDrv.xxx', true);
    filePreload24.responseType = 'arraybuffer';
    filePreload24.onload = function() {
      var arrayBuffer = filePreload24.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/IpDrv.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'IpDrv.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/IpDrv.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/IpDrv.xxx');
    filePreload24.send(null);

    var filePreload25 = new DataRequest();
    filePreload25.open('GET', 'UDKGame/CookedBrowser/Lighting.tfc', true);
    filePreload25.responseType = 'arraybuffer';
    filePreload25.onload = function() {
      var arrayBuffer = filePreload25.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/Lighting.tfc failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'Lighting.tfc', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/Lighting.tfc');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/Lighting.tfc');
    filePreload25.send(null);

    var filePreload26 = new DataRequest();
    filePreload26.open('GET', 'UDKGame/CookedBrowser/OnlineSubsystemPC.xxx', true);
    filePreload26.responseType = 'arraybuffer';
    filePreload26.onload = function() {
      var arrayBuffer = filePreload26.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/OnlineSubsystemPC.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'OnlineSubsystemPC.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/OnlineSubsystemPC.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/OnlineSubsystemPC.xxx');
    filePreload26.send(null);

    var filePreload27 = new DataRequest();
    filePreload27.open('GET', 'UDKGame/CookedBrowser/PreprocessedShadersInfo.bin', true);
    filePreload27.responseType = 'arraybuffer';
    filePreload27.onload = function() {
      var arrayBuffer = filePreload27.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/PreprocessedShadersInfo.bin failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'PreprocessedShadersInfo.bin', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/PreprocessedShadersInfo.bin');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/PreprocessedShadersInfo.bin');
    filePreload27.send(null);

    var filePreload28 = new DataRequest();
    filePreload28.open('GET', 'UDKGame/CookedBrowser/ShaderGroups.bin', true);
    filePreload28.responseType = 'arraybuffer';
    filePreload28.onload = function() {
      var arrayBuffer = filePreload28.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/ShaderGroups.bin failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'ShaderGroups.bin', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/ShaderGroups.bin');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/ShaderGroups.bin');
    filePreload28.send(null);

    var filePreload29 = new DataRequest();
    filePreload29.open('GET', 'UDKGame/CookedBrowser/ShaderGroups.ini', true);
    filePreload29.responseType = 'arraybuffer';
    filePreload29.onload = function() {
      var arrayBuffer = filePreload29.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/ShaderGroups.ini failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'ShaderGroups.ini', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/ShaderGroups.ini');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/ShaderGroups.ini');
    filePreload29.send(null);

    var filePreload30 = new DataRequest();
    filePreload30.open('GET', 'UDKGame/CookedBrowser/Startup.xxx', true);
    filePreload30.responseType = 'arraybuffer';
    filePreload30.onload = function() {
      var arrayBuffer = filePreload30.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/Startup.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'Startup.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/Startup.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/Startup.xxx');
    filePreload30.send(null);

    var filePreload31 = new DataRequest();
    filePreload31.open('GET', 'UDKGame/CookedBrowser/Startup_LOC_INT.xxx', true);
    filePreload31.responseType = 'arraybuffer';
    filePreload31.onload = function() {
      var arrayBuffer = filePreload31.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/Startup_LOC_INT.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'Startup_LOC_INT.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/Startup_LOC_INT.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/Startup_LOC_INT.xxx');
    filePreload31.send(null);

    var filePreload32 = new DataRequest();
    filePreload32.open('GET', 'UDKGame/CookedBrowser/Textures.tfc', true);
    filePreload32.responseType = 'arraybuffer';
    filePreload32.onload = function() {
      var arrayBuffer = filePreload32.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/Textures.tfc failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'Textures.tfc', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/Textures.tfc');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/Textures.tfc');
    filePreload32.send(null);

    var filePreload33 = new DataRequest();
    filePreload33.open('GET', 'UDKGame/CookedBrowser/UDKBase.xxx', true);
    filePreload33.responseType = 'arraybuffer';
    filePreload33.onload = function() {
      var arrayBuffer = filePreload33.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/UDKBase.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'UDKBase.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/UDKBase.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/UDKBase.xxx');
    filePreload33.send(null);

    var filePreload34 = new DataRequest();
    filePreload34.open('GET', 'UDKGame/CookedBrowser/UDKBase_LOC_INT.xxx', true);
    filePreload34.responseType = 'arraybuffer';
    filePreload34.onload = function() {
      var arrayBuffer = filePreload34.response;
      assert(arrayBuffer, 'Loading file UDKGame/CookedBrowser/UDKBase_LOC_INT.xxx failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/CookedBrowser', 'UDKBase_LOC_INT.xxx', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/CookedBrowser/UDKBase_LOC_INT.xxx');

      });
    };
    Module['addRunDependency']('fp UDKGame/CookedBrowser/UDKBase_LOC_INT.xxx');
    filePreload34.send(null);

    var filePreload35 = new DataRequest();
    filePreload35.open('GET', 'UDKGame/Movies/MultichannelTest_LOC.bik', true);
    filePreload35.responseType = 'arraybuffer';
    filePreload35.onload = function() {
      var arrayBuffer = filePreload35.response;
      assert(arrayBuffer, 'Loading file UDKGame/Movies/MultichannelTest_LOC.bik failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/Movies', 'MultichannelTest_LOC.bik', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/Movies/MultichannelTest_LOC.bik');

      });
    };
    Module['addRunDependency']('fp UDKGame/Movies/MultichannelTest_LOC.bik');
    filePreload35.send(null);

    var filePreload36 = new DataRequest();
    filePreload36.open('GET', 'UDKGame/Movies/MultichannelTest_LOC.txt', true);
    filePreload36.responseType = 'arraybuffer';
    filePreload36.onload = function() {
      var arrayBuffer = filePreload36.response;
      assert(arrayBuffer, 'Loading file UDKGame/Movies/MultichannelTest_LOC.txt failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/Movies', 'MultichannelTest_LOC.txt', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/Movies/MultichannelTest_LOC.txt');

      });
    };
    Module['addRunDependency']('fp UDKGame/Movies/MultichannelTest_LOC.txt');
    filePreload36.send(null);

    var filePreload37 = new DataRequest();
    filePreload37.open('GET', 'UDKGame/Movies/UDKFrontEnd.udk_loading.bik', true);
    filePreload37.responseType = 'arraybuffer';
    filePreload37.onload = function() {
      var arrayBuffer = filePreload37.response;
      assert(arrayBuffer, 'Loading file UDKGame/Movies/UDKFrontEnd.udk_loading.bik failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/Movies', 'UDKFrontEnd.udk_loading.bik', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/Movies/UDKFrontEnd.udk_loading.bik');

      });
    };
    Module['addRunDependency']('fp UDKGame/Movies/UDKFrontEnd.udk_loading.bik');
    filePreload37.send(null);

    var filePreload38 = new DataRequest();
    filePreload38.open('GET', 'UDKGame/Movies/UE3_logo.bik', true);
    filePreload38.responseType = 'arraybuffer';
    filePreload38.onload = function() {
      var arrayBuffer = filePreload38.response;
      assert(arrayBuffer, 'Loading file UDKGame/Movies/UE3_logo.bik failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/UDKGame/Movies', 'UE3_logo.bik', byteArray, true, true, function() {
        Module['removeRunDependency']('fp UDKGame/Movies/UE3_logo.bik');

      });
    };
    Module['addRunDependency']('fp UDKGame/Movies/UE3_logo.bik');
    filePreload38.send(null);

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var PACKAGE_PATH = window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = '..\..\..\UnrealEngine3\Binaries\Browser\UDKGame_Data.data';
    var REMOTE_PACKAGE_NAME = 'UDKGame_Data.data';
    var PACKAGE_UUID = '4f02188b-994f-4c45-8be2-73c4496e87cd';
  
      var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      var IDB_RO = "readonly";
      var IDB_RW = "readwrite";
      var DB_NAME = 'EM_PRELOAD_CACHE';
      var DB_VERSION = 1;
      var METADATA_STORE_NAME = 'METADATA';
      var PACKAGE_STORE_NAME = 'PACKAGES';
      function openDatabase(callback, errback) {
        try {
          var openRequest = indexedDB.open(DB_NAME, DB_VERSION);
        } catch (e) {
          return errback(e);
        }
        openRequest.onupgradeneeded = function(event) {
          var db = event.target.result;

          if(db.objectStoreNames.contains(PACKAGE_STORE_NAME)) {
            db.deleteObjectStore(PACKAGE_STORE_NAME);
          }
          var packages = db.createObjectStore(PACKAGE_STORE_NAME);

          if(db.objectStoreNames.contains(METADATA_STORE_NAME)) {
            db.deleteObjectStore(METADATA_STORE_NAME);
          }
          var metadata = db.createObjectStore(METADATA_STORE_NAME);
        };
        openRequest.onsuccess = function(event) {
          var db = event.target.result;
          callback(db);
        };
        openRequest.onerror = function(error) {
          errback(error);
        };
      };

      /* Check if there's a cached package, and if so whether it's the latest available */
      function checkCachedPackage(db, packageName, callback, errback) {
        var transaction = db.transaction([METADATA_STORE_NAME], IDB_RO);
        var metadata = transaction.objectStore(METADATA_STORE_NAME);

        var getRequest = metadata.get(packageName);
        getRequest.onsuccess = function(event) {
          var result = event.target.result;
          if (!result) {
            return callback(false);
          } else {
            return callback(PACKAGE_UUID === result.uuid);
          }
        };
        getRequest.onerror = function(error) {
          errback(error);
        };
      };

      function fetchCachedPackage(db, packageName, callback, errback) {
        var transaction = db.transaction([PACKAGE_STORE_NAME], IDB_RO);
        var packages = transaction.objectStore(PACKAGE_STORE_NAME);

        var getRequest = packages.get(packageName);
        getRequest.onsuccess = function(event) {
          var result = event.target.result;
          callback(result);
        };
        getRequest.onerror = function(error) {
          errback(error);
        };
      };

      function cacheRemotePackage(db, packageName, packageData, packageMeta, callback, errback) {
        var transaction = db.transaction([PACKAGE_STORE_NAME, METADATA_STORE_NAME], IDB_RW);
        var packages = transaction.objectStore(PACKAGE_STORE_NAME);
        var metadata = transaction.objectStore(METADATA_STORE_NAME);

        var putPackageRequest = packages.put(packageData, packageName);
        putPackageRequest.onsuccess = function(event) {
          var putMetadataRequest = metadata.put(packageMeta, packageName);
          putMetadataRequest.onsuccess = function(event) {
            callback(packageData);
          };
          putMetadataRequest.onerror = function(error) {
            errback(error);
          };
        };
        putPackageRequest.onerror = function(error) {
          errback(error);
        };
      };
    
    // [2026 static-hosting edit] .data is split into 6 parts (<=22 MiB each) for hosts with per-file limits;
    // fetch all parts in parallel and concatenate into the original single ArrayBuffer.
    function fetchRemotePackage(packageName, callback, errback) {
      var NPARTS = 6, TOTAL = 132476771, parts = new Array(NPARTS), done = 0, loaded = new Array(NPARTS);
      for (var p = 0; p < NPARTS; p++) (function (p) {
        var x = new XMLHttpRequest();
        x.open('GET', packageName + '.part' + p, true);
        x.responseType = 'arraybuffer';
        x.onprogress = function (e) { loaded[p] = e.loaded; var l = 0; for (var k = 0; k < NPARTS; k++) l += loaded[k] || 0;
          Module['setStatus']('Downloading data... (' + l + '/' + TOTAL + ')'); };
        x.onload = function () {
          if (x.status !== 200 && x.status !== 0) { if (errback) errback(new Error('HTTP ' + x.status + ' ' + packageName + '.part' + p)); return; }
          parts[p] = new Uint8Array(x.response);
          if (++done === NPARTS) {
            var out = new Uint8Array(TOTAL), off = 0;
            for (var k = 0; k < NPARTS; k++) { out.set(parts[k], off); off += parts[k].length; }
            if (off !== TOTAL) throw 'UDKGame_Data.data size mismatch: ' + off;
            callback(out.buffer);
          }
        };
        x.send(null);
      })(p);
    };
    function fetchRemotePackage_original(packageName, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        if (event.loaded && event.total) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: event.total
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        curr = DataRequest.prototype.requests['Binaries/build.properties'];
        curr.response = byteArray.subarray(0,87);
        curr.onload();
      
        curr = DataRequest.prototype.requests['Engine/Stats/ChartStyle.css'];
        curr.response = byteArray.subarray(87,1182);
        curr.onload();
      
        curr = DataRequest.prototype.requests['Engine/Stats/FPSChart_Postamble.html'];
        curr.response = byteArray.subarray(1182,1278);
        curr.onload();
      
        curr = DataRequest.prototype.requests['Engine/Stats/FPSChart_Preamble.html'];
        curr.response = byteArray.subarray(1278,4895);
        curr.onload();
      
        curr = DataRequest.prototype.requests['Engine/Stats/FPSChart_Row.html'];
        curr.response = byteArray.subarray(4895,7834);
        curr.onload();
      
        curr = DataRequest.prototype.requests['Engine/Stats/FPSStyle.css'];
        curr.response = byteArray.subarray(7834,8236);
        curr.onload();
      
        curr = DataRequest.prototype.requests['Engine/Stats/MemoryChart_Postamble.html'];
        curr.response = byteArray.subarray(8236,8330);
        curr.onload();
      
        curr = DataRequest.prototype.requests['Engine/Stats/MemoryChart_Preamble.html'];
        curr.response = byteArray.subarray(8330,10868);
        curr.onload();
      
        curr = DataRequest.prototype.requests['Engine/Stats/MemoryChart_Row.html'];
        curr.response = byteArray.subarray(10868,11350);
        curr.onload();
      
        curr = DataRequest.prototype.requests['Engine/Stats/MemoryStyle.css'];
        curr.response = byteArray.subarray(11350,11589);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/BrowserTOC.txt'];
        curr.response = byteArray.subarray(11589,51852);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/AllShaders.bin'];
        curr.response = byteArray.subarray(51852,1183854);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/CachedProgramKeys.txt'];
        curr.response = byteArray.subarray(1183854,1198067);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/CharTextures.tfc'];
        curr.response = byteArray.subarray(1198067,1198067);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/Coalesced_INT.bin'];
        curr.response = byteArray.subarray(1198067,2071159);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/Core.xxx'];
        curr.response = byteArray.subarray(2071159,2268242);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/Engine.xxx'];
        curr.response = byteArray.subarray(2268242,7606682);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/EngineShadersInfo.bin'];
        curr.response = byteArray.subarray(7606682,7621862);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/EnvyEntry.xxx'];
        curr.response = byteArray.subarray(7621862,7635614);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/EpicCitadel.xxx'];
        curr.response = byteArray.subarray(7635614,22082682);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/GameFramework.xxx'];
        curr.response = byteArray.subarray(22082682,22752337);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/GFxUI.xxx'];
        curr.response = byteArray.subarray(22752337,22862241);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/GlobalShaderCache-PC-D3D-SM3.bin'];
        curr.response = byteArray.subarray(22862241,23796206);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/GuidCache.xxx'];
        curr.response = byteArray.subarray(23796206,23799003);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/IpDrv.xxx'];
        curr.response = byteArray.subarray(23799003,24354229);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/Lighting.tfc'];
        curr.response = byteArray.subarray(24354229,35153205);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/OnlineSubsystemPC.xxx'];
        curr.response = byteArray.subarray(35153205,35242328);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/PreprocessedShadersInfo.bin'];
        curr.response = byteArray.subarray(35242328,35268360);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/ShaderGroups.bin'];
        curr.response = byteArray.subarray(35268360,35268928);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/ShaderGroups.ini'];
        curr.response = byteArray.subarray(35268928,35270045);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/Startup.xxx'];
        curr.response = byteArray.subarray(35270045,35514350);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/Startup_LOC_INT.xxx'];
        curr.response = byteArray.subarray(35514350,35651570);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/Textures.tfc'];
        curr.response = byteArray.subarray(35651570,73869476);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/UDKBase.xxx'];
        curr.response = byteArray.subarray(73869476,76625442);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/CookedBrowser/UDKBase_LOC_INT.xxx'];
        curr.response = byteArray.subarray(76625442,76697701);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/Movies/MultichannelTest_LOC.bik'];
        curr.response = byteArray.subarray(76697701,126115305);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/Movies/MultichannelTest_LOC.txt'];
        curr.response = byteArray.subarray(126115305,126115651);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/Movies/UDKFrontEnd.udk_loading.bik'];
        curr.response = byteArray.subarray(126115651,127644927);
        curr.onload();
      
        curr = DataRequest.prototype.requests['UDKGame/Movies/UE3_logo.bik'];
        curr.response = byteArray.subarray(127644927,132476771);
        curr.onload();
                Module['removeRunDependency']('datafile_..\..\..\UnrealEngine3\Binaries\Browser\UDKGame_Data.data');

    };
    Module['addRunDependency']('datafile_..\..\..\UnrealEngine3\Binaries\Browser\UDKGame_Data.data');

    function handleError(error) {
      console.error('package error:', error);
    };
  
    if (!Module.preloadResults)
      Module.preloadResults = {};
  
      function preloadFallback(error) {
        console.error(error);
        console.error('falling back to default preload behavior');
        fetchRemotePackage(REMOTE_PACKAGE_NAME, processPackageData, handleError);
      };

      openDatabase(
        function(db) {
          checkCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME,
            function(useCached) {
              Module.preloadResults[PACKAGE_NAME] = {fromCache: useCached};
              if (useCached) {
                console.info('loading ' + PACKAGE_NAME + ' from cache');
                fetchCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME, processPackageData, preloadFallback);
              } else {
                console.info('loading ' + PACKAGE_NAME + ' from remote');
                fetchRemotePackage(REMOTE_PACKAGE_NAME,
                  function(packageData) {
                    cacheRemotePackage(db, PACKAGE_PATH + PACKAGE_NAME, packageData, {uuid:PACKAGE_UUID}, processPackageData,
                      function(error) {
                        console.error(error);
                        processPackageData(packageData);
                      });
                  }
                , preloadFallback);
              }
            }
          , preloadFallback);
        }
      , preloadFallback);

      if (Module['setStatus']) Module['setStatus']('Downloading...');
      });

})();

