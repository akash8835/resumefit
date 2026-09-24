document.getElementById("go").addEventListener("click", async function () {
  var msg = document.getElementById("msg");
  try {
    var tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    var tab = tabs[0];
    if (!tab || !/^https?:/.test(tab.url || "")) { msg.textContent = "Open a job page first."; return; }
    await chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["extract.js"] });
    var res = await chrome.scripting.executeScript({ target: { tabId: tab.id }, func: function () { var j = window.__resumefitExtract(); return { job: j, url: window.__resumefitOpen(j) }; } });
    var r = res && res[0] && res[0].result;
    if (!r || !r.job.text || r.job.text.length < 80) { msg.textContent = "Could not find a job description on this page."; return; }
    chrome.tabs.create({ url: r.url });
    window.close();
  } catch (e) { msg.textContent = "Could not read this page."; }
});
