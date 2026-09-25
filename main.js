// 顶部日期
(function () {
  var el = document.getElementById('today');
  if (el) {
    var d = new Date();
    var week = ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
    el.textContent = '今天是 ' + d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日 星期' + week;
  }
})();

// 首页轮播
(function () {
  var box = document.getElementById('carousel');
  if (!box) return;
  var slides = box.querySelectorAll('.slide');
  var dotsWrap = box.querySelector('.dots');
  var caption = box.querySelector('.caption');
  var idx = 0, timer = null;

  slides.forEach(function (s, i) {
    var dot = document.createElement('span');
    dot.textContent = i + 1;
    dot.onclick = function () { show(i); reset(); };
    dotsWrap.appendChild(dot);
  });
  var dots = dotsWrap.querySelectorAll('span');

  function show(i) {
    idx = (i + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('on', k === idx); });
    dots.forEach(function (d, k) { d.classList.toggle('on', k === idx); });
    caption.textContent = slides[idx].getAttribute('data-caption') || '';
  }
  function next() { show(idx + 1); }
  function reset() { clearInterval(timer); timer = setInterval(next, 5000); }
  show(0); reset();
})();

// 搜索（演示）
(function () {
  var form = document.getElementById('search-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var kw = form.querySelector('input').value.trim();
    alert(kw ? '演示站点暂不提供检索服务，关键词：' + kw : '请输入关键词');
  });
})();

// 设为首页 / 加入收藏（演示提示）
(function () {
  document.querySelectorAll('[data-demo]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      alert('演示站点，该功能未启用');
    });
  });
})();
