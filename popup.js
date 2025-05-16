document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['timeSpent'], data => {
    const siteList = document.getElementById('siteList');
    siteList.innerHTML = '';

    const timeSpent = data.timeSpent || {};
    const entries = Object.entries(timeSpent);

    if (entries.length === 0) {
      siteList.textContent = 'No data yet';
      return;
    }

    // Sort by time spent descending
    entries.sort((a, b) => b[1] - a[1]);

    entries.forEach(([site, seconds]) => {
      const li = document.createElement('li');
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      li.textContent = `${site}: ${mins}m ${secs}s`;
      siteList.appendChild(li);
    });
  });
});


