// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/** \u4F60\u597D\uFF0C\u6211\u53EB\u53F6\u5065\u6770\n ** \u9996\u5148\u6D88\u9664\u4E00\u4E0B\u9ED8\u8BA4\u6837\u5F0F\n **/\n.day, .night {\n  box-sizing: border-box\n}\n\n.day * {\n  box-sizing: border-box;\n}\n\n.night * {\n  box-sizing: border-box;\n}\n\n.day *::before, .night *::before,\n.day *::after, .night *::after {\n  box-sizing: border-box;\n}\n\n.day *, .night * {\n  margin: 0;\n  padding: 0;\n}\n\n/** \u63A5\u4E0B\u6765\u8BA9\u6211\u628A\u767D\u5929\u548C\u9ED1\u591C\u5206\u5F00\n **/\n.day {\n  display: inline-block;\n  width: 50%;\n  height: 50vh;\n  background: #0093ff;\n  position: relative;\n}\n\n.night {\n  position: relative;\n  float: right;\n  width: 50%;\n  height: 50vh;\n  background: #0a0e28;\n}\n\n.day::before {\n  position: absolute;\n  content: '';\n  width: 0;\n  height: 0;\n  border-width: 12.5vh;\n  border-style: solid;\n  border-color: #0a0e28 #0a0e28 transparent transparent;\n  right: 0;\n  top: 0;\n}\n\n.night::before {\n  position: absolute;\n  content: '';\n  width: 0;\n  height: 0;\n  border-width: 12.5vh;\n  border-style: solid;\n  border-color: transparent transparent #0093ff #0093ff;\n  left: 0;\n  bottom: 0;\n}\n\n/** \u5148\u753B\u51FA\u6765\u592A\u9633\u5427\n **/\n\n.sun {\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 12.5vh;\n  height: 12.5vh;\n}\n\n/** \u795E\u8BF4\uFF0C\u8981\u6709\u5149\n **/\n\n.sun .rays,\n.sun .rays::before,\n.sun .rays::after {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 5%;\n  background-color: #ffb02b;\n}\n\n.sun .rays::before {\n  content: \"\";\n  transform: rotate(30deg);\n}\n\n.sun .rays::after {\n  content: \"\";\n  transform: rotate(60deg);\n}\n/** \u7ED9\u592A\u9633\u753B\u4E0A\u8138\u5427\n **/\n.sun .face {\n  position: relative;\n  margin: -10%;\n  width: 120%;\n  height: 120%;\n  border-radius: 100%;\n  background-color: #ffb02b;\n}\n\n.sun .face::before {\n  content: \"\";\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  width: 90%;\n  height: 90%;\n  border-radius: 100%;\n  background-color: #ffec00;\n}\n/** \u773C\u775B\n **/\n.sun .face .eye {\n  position: absolute;\n  top: 40%;\n  width: 7%;\n  height: 7%;\n  border-radius: 100%;\n  background-color: #756b01;\n  transform: translateY(-50%);\n  animation: sunblink 5s infinite;\n}\n\n.sun .face .left.eye {\n  left: 25%;\n}\n\n.sun .face .right.eye {\n  right: 25%;\n}\n\n.sun .face .cheek {\n  position: absolute;\n  top: 46%;\n  width: 4%;\n  height: 4%;\n  border-radius: 100%;\n  background-color: rgba(255, 176, 43, 0.6);\n  transform: scale(2.5, 0.75);\n}\n\n.sun .face .left.cheek {\n  left: 25%;\n}\n\n.sun .face .right.cheek {\n  right: 25%;\n}\n/** \u5634\u5DF4\n **/\n.sun .face .mouth {\n  position: absolute;\n  top: 42%;\n  left: 35%;\n  width: 30%;\n  height: 16%;\n  border-radius: 20% 20% 60% 60% / 30% 30% 100% 100%;\n  background-color: #756b01;\n  overflow: hidden;\n  transform: translate(0);\n}\n\n.sun .face .mouth::after {\n  content: \"\";\n  position: absolute;\n  top: 30%;\n  left: 15%;\n  width: 70%;\n  height: 100%;\n  border-radius: 100%;\n  background-color: #f04e50;\n}\n/** \u63A5\u7740\u6765\u753B\u6708\u4EAE\u5427\n **/\n.moon {\n  position: absolute;\n  bottom: 60%;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 12.5vh;\n  width: 12.5vh;\n  background: #EAEAEA;\n  border-radius: 50%;\n  box-shadow: inset -15px 0 6px #BFBFBF, 0 0 8px #EAEAEA;\n}\n/** \u73AF\u5F62\u5C71\u662F\u6708\u4EAE\u7684\u7279\u5F81\uFF0C\u53EF\u4E0D\u80FD\u6F0F\u4E86\u54E6\n **/\n.moon .craters {\n  position: absolute;\n  top: 20%;\n  left: 20%;\n  height: 20%;\n  width: 20%;\n  background: #BFBFBF;\n  border-radius: 50%;\n  box-shadow: inset -1px 0 1px #9E9E9E;\n  opacity: 0.4;\n}\n\n.moon .craters::before {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  background: #BFBFBF;\n  top: -15%;\n  right: -145%;\n  height: 60%;\n  width: 60%;\n  box-shadow: inset -1px 0 1px #9E9E9E;\n}\n\n.moon .craters::after {\n  content: \"\";\n  border-radius: 50%;\n  position: absolute;\n  background: #BFBFBF;\n  top: 200%;\n  left: 250%;\n  height: 40%;\n  width: 40%;\n  box-shadow: inset -1px 0 1px #9E9E9E;\n}\n/** \u773C\u775B\n **/\n.eye-left,\n.eye-right {\n  position: absolute;\n  bottom: 30%;\n  height: 15%;\n  width: 9%;\n  background: #333;\n  border-radius: 50%;\n  animation: moonblink 4s linear infinite;\n}\n\n.eye-left::before,\n.eye-right::before {\n  position: absolute;\n  display: block;\n  content: \"\";\n  top: 1px;\n  right: 2px;\n  height: 8px;\n  width: 4px;\n  background: #EAEAEA;\n  border-radius: 50%;\n}\n\n.eye-left {\n  left: 10%;\n}\n\n.eye-right {\n  bottom: 25%;\n  left: 30%;\n}\n/** \u6709\u6708\u4EAE\u600E\u4E48\u80FD\u6CA1\u6709\u661F\u661F\u5462\n **/\n.stars {\n  position: absolute;\n  top: 20%;\n  left: calc((100% - 45%) / 2);\n  height: 15vh;\n  width: 22vw;\n}\n\n.stars .top,\n.stars .top::before,\n.stars .top::after,\n.stars .left,\n.stars .left::before,\n.stars .left::after,\n.stars .bottom,\n.stars .bottom::before,\n.stars .bottom::after,\n.stars .right {\n  background: #EFE894;\n  border-radius: 50%;\n  box-shadow: 0 0 5px 1px #EFE894;\n}\n\n.stars .top {\n  position: absolute;\n  top: 0;\n  left: -10%;\n  height: 6px;\n  width: 6px;\n  box-shadow: 0 0 5px #EFE894;\n}\n\n.stars .top::before {\n  position: absolute;\n  display: block;\n  content: \"\";\n  top: 500%;\n  left: 1530%;\n  height: 8px;\n  width: 8px;\n}\n\n.stars .top::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  top: 100%;\n  left: 1530%;\n  height: 6px;\n  width: 6px;\n}\n\n.stars .left {\n  position: absolute;\n  top: 20%;\n  left: -25%;\n  height: 8px;\n  width: 8px;\n  box-shadow: 0 0 5px #EFE894;\n}\n\n.stars .left::before {\n  position: absolute;\n  display: block;\n  content: \"\";\n  top: 500%;\n  left: 200%;\n  height: 6px;\n  width: 6px;\n}\n\n.stars .left::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  top: 300%;\n  left: -140%;\n  height: 6px;\n  width: 6px;\n}\n\n.stars .bottom {\n  position: absolute;\n  bottom: 20%;\n  right: 28%;\n  height: 6px;\n  width: 6px;\n  box-shadow: 0 0 5px #EFE894;\n}\n\n.stars .bottom::before {\n  position: absolute;\n  display: block;\n  content: \"\";\n  height: 8px;\n  width: 8px;\n  bottom: -110%;\n  right: 400%;\n}\n\n.stars .bottom::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  height: 6px;\n  width: 6px;\n  top: 300%;\n  right: 700%;\n}\n\n.stars .right {\n  position: absolute;\n  bottom: 25%;\n  right: 10%;\n  height: 10px;\n  width: 10px;\n}\n/** \u6700\u540E\uFF0C\u7ED9\u5B83\u4EEC\u52A0\u70B9\u52A8\u753B\uFF0C\u8BA9\u4ED6\u4EEC\u52A8\u8D77\u6765\u5427\n **/\n.sun .rays {\n  animation: spin 10s infinite linear;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.stars .top,\n.stars .top::before,\n.stars .top::after,\n.stars .left,\n.stars .left::before,\n.stars .left::after,\n.stars .bottom,\n.stars .bottom::before,\n.stars .bottom::after,\n.stars .right {\n  animation: glow 5s linear infinite;\n}\n\n@keyframes glow {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes moonblink {\n  5%, 10% {\n    height: 1px;\n  }\n  10% {\n    height: 15%;\n  }\n}\n\n@keyframes sunblink {\n  0% {\n    height: 1%;\n  }\n  2% {\n    height: 7%;\n  }\n  100% {\n    height: 7%;\n  }\n}\n/** \u70ED\u60C5\u6D3B\u529B\u7684\u767D\u5929\uFF0C\u548C\u6E29\u67D4\u9759\u8C27\u7684\u591C\u665A\uFF0C\u4F60\u559C\u6B22\u54EA\u4E2A\u5462\uFF1F\n **/\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  n: 1,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.time = 300;
    player.pause();
    player.play();
  },
  normal: function normal() {
    player.time = 100;
    player.pause();
    player.play();
  },
  fast: function fast() {
    player.time = 0;
    player.pause();
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"C:/Users/PC/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49874" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/PC/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map