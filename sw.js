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
    "revision": "63a12dd4a51cc78b6908e11b361e51b1"
  }, {
    "url": "assets/_...all_-ed46e7af.js",
    "revision": null
  }, {
    "url": "assets/_name_-9b58223c.js",
    "revision": null
  }, {
    "url": "assets/404-68fc7375.js",
    "revision": null
  }, {
    "url": "assets/about-d270da05.js",
    "revision": null
  }, {
    "url": "assets/app-8f486c77.js",
    "revision": null
  }, {
    "url": "assets/home-b48548c4.js",
    "revision": null
  }, {
    "url": "assets/index-77c7a56b.css",
    "revision": null
  }, {
    "url": "assets/README-85725f23.js",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-43119c6b.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-295a6886.js",
    "revision": null
  }, {
    "url": "index_new.html",
    "revision": "bf3a36aa353d5221d15495257186d49f"
  }, {
    "url": "index_old.html",
    "revision": "bf3a36aa353d5221d15495257186d49f"
  }, {
    "url": "index.html",
    "revision": "d5053f32408f0af0b0b0f4e7bfcfaaea"
  }, {
    "url": "readme.html",
    "revision": "9b62cc15b0f97f61796a49ea4a4c7537"
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
