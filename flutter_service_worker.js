'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js": "7bdd15af9a93e5b2e45d1958696e1c82",
"manifest.json": "fb4f139e1e60dd64685dd411ace0e8db",
"version.json": "a9dce31794f9c0799cc5a41a8acd0110",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "3d881ed0e0ffff9cd6d86cf6e1b1791d",
"/": "3d881ed0e0ffff9cd6d86cf6e1b1791d",
"assets/AssetManifest.json": "4e42fec7653ddff81c21344785bf210d",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "0ef91f7a86131b4175255d9a92ee19bc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/images/Hobbl.svg": "71d4fa9ced34fb900207f7815287e573",
"assets/assets/images/htsdof.jpg": "c0f043e4ae001920e0f1bd10042d8549",
"assets/assets/images/teotfw.jpg": "b1ad8119028caab99a82ae253eb2a8e5",
"assets/assets/images/breaking_bad.jpeg": "7821e297df27197cdda67e13e82188b8",
"assets/assets/images/sintel_title.png": "213547e6e216ec48180c091ff8c8f13d",
"assets/assets/images/twitter.png": "4200a7ca40c66a6a14ac9b0ea3311c04",
"assets/assets/images/carole_and_tuesday.jpg": "e787073ccc9428249afe92313d00c6bc",
"assets/assets/images/hustle.png": "6a005b0d779a08ed9f6b422c4d8ba219",
"assets/assets/images/more.svg": "4fa53054118b66dfe0a490e1e2bb58a8",
"assets/assets/images/Search.svg": "1aeb5f2050f439935396b131a82da1bd",
"assets/assets/images/www.png": "90753a23d851213f214e1faccc4947cb",
"assets/assets/images/stranger_things.jpg": "45da3c11ae3d50a599d5a91663664d82",
"assets/assets/images/crown_title.png": "02fa5258c38d51bbf902520255352dc2",
"assets/assets/images/netflix_logo1.png": "451f1d563a05a249b69772cfbcc456e7",
"assets/assets/images/tiger_king.jpg": "09f31639810f01424f9e13d47cfd7075",
"assets/assets/images/kakegurui.jpg": "e53e90e841c33926c45deb4dae78442d",
"assets/assets/images/mobile.svg": "8ecdac770cc0f57454c82181dcfdaca4",
"assets/assets/images/violet_evergarden.jpg": "2d3095573a37672e6155447e371d6ea6",
"assets/assets/images/fb.png": "32c042f8866cff78bfd3451501a1a5c0",
"assets/assets/images/witcher.jpg": "36d8eee67f80feedbf05534e642247ae",
"assets/assets/images/thirteen_reasons_why.jpg": "f3c6ba25dc548121333e15a5401b5bd2",
"assets/assets/images/teitter.svg": "1cf667e1c443fe2e280c15883a11b6c1",
"assets/assets/images/crown.jpg": "47eaa139afb5abaf6dca5407f64080f7",
"assets/assets/images/sintel.jpg": "5b4a20ec9a07e03add61dbfff0def608",
"assets/assets/images/mobile.png": "3cec5e53e4667ee975319c3c1a56d33a",
"assets/assets/images/netflix_logo0.png": "141792b61c904a8f7b55645cf47b8cad",
"assets/assets/images/atla.jpg": "5b65b1115886e026df8745ce0fa17a2b",
"assets/assets/images/random3.png": "27e3f5699ad06582e1d4c06d32a45ebb",
"assets/assets/images/umbrella_academy.jpg": "694538108dad1b7bbf145065d438f0d3",
"assets/assets/images/random2.png": "a649a4e4e3b6929ae7234f239ee4dacc",
"assets/assets/images/hustlep.png": "5f711d8356596376dceba9614bc4c6d4",
"assets/assets/images/insta.svg": "c22e2c792a119bbed150c4863266e247",
"assets/assets/images/random1.png": "f1df2b0848caa35475a0324217288856",
"assets/assets/images/umbrella_academy_title.png": "0fc8a66b919dbffb8cb464dc30939b22",
"assets/assets/images/explained.jpg": "431292d11962afefbfe2991fd3d01a67",
"assets/assets/images/black_mirror.jpg": "bbf94b8f7e8cbdbf2c4e9a5b92ea0790",
"assets/assets/images/black_mirror_title.png": "f6ec0b792069f472d2e36634e35baa69",
"assets/assets/images/dogs.jpg": "2b8484bf41be42ce95d42c193cec6a8a",
"assets/assets/images/carole_and_tuesday_title.png": "1f8f81cf47fccb05606f3df26b7695eb",
"assets/assets/images/fb.svg": "589c40e9e6a34ed81c8efc4cbfb9a1a4",
"assets/assets/images/insta.png": "9293db2306d4c23372fffc8278a7074e",
"assets/assets/images/atla_title.png": "6155f51047594677982d4b6aa0c614d2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
