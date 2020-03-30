var chf = document.getElementById("franco").value;
var eur = document.getElementById("euro").value;


function euroConverter() {
  var eur = document.getElementById("euro").value;
  var chf = eur * 1.06;
  document.getElementById("franco").value = chf + " CHF";
  document.getElementById("euro").value = eur + " EUR";
}

function chfConverter() {
  var chf = document.getElementById("franco").value;
  var eur = chf * 0.94;
  document.getElementById("euro").value = eur + " EUR";
  document.getElementById("franco").value = chf + " CHF";
}

function zero() {
  document.getElementById("euro").value = "";
  document.getElementById("franco").value = "";
}
