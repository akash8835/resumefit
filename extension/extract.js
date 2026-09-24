// Shared job extractor. Returns {title, company, text, url} from the current job page.
window.__resumefitExtract = function () {
  function txt(sel) {
    var list = sel.split("||");
    for (var i = 0; i < list.length; i++) {
      var el = document.querySelector(list[i].trim());
      if (el && el.innerText && el.innerText.trim()) return el.innerText.trim();
    }
    return "";
  }
  var host = location.hostname;
  var out = { title: "", company: "", text: "", url: location.href };
  if (/linkedin\.com$/.test(host)) {
    out.title = txt(".job-details-jobs-unified-top-card__job-title h1 || .job-details-jobs-unified-top-card__job-title || .jobs-unified-top-card__job-title || .top-card-layout__title || h1.t-24 || h1");
    out.company = txt(".job-details-jobs-unified-top-card__company-name a || .job-details-jobs-unified-top-card__company-name || .jobs-unified-top-card__company-name || .topcard__org-name-link || .top-card-layout__second-subline a");
    out.text = txt("#job-details || .jobs-description__content || .jobs-description-content__text || .jobs-box__html-content || .show-more-less-html__markup || .description__text");
    var id = (location.href.match(/currentJobId=(\d+)/) || location.href.match(/jobs\/view\/(\d+)/) || [])[1];
    if (id) out.url = "https://www.linkedin.com/jobs/view/" + id + "/";
  } else if (/naukri\.com$/.test(host)) {
    out.title = txt("h1[class*='jd-header-title'] || h1[class*='title'] || h1");
    out.company = txt("div[class*='jd-header-comp-name'] a || a[class*='comp-name'] || div[class*='comp-name']");
    out.text = txt("section[class*='job-desc'] || div[class*='JDC__dang-inner-html'] || div[class*='job-desc'] || .jd-desc");
    var extra = txt("div[class*='key-skill']");
    if (extra) out.text += "\n\nKey skills: " + extra.replace(/\n+/g, ", ");
  }
  if (!out.text) {
    // Fallback for other job pages: largest text block on the page.
    var best = "", nodes = document.querySelectorAll("article, section, main, div");
    for (var i = 0; i < nodes.length && i < 4000; i++) {
      var t = nodes[i].innerText || "";
      if (t.length > best.length && t.length < 20000 && /responsibilit|requirement|qualification|experience/i.test(t)) best = t;
    }
    out.text = best.trim();
    if (!out.title) out.title = (document.querySelector("h1") || {}).innerText || document.title;
  }
  out.title = (out.title || "").split("\n")[0].trim().slice(0, 150);
  out.company = (out.company || "").split("\n")[0].trim().slice(0, 100);
  out.text = out.text.replace(/\n{3,}/g, "\n\n").slice(0, 7500);
  return out;
};
window.__resumefitOpen = function (job) {
  var json = JSON.stringify(job);
  var b64 = btoa(unescape(encodeURIComponent(json))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return "https://resumefit-app.ashwatthama710.workers.dev/#jd=" + b64;
};
