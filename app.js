let n1 = Math.floor(Math.random() * 20 + 1);
let n2 = Math.floor(Math.random() * 20 + 1);
document.getElementById("index1").value = n1;
document.getElementById("index2").value = n2;

let add_s = n1 + n2;

function Game() {
  let user = parseInt(document.getElementById("intex2").value);
  if (user === add_s) {
    document.getElementById("ans").innerHTML = "javobingiz togri";
    setTimeout(() => {
      location.reload();
    }, "1500");
  } else {
    document.getElementById("ans").innerHTML =
      "tog'ri javob " + add_s + ".qayta urinib koring";
    setTimeout(() => {
      location.reload();
    }, "1500");
  }

  document.getElementsByClassName("intex11").value = ""; // Clear the input field

  n1 = Math.floor(Math.random() * 20 + 1);
  n2 = Math.floor(Math.random() * 20 + 1);
  document.getElementById("intext1").value = n1;
  document.getElementById("intex11").value = n2;

  add_s = n1 + n2;
}
