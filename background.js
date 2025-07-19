chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    chrome.storage.sync.get(["watchedSites"], ({ watchedSites }) => {
      if (!watchedSites) return;

      for (const site of watchedSites) {
        if (tab.url.includes(site)) {
          chrome.tabs.create({ url: chrome.runtime.getURL("video.html") });
          break;
        }
      }
    });
  }
});