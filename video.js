document.addEventListener('DOMContentLoaded', () => {
  const vids = ["videos/sigma.mp4", "videos/bald.mp4"];
  const chosen = vids[Math.floor(Math.random() * vids.length)];

  const video = document.getElementById("vid");
  video.src = chrome.runtime.getURL(chosen);
});
