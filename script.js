function goToSite() {
  let input = document.getElementById("urlInput").value.trim();
  let frame = document.getElementById("browserFrame");

  if (!input.startsWith("http")) {
    input = "https://duckduckgo.com/?q=" + encodeURIComponent(input);
  }

  // Try loading in iframe
  frame.src = input;

  // If blocked → fallback to new tab after delay
  setTimeout(() => {
    try {
      let test = frame.contentWindow.location.href;
    } catch (e) {
      // If access denied → open in new tab
      window.open(input, "_blank");
    }
  }, 2000);
}
function goToSite() {
  let input = document.getElementById("urlInput").value.trim();
  let frame = document.getElementById("browserFrame");
  let status = document.getElementById("status");

  status.innerText = "Loading...";

  if (!input.startsWith("http")) {
    input = "https://duckduckgo.com/?q=" + encodeURIComponent(input);
  }

  frame.src = input;

  frame.onload = () => {
    status.innerText = "";
  };

  setTimeout(() => {
    try {
      frame.contentWindow.location.href;
    } catch {
      status.innerText = "Opening in new tab...";
      window.open(input, "_blank");
    }
  }, 2000);
}
function goToSite() {
  let input = document.getElementById("urlInput").value.trim();

  // Search engines list
  let engines = [
    "https://duckduckgo.com/?q=",
    "https://www.google.com/search?q=",
    "https://yandex.com/search/?text=",
    "https://www.bing.com/search?q="
  ];

  // Random engine select
  let randomEngine = engines[Math.floor(Math.random() * engines.length)];

  // Final URL
  let finalURL;

  if (!input.startsWith("http")) {
    finalURL = randomEngine + encodeURIComponent(input);
  } else {
    finalURL = input;
  }

  // Always open in new tab (works for all sites)
  window.open(finalURL, "_blank");

  // Show which engine used (optional UI)
  document.getElementById("engineName").innerText =
    "Searching via: " + getEngineName(randomEngine);
}

// Engine name helper
function getEngineName(url) {
  if (url.includes("duckduckgo")) return "DuckDuckGo";
  if (url.includes("google")) return "Google";
  if (url.includes("yandex")) return "Yandex";
  if (url.includes("bing")) return "Bing";
  return "Unknown";
}
function goToSite() {
  let input = document.getElementById("urlInput").value.trim();

  // Search engines list
  let engines = [
    "https://duckduckgo.com/?q=",
    "https://www.google.com/search?q=",
    "https://yandex.com/search/?text=",
    "https://www.bing.com/search?q="
  ];

  let randomEngine = engines[Math.floor(Math.random() * engines.length)];
  let finalURL;

  if (!input.startsWith("http")) {
    finalURL = randomEngine + encodeURIComponent(input);
  } else {
    finalURL = input;
  }

  window.open(finalURL, "_blank"); // open new tab

  document.getElementById("engineName").innerText =
    "Searching via: " + getEngineName(randomEngine);
}

function getEngineName(url) {
  if (url.includes("duckduckgo")) return "DuckDuckGo";
  if (url.includes("google")) return "Google";
  if (url.includes("yandex")) return "Yandex";
  if (url.includes("bing")) return "Bing";
  return "Unknown";
}
// Main search
function goToSite() {
  let input = document.getElementById("urlInput").value.trim();

  // Search engines list
  let engines = [
    "https://duckduckgo.com/?q=",
    "https://www.google.com/search?q=",
    "https://yandex.com/search/?text="
  ];

  let randomEngine = engines[Math.floor(Math.random() * engines.length)];
  let finalURL;

  if (!input.startsWith("http")) {
    finalURL = randomEngine + encodeURIComponent(input);
  } else {
    finalURL = input;
  }

  window.open(finalURL, "_blank");
  document.getElementById("engineName").innerText =
    "Searching via: " + getEngineName(randomEngine);
}

function getEngineName(url) {
  if (url.includes("duckduckgo")) return "DuckDuckGo";
  if (url.includes("google")) return "Google";
  if (url.includes("yandex")) return "Yandex";
  return "Unknown";
}

// NEWS FINDER BUTTONS
function newsSearch(engine) {
  let query = prompt("Enter news topic:").trim();
  if (!query) return;

  let url = "";
  if (engine === "google") {
    url = "https://www.google.com/search?q=" + encodeURIComponent(query) + "&tbm=nws";
  } else if (engine === "duckduckgo") {
    url = "https://duckduckgo.com/?q=" + encodeURIComponent(query) + "&t=h_&ia=news";
  } else if (engine === "yandex") {
    url = "https://yandex.com/news/search?text=" + encodeURIComponent(query);
  }

  window.open(url, "_blank");
  document.getElementById("engineName").innerText = "Searching news via: " + engine.charAt(0).toUpperCase() + engine.slice(1);
}
// Main search
function goToSite() {
  let input = document.getElementById("urlInput").value.trim();

  // Random search engines
  let engines = [
    "https://duckduckgo.com/?q=",
    "https://www.google.com/search?q=",
    "https://yandex.com/search/?text="
  ];
  let randomEngine = engines[Math.floor(Math.random() * engines.length)];
  let finalURL = input.startsWith("http") ? input : randomEngine + encodeURIComponent(input);

  window.open(finalURL, "_blank");
  document.getElementById("engineName").innerText = "Searching via: " + getEngineName(randomEngine);
}

function getEngineName(url) {
  if (url.includes("duckduckgo")) return "DuckDuckGo";
  if (url.includes("google")) return "Google";
  if (url.includes("yandex")) return "Yandex";
  return "Unknown";
}

// NEWS FINDER BUTTONS
function newsSearch(engine) {
  let query = prompt("Enter news topic:").trim();
  if (!query) return;

  let url = "";
  if (engine === "google") url = "https://www.google.com/search?q=" + encodeURIComponent(query) + "&tbm=nws";
  else if (engine === "duckduckgo") url = "https://duckduckgo.com/?q=" + encodeURIComponent(query) + "&t=h_&ia=news";
  else if (engine === "yandex") url = "https://yandex.com/news/search?text=" + encodeURIComponent(query);

  window.open(url, "_blank");
  document.getElementById("engineName").innerText = "Searching news via: " + engine.charAt(0).toUpperCase() + engine.slice(1);
}