/*
 * Title: Copy UI Feature with Animation
 * Description: Example of a useful feature for the user to copy text from a click of a button
 * Ghosting animation is used to provide feedback that item was copied
 * Author: Juan Hurtado
 * Date: 04/11/2018
 *
 */

const $input = $("input");

$("button").click(() => {
  let $copyTxt = $("#textToCopy");

  // Grab the cordinates of the text to be copy
  // Will be used to place a duplicate text over this one for animation
  let copyTxtCor = {
    height: $copyTxt.innerHeight(),
    width: $copyTxt.innerWidth(),
    top: $copyTxt.position().top,
    left: $copyTxt.position().left
  }
  // Create a duplicate element and give cordinates directly over the original #textToCopy
  let $copyTxtFade = $("<p></p>").text($copyTxt.text()).css({
    "height": copyTxtCor.height,
    "width": copyTxtCor.width,
    "top": copyTxtCor.top,
    "left": copyTxtCor.left,
    "position": "absolute"
  })

  // Insert duplicate text in the dom
  $copyTxt.after($copyTxtFade);

  $copyTxtFade.addClass("juanAni");

  // Grab the text and insert it into a non visible input field
  // To be able to copy to the user's clipboard
  $input.val($copyTxtFade.text()).select();
  document.execCommand("Copy");

  // Wait one second for animation to complete before removing class
  setTimeout(() => {
  $copyTxtFade.remove();
  }, 1000);

});
