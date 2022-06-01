$('.number').click(numberInput);
$('.number0').click(numberInput0);
$('.number00').click(numberInput00);
$('.dot').click(numberInputdot);
$('.operater').click(operaterInput);
$('.buttonResult').click(result);
$('.buttonReset').click(reset);

function numberInput() {
 let addnumber = $(this).val();
 let displaynow = $('#displaybox').val();
 let lasttext = displaynow.slice(-1);
 let lasttext2 = displaynow.slice(-2);
 if (displaynow !== "0" && lasttext2 !== "+0" && lasttext2 !== "-0" && lasttext2 !== "*0" && lasttext2 !== "/0") {
  $('#displaybox').val(displaynow + addnumber);
 }
}

function numberInput0() {
 let addnumber = $(this).val();
 let displaynow = $('#displaybox').val();
 let lasttext = displaynow.slice(-1);
 let lasttext2 = displaynow.slice(-2);
 if (displaynow !== "0" && lasttext2 !== "+0" && lasttext2 !== "-0" && lasttext2 !== "*0" && lasttext2 !== "/0") {
  $('#displaybox').val(displaynow + addnumber);
 }
}

function numberInput00() {
 let addnumber = $(this).val();
 let displaynow = $('#displaybox').val();
 let lasttext = displaynow.slice(-1);
 let lasttext2 = displaynow.slice(-2);
 if (displaynow !== "" && displaynow !== "0" && lasttext2 !== "+0" && lasttext2 !== "-0" && lasttext2 !== "*0" && lasttext2 !== "/0" & lasttext !== "+" & lasttext != "-" & lasttext != "*" & lasttext != "/") {
  $('#displaybox').val(displaynow + addnumber);
 }
}

function numberInputdot() {
 let addnumber = $(this).val();
 let displaynow = $('#displaybox').val();
 let lasttext = displaynow.slice(-1);
 let dotlocation = displaynow.lastIndexOf(".");
 if (dotlocation === -1) {
  if (lasttext !== "+" && lasttext !== "*" && lasttext !== "/" && lasttext !== "." && lasttext !== "") {
   $('#displaybox').val(displaynow + addnumber);
  }
 }
 else {
  let dotpossibly = displaynow.indexOf("+", dotlocation) != "-1" || displaynow.indexOf("-", dotlocation) != "-1" || displaynow.indexOf("*", dotlocation) != "-1" || displaynow.indexOf("/", dotlocation) != "-1"
  if (dotpossibly === true) {
   if (lasttext !== "+" && lasttext !== "-" && lasttext !== "*" && lasttext !== "/" && lasttext !== "." && lasttext !== "") {
    $('#displaybox').val(displaynow + addnumber);
   }
  }
  else {
   $('#displaybox').val(displaynow);
  }
 }
}


function operaterInput() {
 let addoperater = $(this).val();
 let displaynow = $('#displaybox').val();
 let lasttext = displaynow.slice(-1);
 if (lasttext !== "+" && lasttext !== "-" && lasttext !== "*" && lasttext !== "/" && lasttext !== "." && lasttext !== "") {
  $('#displaybox').val(displaynow + addoperater);
 }
}

function reset() {
 $('#displaybox').val("");
}

function result() {
 let displaynow = $('#displaybox').val();
 let displayResult = eval(displaynow);
 let displayend = Math.round(displayResult * 1000000) / 1000000;
 $('#displaybox').val(displayend);
}
