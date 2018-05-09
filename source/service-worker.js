"use strict";

function register() {
    // HACK: we force-unregister all serviceworkers
    unregisterAllServiceWorkers();
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

function unregisterAllServiceWorkers() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
          for(let registration of registrations) {
            registration.unregister()
          }
        })
    } else {
        console.log("No serviceWorker found in navigator");
    }
}

self.addEventListener("install", function(e) {
    console.log("install")
    return self.skipWaiting()
})

self.addEventListener("activate", function(e) {
    console.log("activate")
    unregisterAllServiceWorkers();
    return undefined
})

self.addEventListener("fetch", function(e) {
    console.log("fetch")
    fetch(e.request)
})