
// 粒子背景初期化
particlesJS("particles-js", {
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

// 返回顶部按钮控制（如需可添加）
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  if (btn) {
    btn.style.display = window.scrollY > 300 ? "flex" : "none";
  }
};
function toggleWechat() {
    const popup = document.getElementById("wechat-popup");
    if (popup) {
      popup.style.display = popup.style.display === "flex" ? "none" : "flex";
      popup.style.alignItems = "center";
      popup.style.justifyContent = "center";
    }
  }
  function setLang(lang) {
    document.querySelectorAll('[data-lang-ja]').forEach(el => {
      const key = el.getAttribute(`data-lang-${lang}`);
      if (key) el.textContent = key;
    });
  }
  window.addEventListener("DOMContentLoaded", function () {
    const text = "eスポーツ装備屋へようこそ。";
    const target = document.getElementById("typed-title");
    let index = 0;
  
    function type() {
      if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }
  
    type();
  });
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
  });
  // 滚动变色导航栏
window.addEventListener("scroll", () => {
    document.body.classList.toggle("scrolled", window.scrollY > 40);
  });
  