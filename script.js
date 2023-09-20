var inputLabel = document.getElementById("inputLabel");

function pushBtn(value) {
  var pushed = value.innerHTML;

  if (pushed == "=") {
    // Menghitung
    inputLabel.innerHTML = eval(inputLabel.innerHTML);
  } else if (pushed == "AC") {
    // Hapus Semua
    inputLabel.innerHTML = "0";
  } else {
    if (inputLabel.innerHTML == "0") {
      inputLabel.innerHTML = pushed;
    } else {
      inputLabel.innerHTML += pushed;
    }
  }
}
