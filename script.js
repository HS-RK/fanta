document.querySelectorAll(".cho").forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left =(Math.random()*500)+"px";
      el.style.top =(Math.random()*200+250)+"px";

  });
});
document.querySelectorAll(".foo").forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left =(Math.random()*400+400)+"px";
      el.style.top =(Math.random()*100+200)+"px";

  });
});