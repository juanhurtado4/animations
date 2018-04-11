const $input = $("input");

$("button").click(() => {
  let $copyTxt = $("#first");
  let copyTxtCor = {
    height: $copyTxt.innerHeight(),
    width: $copyTxt.innerWidth(),
    top: $copyTxt.position().top,
    left: $copyTxt.position().left
  }
  let $copyTxtFade = $("<p></p>").text($copyTxt.text()).css({
    "height": copyTxtCor.height,
    "width": copyTxtCor.width,
    "top": copyTxtCor.top,
    "left": copyTxtCor.left,
    "position": "absolute"
  })
  console.log($copyTxtFade.width());
  console.log(copyTxtCor.width);

  $copyTxt.after($copyTxtFade);

  // $copyTxt.addClass("juanAni");
  $copyTxtFade.addClass("juanAni");

  // $input.val($copyTxt.text()).select();
  $input.val($copyTxtFade.text()).select();
  document.execCommand("Copy");

  setTimeout(() => {
  $copyTxtFade.remove();
  }, 1000);

});
