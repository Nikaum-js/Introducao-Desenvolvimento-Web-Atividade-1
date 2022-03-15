let dateControl = document.querySelector('input[type="date"]');

let date = new Date();

let day = String(date.getDate()).padStart(2, '0');
let month = String(date.getMonth() + 1).padStart(2, '0');
let year = date.getFullYear();

currentData = year + '-' + month + '-' + day;

dateControl.value = currentData;

function CalcIMC() {
  var inputWeight = document.getElementById("weight").value;
  var inputHeight = document.getElementById("height").value;

  if (inputHeight.includes(",")) {
    alert("Não usa , não loko se vai quebrar o sistema para de graça e coloca .")
    
    return
  }

  var IMC = inputWeight / (inputHeight * inputHeight)

  console.log(IMC)

  if (IMC < 18.5) {
    alert("Seu IMC é de " + IMC.toFixed(2) + " CLASSIFICAÇÃO MAGREZA");
  } else if (IMC > 18.5 && IMC <= 24.9) {
    alert("Seu IMC é de " + IMC.toFixed(2) + " CLASSIFICAÇÃO NORMAL");
  } else if (IMC > 25 && IMC <= 29.9) {
    alert("Seu IMC é de " + IMC.toFixed(2) + " CLASSIFICAÇÃO SOBREPESO");
  } else if (IMC > 30 && IMC <= 39.9) {
    alert("Seu IMC é de " + IMC.toFixed(2) + " CLASSIFICAÇÃO OBESIDADE");
  } else if (IMC > 40 && IMC <= 80) {
    alert("Seu IMC é de " + IMC.toFixed(2) + " CLASSIFICAÇÃO OBESIDADE GRAVE");
  } else if (IMC > 120) {
    alert("Coloca as informações certas ai véi");
  } else {
    alert("Como você quer calcular sem preencher os campos?");
  }

  return IMC;
}
