// 粒子背景初始化
if (typeof particlesJS !== 'undefined') particlesJS("particles-js", {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 800 } },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 130,
      color: "#00ffff",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// 返回顶部按钮显示控制
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  if (btn) {
    btn.style.display = window.scrollY > 300 ? "flex" : "none";
  }
};

// 微信弹窗显示隐藏切换
function toggleWechat() {
  const popup = document.getElementById("wechat-popup");
  if (popup) {
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
    popup.style.alignItems = "center";
    popup.style.justifyContent = "center";
  }
}

// 多语言切换
function setLang(lang) {
  document.querySelectorAll('[data-lang-ja]').forEach(el => {
    const key = el.getAttribute(`data-lang-${lang}`);
    if (key) el.textContent = key;
  });
}

// 页面加载后执行的内容
window.addEventListener("DOMContentLoaded", function () {
  // 打字动画：主页主标题
  const text = "eスポーツ装備屋へようこそ。";
  const target = document.getElementById("typed-title");
  if (target) {
    let index = 0;
    function type() {
      if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // 控制打字速度
      }
    }
    type();
  }
});

// 加载完成后隐藏加载动画
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
});

// 滚动时导航栏变色
window.addEventListener("scroll", () => {
  document.body.classList.toggle("scrolled", window.scrollY > 40);
});


// 商品分類フィルター処理
document.querySelectorAll('.category-filter button').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    document.querySelectorAll('.product-card').forEach(card => {
      card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
    });
  });
});
