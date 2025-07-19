document.addEventListener('DOMContentLoaded', () => {
  const siteList = document.getElementById("siteList");
  const status = document.getElementById("status");

  // Load stored sites
  chrome.storage.sync.get(["watchedSites"], (data) => {
    siteList.value = (data.watchedSites || []).join('\n');
  });

  document.getElementById("save").onclick = () => {
    const sites = siteList.value
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    chrome.storage.sync.set({ watchedSites: sites }, () => {
      status.textContent = "Sites saved!";
      setTimeout(() => (status.textContent = ""), 2000);
    });
  };
});