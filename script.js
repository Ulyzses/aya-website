$(document).ready(() => {
  $(document).mousemove(e => {
    $("#uloMulaSaBTS").css({
      left: e.pageX,
      top: e.pageY
    });
  });
});