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
    "revision": "ebdbab93d3cbfebe9a073a458bd3f955"
  }, {
    "url": "_creo_32_copy.html",
    "revision": "e24222355e4abe4b40719eef5c8d4984"
  }, {
    "url": "_creo_33_copy.html",
    "revision": "be6558f74c14db8fa0b4b32fc7e69885"
  }, {
    "url": "_index_24.html",
    "revision": "87a4a9f6ac0ed4193b4d068c9b1e8606"
  }, {
    "url": "_index_new.html",
    "revision": "bc5737d6c83991b7d5c5690062d12d9c"
  }, {
    "url": "_index_old.html",
    "revision": "148ee71dd206d7fab167084bf33feaed"
  }, {
    "url": "_index_proto.html",
    "revision": "01aa3bdea417d372f7c2b1b116aabfad"
  }, {
    "url": "_readme.html",
    "revision": "b73bf119221fcb46480506c149c98d75"
  }, {
    "url": "assets/_...all_-fc1e04c3.js",
    "revision": null
  }, {
    "url": "assets/_about-a1ae19fa.js",
    "revision": null
  }, {
    "url": "assets/_creo_32_copy-3dcf3435.js",
    "revision": null
  }, {
    "url": "assets/_creo_33_copy-bee0b2bd.js",
    "revision": null
  }, {
    "url": "assets/_index_24-b84e7b43.js",
    "revision": null
  }, {
    "url": "assets/_index_new-9c803c98.js",
    "revision": null
  }, {
    "url": "assets/_index_old-386a0349.js",
    "revision": null
  }, {
    "url": "assets/_index_proto-0b8d184d.js",
    "revision": null
  }, {
    "url": "assets/_name_-aed368eb.js",
    "revision": null
  }, {
    "url": "assets/_README-97ffd3c7.js",
    "revision": null
  }, {
    "url": "assets/404-32412bae.js",
    "revision": null
  }, {
    "url": "assets/app-24cd276a.js",
    "revision": null
  }, {
    "url": "assets/creo_31-28e3523d.js",
    "revision": null
  }, {
    "url": "assets/creo_32-b0b3d7a2.js",
    "revision": null
  }, {
    "url": "assets/creo_33-3b496562.js",
    "revision": null
  }, {
    "url": "assets/creo_33-67118753.css",
    "revision": null
  }, {
    "url": "assets/home-65054ec9.js",
    "revision": null
  }, {
    "url": "assets/index-aaddc1cb.css",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-ffae1a41.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-295a6886.js",
    "revision": null
  }, {
    "url": "creo_31.html",
    "revision": "761a6000da0cabec2489be7c3ac24237"
  }, {
    "url": "creo_32.html",
    "revision": "277af7619805d0b3ac7b60aeba276fef"
  }, {
    "url": "creo_33.html",
    "revision": "cd9c0340e9b1d50e43201387f983e726"
  }, {
    "url": "index_25.html",
    "revision": "21cdc5e52b2727bdf5a4d0d69b4c2aa8"
  }, {
    "url": "index.html",
    "revision": "18f9ebc6b70e073d20daff5dbb1a2a4b"
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
