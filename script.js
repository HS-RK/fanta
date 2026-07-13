document.querySelectorAll(".cho").forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left =(Math.random()*500)+"px";

  });
});