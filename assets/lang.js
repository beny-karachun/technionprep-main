// Hebrew-first page with a small English toggle. Remembers the choice.
(function () {
  var nodes = document.querySelectorAll('[data-en]');
  nodes.forEach(function (n) { n.dataset.he = n.innerHTML; });
  var btn = document.getElementById('lang');
  var root = document.documentElement;
  function set(lang) {
    var en = lang === 'en';
    root.lang = en ? 'en' : 'he';
    root.dir = en ? 'ltr' : 'rtl';
    nodes.forEach(function (n) { n.innerHTML = en ? n.dataset.en : n.dataset.he; });
    btn.textContent = en ? 'עב' : 'EN';
    btn.setAttribute('aria-label', en ? 'החלפה לעברית' : 'Switch to English');
    try { localStorage.setItem('tp-lang', lang); } catch (e) {}
  }
  btn.addEventListener('click', function () { set(root.lang === 'en' ? 'he' : 'en'); });
  var saved = null;
  try { saved = localStorage.getItem('tp-lang'); } catch (e) {}
  if (saved === 'en') set('en');
  var y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();
})();
