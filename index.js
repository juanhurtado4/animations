const $input = $("input");

$("button").click(() => {
  let $copyTxt = $("p").text();

  $("#first").addClass("juanAni")

  $input.val($("#second").text()).select();
  document.execCommand("Copy");
  setTimeout(() => {
  $("#first").removeClass("juanAni");
  }, 1000);
});
