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

// Material Design

let $onMD = document.querySelector(".onMD");
let $offMD = document.querySelector(".offMD");

let $switchOnMD = document.querySelector(".switchOnMD");
let $switchOffMD = document.querySelector(".switchOffMD");

let countMD_A = 1;
let countMD_D = 0;

function switchMD(active) {
  if (active) {
    if (countMD_A === 1) {
      $onMD.style.transform = "translateX(0px)";
      $onMD.style.backgroundColor = "#FFF";
      $switchOnMD.style.backgroundColor = "#ededed";
      countMD_A = 0;
    } else {
      $onMD.style.transform = "translateX(28px)";
      $onMD.style.backgroundColor = "#6300eb";
      $switchOnMD.style.backgroundColor = "#c29ef8";
      countMD_A = 1;
    }
  } else {
    if (countMD_D === 0) {
      $offMD.style.transform = "translateX(28px)";      
      $offMD.style.backgroundColor = "#6300eb";
      $switchOffMD.style.backgroundColor = "#c29ef8";
      countMD_D = 1;
    } else {
      $offMD.style.transform = "translateX(0px)";     
       $offMD.style.backgroundColor = "#FFF";
      $switchOffMD.style.backgroundColor = "#ededed";
      countMD_D = 0;
    }
  }
}
