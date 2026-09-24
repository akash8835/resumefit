(function () {
  if (window.__resumefitLoaded) return;
  window.__resumefitLoaded = true;
  function isJobPage() {
    var u = location.href;
    if (/linkedin\.com\/jobs/.test(u)) return /currentJobId=|\/jobs\/view\//.test(u);
    if (/naukri\.com/.test(u)) return /job-listings-|\/job-listings/.test(u);
    return false;
  }
  var btn = document.createElement("button");
  btn.id = "resumefit-btn";
  btn.type = "button";
  btn.innerHTML = '<span class="rf-logo">R</span><span>Analyze with ResumeFit</span>';
  btn.addEventListener("click", function () {
    var job = window.__resumefitExtract();
    if (!job.text || job.text.length < 80) {
      btn.querySelector("span:last-child").textContent = "Open the full job description first";
      setTimeout(function () { btn.querySelector("span:last-child").textContent = "Analyze with ResumeFit"; }, 2500);
      return;
    }
    window.open(window.__resumefitOpen(job), "_blank", "noopener");
  });
  function sync() {
    var show = isJobPage();
    if (show && !btn.isConnected) document.body.appendChild(btn);
    if (!show && btn.isConnected) btn.remove();
  }
  sync();
  // LinkedIn and Naukri are single-page apps; watch for URL changes.
  var lastUrl = location.href;
  setInterval(function () { if (location.href !== lastUrl) { lastUrl = location.href; sync(); } }, 800);
})();
