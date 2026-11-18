// শেয়ার্ড নেভিগেশন ও ফুটার — নতুন ক্যালকুলেটর যোগ করতে শুধু PAGES তালিকায় একটা লাইন যোগ করুন
(function () {
  var PAGES = [
    { href: 'index.html',        label: 'হোম',            icon: '🏠' },
    { href: 'masala.html',       label: 'স্পেশাল মসলা',   icon: '🌶️' },
    { href: 'mishti-tok.html',   label: 'মিষ্টি টক',      icon: '🍯' },
    { href: 'chotpoti.html',     label: 'চটপটি',          icon: '🥣' },
    { href: 'fuchka-vorta.html', label: 'ফুচকা ভর্তা',    icon: '🧆' },
    { href: 'tikiya.html',       label: 'টিকিয়া',         icon: '🍘' }
  ];
  window.SITE_PAGES = PAGES;

  var file = location.pathname.split('/').pop() || 'index.html';
  document.body.classList.add('has-nav');

  var nav = document.createElement('nav');
  nav.id = 'siteNav';
  nav.setAttribute('aria-label', 'মূল মেনু');
  nav.innerHTML =
    '<div class="in">' +
      '<a class="brand" href="index.html">🍽️ কিছুক্ষণ আপ্যায়ন</a>' +
      '<button class="menuBtn" type="button" aria-label="মেনু খুলুন" aria-expanded="false">☰</button>' +
      '<div class="links">' +
        PAGES.map(function (p) {
          return '<a href="' + p.href + '"' + (p.href === file ? ' class="on" aria-current="page"' : '') + '>' +
                 p.icon + ' ' + p.label + '</a>';
        }).join('') +
      '</div>' +
    '</div>';
  document.body.insertBefore(nav, document.body.firstChild);

  var btn = nav.querySelector('.menuBtn');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('.links a').forEach(function (a) {
    a.addEventListener('click', function () { nav.classList.remove('open'); });
  });

  // ফুটার (হোম পেজে index নিজেই দেয়)
  if (!document.getElementById('siteFoot')) {
    var f = document.createElement('div');
    f.id = 'siteFoot';
    f.innerHTML = '<a href="index.html">← সব ক্যালকুলেটরে ফিরে যান</a> · কিছুক্ষণ আপ্যায়ন';
    document.body.appendChild(f);
  }
})();
