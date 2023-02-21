/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-01d9f47c'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "_about.html",
    "revision": "89416cf9823fb33d11d6356cd8d8a281"
  }, {
    "url": "_creo_32_copy.html",
    "revision": "f77e1405d0a357f4bce6fe06b64b7d8b"
  }, {
    "url": "_creo_33_copy.html",
    "revision": "22ca4e91e0447843ca0dbee90a20646b"
  }, {
    "url": "_index_24.html",
    "revision": "1560f4140af84ecb456b310562eb1ec6"
  }, {
    "url": "_index_new.html",
    "revision": "12b0722e86d04572c395ef9ee5420b0e"
  }, {
    "url": "_index_old.html",
    "revision": "1f8089fb5d1386d8a13a501b531900be"
  }, {
    "url": "_index_proto.html",
    "revision": "45fa299cbafdfec555e43ff1204707a3"
  }, {
    "url": "_readme.html",
    "revision": "48468213a78d9532851b802f2dda05bd"
  }, {
    "url": "assets/_...all_-7976e8e2.js",
    "revision": null
  }, {
    "url": "assets/_about-4b74baab.js",
    "revision": null
  }, {
    "url": "assets/_creo_32_copy-3200730b.js",
    "revision": null
  }, {
    "url": "assets/_creo_33_copy-fb100735.js",
    "revision": null
  }, {
    "url": "assets/_index_24-b4fb8bb0.js",
    "revision": null
  }, {
    "url": "assets/_index_new-2a940028.js",
    "revision": null
  }, {
    "url": "assets/_index_old-b320362d.js",
    "revision": null
  }, {
    "url": "assets/_index_proto-e0fe07bb.js",
    "revision": null
  }, {
    "url": "assets/_name_-e69213e6.js",
    "revision": null
  }, {
    "url": "assets/_README-3e5306d4.js",
    "revision": null
  }, {
    "url": "assets/404-3807414f.js",
    "revision": null
  }, {
    "url": "assets/app-010f87e2.js",
    "revision": null
  }, {
    "url": "assets/creo_31-b7ff8cac.js",
    "revision": null
  }, {
    "url": "assets/creo_32-04c6d37e.js",
    "revision": null
  }, {
    "url": "assets/creo_33-67118753.css",
    "revision": null
  }, {
    "url": "assets/creo_33-f8cd86f3.js",
    "revision": null
  }, {
    "url": "assets/home-ef064b5f.js",
    "revision": null
  }, {
    "url": "assets/index-98a65742.css",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-7e6f0ec2.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-295a6886.js",
    "revision": null
  }, {
    "url": "creo_31.html",
    "revision": "1ee88b6668efd42c947cd00daa4d13bb"
  }, {
    "url": "creo_32.html",
    "revision": "292d3eda368450bb04d8aa9145182cb7"
  }, {
    "url": "creo_33.html",
    "revision": "2c7df165cc7aba4db6e15f1a7d7344a4"
  }, {
    "url": "index_25.html",
    "revision": "671c324581e0fd77c4ba19acc3a49759"
  }, {
    "url": "index.html",
    "revision": "0f989c48a9a9b84249c0fdc31c9dbc55"
  }, {
    "url": "favicon.svg",
    "revision": "ace522bcd0981d1ed1d24f2083f5457f"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "8f91cd762d1e18f9c261acec1d55375a"
  }, {
    "url": "pwa-192x192.png",
    "revision": "27e7ad362c4521304a0f5680f3b1009e"
  }, {
    "url": "pwa-512x512.png",
    "revision": "7c4b3b657e0b4522c91c8f6cf3faada7"
  }, {
    "url": "manifest.webmanifest",
    "revision": "3a20caa0542b29115eba49c3a1c5f46a"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
