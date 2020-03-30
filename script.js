var chf = document.getElementById("franco").value;
var eur = document.getElementById("euro").value;


function euroConverter() {
  var eur = document.getElementById("euro").value;
  var chf = eur * 1.06;
  var number = chf.toFixed(2);
  document.getElementById("franco").value = number + " CHF";
  document.getElementById("euro").value = eur + " EUR";
}

function chfConverter() {
  var chf = document.getElementById("franco").value;
  var eur = chf * 0.94;
  var number = eur.toFixed(2);
  document.getElementById("euro").value = number + " EUR";
  document.getElementById("franco").value = chf + " CHF";
}

function zero() {
  document.getElementById("euro").value = "";
  document.getElementById("franco").value = "";
}
