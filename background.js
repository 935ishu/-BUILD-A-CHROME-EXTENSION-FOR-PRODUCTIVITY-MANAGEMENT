let activeTabId = null;
let activeSite = null;
let timer = null;

function getSiteFromUrl(url) {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return null;
  }
}

function startTimer() {
  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    if (!activeSite) return;

    chrome.storage.local.get(['timeSpent'], data => {
      let timeSpent = data.timeSpent || {};
      timeSpent[activeSite] = (timeSpent[activeSite] || 0) + 1;
      chrome.storage.local.set({ timeSpent });
    });
  }, 1000); // Every second
}

function updateActiveTab(tabId) {
  chrome.tabs.get(tabId, tab => {
    if (chrome.runtime.lastError || !tab || !tab.url) {
      activeSite = null;
      return;
    }

    activeSite = getSiteFromUrl(tab.url);
    startTimer();
  });
}

chrome.tabs.onActivated.addListener(activeInfo => {
  activeTabId = activeInfo.tabId;
  updateActiveTab(activeTabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tabId === activeTabId && changeInfo.status === 'complete') {
    updateActiveTab(activeTabId);
  }
});

chrome.windows.onFocusChanged.addListener(windowId => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    activeSite = null;
    if (timer) clearInterval(timer);
  } else {
    chrome.tabs.query({ active: true, windowId: windowId }, tabs => {
      if (tabs.length > 0) {
        activeTabId = tabs[0].id;
        updateActiveTab(activeTabId);
      }
    });
  }
});
