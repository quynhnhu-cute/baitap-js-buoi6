// Bài tập 1

var validator = new Validator();
var findMinInteger = function () {
  var sum = 0;
  var i = 0;
  do {
    i++;
    sum += i;
  } while (sum <= 10000);
  return i;
};

var txtResult = document.querySelector("#txtResult");
txtResult.innerHTML = "Số nguyên dương nhỏ nhất: " + findMinInteger();
txtResult.style.backgroundColor = "#ADD8E6";
txtResult.style.height = "30px";
txtResult.style.color = "blue";

// Bài tập 2

btnSum = document.querySelector("#btnSum");
btnSum.style.backgroundColor = "red";
btnSum.style.color = "white";
txtNumberResult = document.querySelector("#txtNumberResult");
txtNumberResult.style.backgroundColor = "#FFCCCB";

var calculateSum = function () {
  var result = 0;
  var baseNum = document.querySelector("#txtBaseNum").value;
  var powerNum = document.querySelector("#txtIndexNum").value;
  if (
    !validator.checkPositiveInteger(
      powerNum,
      "txtNumberResult",
      "n phải là số nguyên dương"
    )
  ) {
    return;
  }
  if (parseFloat(powerNum) === 0) {
    txtNumberResult.innerHTML = "n phải là số nguyên dương";
    return;
  }
  for (var i = 1; i <= powerNum; i++) {
    result += Math.pow(baseNum, i);
  }

  txtNumberResult.innerHTML = result;
};

btnSum.onclick = function () {
  calculateSum();
};

// Bài tập số 3

var factorialResult = document.querySelector("#txtFactorialResult");
factorialResult.style.backgroundColor = "#D0F0C0";
var btnCalculateFactorial = document.querySelector("#btnCalculateFactorial");
btnCalculateFactorial.style.backgroundColor = "#33A532";
btnCalculateFactorial.style.color = "white";

var calculateFactorial = function (number) {
  var result = 1;

  if (number === 0) {
    result = 1;
  } else {
    for (var i = 1; i <= number; i++) {
      result *= i;
    }
  }
  return result;
};

btnCalculateFactorial.onclick = function () {
  var number = document.querySelector("#txtNumInput").value;

  if (
    !validator.checkPositiveInteger(
      number,
      "txtFactorialResult",
      "n phải là số nguyên lớn hơn hoặc bằng 0"
    )
  ) {
    return;
  } else {
    factorialResult.innerHTML = calculateFactorial(parseFloat(number));
  }
};

// Bài 4

var btnCreateDiv = document.querySelector("#btnCreateDiv");
btnCreateDiv.style.backgroundColor = "#33A532";
btnCreateDiv.style.color = "white";
var divMain = document.querySelector("#divMain");
divMain.style.backgroundColor = "black";
btnRefresh = document.querySelector("#btnRefresh");
btnRefresh.style.backgroundColor = "#33A532";
btnRefresh.style.color = "white";

var addDivOdd = function(){
  var content = divMain.innerHTML;
  content += `<div style="background-color: blue;"></div>`
  divMain.innerHTML = content;
}

btnCreateDiv.onclick = function(){
  var listDiv = document.querySelectorAll("#addDiv");
  if(listDiv.length > 0){
    alert("Vui lòng nhấn refresh trước khi tạo div");
    return;
  }
  for(var i = 0 ; i < 10; i++){
    divMain.style.height = "300px";
    divMain.style.padding = "30px"
    var div = document.createElement('div');
    div.style.color ="white";
    div.style.width = "100%";
    div.style.margin = "0";
    div.id = "addDiv";
    if(i % 2 === 0){
      div.innerHTML = "Div chẵn " + (i + 1);
      div.style.backgroundColor = "blue";
    }else{
      div.innerHTML = "Div lẻ " + (i + 1);
      div.style.backgroundColor = "red";
    }
    divMain.appendChild(div);
  }
}


btnRefresh.onclick = function(){
  divMain.style.height = "0px";
  var listDiv = document.querySelectorAll("#addDiv");
  console.log(listDiv);
    for(var i = 0 ; i < listDiv.length; i++){
      listDiv[i].parentNode.removeChild(listDiv[i]);
    } 
}
