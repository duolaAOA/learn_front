(function () {
    let backtop = document.getElementById("backtop");
    let timer;

    // 返回顶部按钮监听
    backtop.onclick = function () {
        // 设表先关
        clearInterval(timer);

        timer = setInterval(function () {
            document.documentElement.scrollTop -= 100;
            if (document.documentElement.scrollTop <= 0) {
                clearInterval(timer);
            }
        }, 20);
    };

    window.onscroll = function () {
      // 卷动值
      let scrollTop = document.documentElement.scrollTop || window.scrollY;
      // 页面没有卷，那么返回顶部按钮就隐藏掉
      if (scrollTop == 0) {
          backtop.style.display = 'none';
      } else {
          backtop.style.display = 'block';
      }
    }
})();
