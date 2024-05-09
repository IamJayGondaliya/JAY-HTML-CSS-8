function mtrToFeet() {
  let mtr = document.getElementById("inp-mtr").value;

  let ft = mtr * 3.28084;

  document.getElementById("op-ft").innerHTML = "Feet: " + ft;
}
