"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["app.8c0b67be393bf13671b8fb3c7a054c57.css","a34722b17b0d26cddba1448d24f6d99c"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["fonts/materialdesignicons-webfont.3ef6639.ttf","3ef6639a4cce5b903e4031b1b0102675"],["fonts/materialdesignicons-webfont.9b9f2c4.woff2","9b9f2c447d27a622fcb78f6b7f38a095"],["fonts/materialdesignicons-webfont.eec7f0f.woff","eec7f0f7c8944b878af8fb7fcc091ade"],["img/right-graphite@2x.f2e09a9.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["img/toolbox.dccd722.png","dccd722973e34cc64c99d9f96b8c69c0"],["index.html","30f9742da8f9e7acbf872099ebcc8409"],["js/0.37b6b50719b72c463b0a.js","3daa50a387b3208623bbbadc071852a9"],["js/1.cf0d8014cf3b80749883.js","3e47e494c31ef9c5e47ab15e6d62dc0f"],["js/2.f5df1973feace520cd94.js","3dafb6da1128c41f79c7b6a47eeda76a"],["js/3.98c573f8865ef700d4eb.js","f880d2c682e81dfb290526a68ee2866b"],["js/4.e19288df5dc20dbd8758.js","ebc3b26dd00de6a0934c5806c304e9a2"],["js/5.70f4ef4ad8304de1fd87.js","9d9948d537fefd8ee5254722676a8cd1"],["js/6.19d3f90a43ffbfa9f314.js","14f5d36b316d9ef6f60ca11a536a1b0a"],["js/app.js","0ca5466d25a5f2a73f1a37a6f5a1fb69"],["js/manifest.js","efde3b090d34792758cc3fdff4d7f1f0"],["js/vendor.js","84f8198c6b60581d4f4ff20f6d590f20"],["statics/flespi_logo_black.svg","82f983ec2277961e9878f2bf014b13fc"],["statics/icons/apple-icon-152x152.png","f226c14b8c29deec04353ac121cef906"],["statics/icons/favicon-16x16.png","1351d8ed60e7ae8f4d4f9df9edfd01f2"],["statics/icons/favicon-32x32.png","cf46c82e435aa040daecaf16508027a3"],["statics/icons/icon-192x192.png","45c2787cc9f89717f8a5e29365a63c5f"],["statics/icons/icon-512x512.png","80d7b50368a6c06ffeed6ca3e475d2d2"],["statics/icons/ms-icon-144x144.png","3524bda146fb5e008bc8e9c386b32197"],["statics/manifest.json","e1e0f9f6bf639012521b000d6066edfd"],["statics/quasar-logo.png","3020c8ac2c2872dec7741e5948520093"],["statics/right-graphite@2x.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["statics/toolbox.png","dccd722973e34cc64c99d9f96b8c69c0"],["statics/toolbox50.png","525061fbc60090f9b92f626b25a2a976"],["statics/toolbox_mobile.png","cf46c82e435aa040daecaf16508027a3"]],cacheName="sw-precache-v3-my-quasar-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,!1);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});