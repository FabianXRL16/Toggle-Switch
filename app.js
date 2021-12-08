// IOS

let $onIOS = document.querySelector(".onIOS");
let $offIOS = document.querySelector(".offIOS");

let $switchOnIOS = document.querySelector(".switchOnIOS");
let $switchOffIOS = document.querySelector(".switchOffIOS");

let countIOS_A = 1;
let countIOS_D = 0;

function switchIOS(active) {
  if (active) {
    if (countIOS_A === 1) {
      $onIOS.style.transform = "translateX(0px)";
      $switchOnIOS.style.backgroundColor = "#e9e9eb";
      countIOS_A = 0;
    } else {
      $onIOS.style.transform = "translateX(29px)";
      $switchOnIOS.style.backgroundColor = "#65c063";
      countIOS_A = 1;
    }
  } else {
    if (countIOS_D === 0) {
      $offIOS.style.transform = "translateX(29px)";
      $switchOffIOS.style.backgroundColor = "#65c063";
      countIOS_D = 1;
    } else {
      $offIOS.style.transform = "translateX(0px)";
      $switchOffIOS.style.backgroundColor = "#e9e9eb";
      countIOS_D = 0;
    }
  }
}
