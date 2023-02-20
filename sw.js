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
    "url": "about.html",
    "revision": "af553565658e9c7a5bd6efdd54434bfc"
  }, {
    "url": "assets/_...all_-13909331.js",
    "revision": null
  }, {
    "url": "assets/_name_-11947f15.js",
    "revision": null
  }, {
    "url": "assets/404-45a80617.js",
    "revision": null
  }, {
    "url": "assets/about-d0cf834c.js",
    "revision": null
  }, {
    "url": "assets/app-6f718cf6.js",
    "revision": null
  }, {
    "url": "assets/home-681fbbac.js",
    "revision": null
  }, {
    "url": "assets/index-39963f04.css",
    "revision": null
  }, {
    "url": "assets/README-eb4ff58d.js",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-fd1bba34.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-295a6886.js",
    "revision": null
  }, {
    "url": "index_new.html",
    "revision": "15c0eaefcaa3c3bb2df7d0381d5b14dc"
  }, {
    "url": "index_old.html",
    "revision": "15c0eaefcaa3c3bb2df7d0381d5b14dc"
  }, {
    "url": "index.html",
    "revision": "17eeb9c96ed903ab7293357da96ef89f"
  }, {
    "url": "readme.html",
    "revision": "9f0d9ab25f83fbc12ede4c3c288e1583"
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
