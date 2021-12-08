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

// Carbon

let $onC = document.querySelector(".onC");
let $offC = document.querySelector(".offC");

let $switchOnC = document.querySelector(".switchOnC");
let $switchOffC = document.querySelector(".switchOffC");

let countC_A = 1;
let countC_D = 0;

function switchC(active) {
  if (active) {
    if (countC_A === 1) {
      $onC.style.transform = "translateX(0px)";
      $onC.style.backgroundColor = "#e0e0e0";
      $switchOnC.style.backgroundColor = "#8d8d8d";
      countC_A = 0;
    } else {
      $onC.style.transform = "translateX(38px)";
      $onC.style.backgroundColor = "#FFF";
      $switchOnC.style.backgroundColor = "#25a14b";
      countC_A = 1;
    }
  } else {
    if (countC_D === 0) {
      $offC.style.transform = "translateX(38px)";      
      $offC.style.backgroundColor = "#FFF";
      $switchOffC.style.backgroundColor = "#25a14b";
      countC_D = 1;
    } else {
      $offC.style.transform = "translateX(0px)";     
       $offC.style.backgroundColor = "#e0e0e0";
      $switchOffC.style.backgroundColor = "#8d8d8d";
      countC_D = 0;
    }
  }
}

// Fluent

let $onF = document.querySelector(".onF");
let $offF = document.querySelector(".offF");

let $switchOnF = document.querySelector(".switchOnF");
let $switchOffF = document.querySelector(".switchOffF");

let countF_A = 1;
let countF_D = 0;

function switchF(active) {
  if (active) {
    if (countF_A === 1) {
      $onF.style.transform = "translateX(0px)";
      $onF.style.backgroundColor = "#5f5e5c";
      $switchOnF.style.backgroundColor = "#FFF";
      $switchOnF.style.border = "2.5px solid #838383";
      countF_A = 0;
    } else {
        $onF.style.transform = "translateX(40px)";
        $onF.style.backgroundColor = "#FFF";
        $switchOnF.style.backgroundColor = "#0277d4";
        $switchOnF.style.border = "none";
      countF_A = 1;
    }
  } else {
    if (countF_D === 0) {
      $offF.style.transform = "translateX(40px)";      
      $offF.style.backgroundColor = "#FFF";
      $switchOffF.style.backgroundColor = "#0277d4";
      $switchOffF.style.border = "none";
      countF_D = 1;
    } else {
      $offF.style.transform = "translateX(0px)";     
       $offF.style.backgroundColor = "#5f5e5c";
      $switchOffF.style.backgroundColor = "#FFF";
      $switchOffF.style.border = "2.5px solid #838383";
      countF_D = 0;
    }
  }
}