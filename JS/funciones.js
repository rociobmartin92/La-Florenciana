
// VARIABLE

// LOS GET ELEMENTBYCLASSNAME, JS ME LOS PONE TODOS EN UN ARRAY.
var ac_btn = document.getElementsByClassName("ac"),
div = document.getElementById("aqui"),
prod1 = document.getElementById("pn1").textContent, prod2 = document.getElementById("pn2").textContent,
prod3 = document.getElementById("pn3").textContent, prod4 = document.getElementById("pn4").textContent,
prod5 = document.getElementById("pn5").textContent, prod6 = document.getElementById("pn6").textContent,
prod7 = document.getElementById("pn7").textContent, prod8 = document.getElementById("pn8").textContent;

var pre1 = document.getElementById("precio1").innerHTML,
pre2 = document.getElementById("precio2").innerHTML, pre3 = document.getElementById("precio3").innerHTML,
pre4 = document.getElementById("precio4").innerHTML, pre5 = document.getElementById("precio5").innerHTML,
pre6 = document.getElementById("precio6").innerHTML, pre7 = document.getElementById("precio7").innerHTML,
pre8 = document.getElementById("precio8").innerHTML; let precionum1 = parseInt(pre1.replace( /^\D+/g, '')); // replace all leading non-digits with nothing
let precionum2 = parseInt(pre2.replace( /^\D+/g, '')); // replace all leading non-digits with nothing
let precionum3 = parseInt(pre3.replace( /^\D+/g, '')); // replace all leading non-digits with nothing
let precionum4 = parseInt(pre4.replace( /^\D+/g, '')); // replace all leading non-digits with nothing
let precionum5 = parseInt(pre5.replace( /^\D+/g, '')); // replace all leading non-digits with nothing
let precionum6 = parseInt(pre6.replace( /^\D+/g, '')); // replace all leading non-digits with nothing
let precionum7 = parseInt(pre7.replace( /^\D+/g, '')); // replace all leading non-digits with nothing
let precionum8 = parseInt(pre8.replace( /^\D+/g, '')); // replace all leading non-digits with nothing
// console.log(`$${precionum}`);
let SumProd = [];
// FUNCIONES
ref=0; 
function agregarcarrito () {
  ref++;  var carr = document.getElementById("num_car").innerHTML = ref;}

function agregar_prod1(){ var nuevotr_pro = document.createElement("tr"); 
    var nuevotd_pro = document.createElement("td");  var nuevotd_pre = document.createElement("td");   var nuevo_btn = document.createElement("td"); nuevotr_pro.appendChild(nuevotd_pro);
  nuevotr_pro.appendChild(nuevotd_pre);  nuevotr_pro.appendChild(nuevo_btn);
  var productotxt = document.createTextNode(prod1);  var preciotxt = document.createTextNode(pre1);  
  var btnx = document.createTextNode("x");   
  nuevotd_pro.appendChild(productotxt);   nuevotd_pre.appendChild(preciotxt);
  nuevo_btn.appendChild(btnx);   
  nuevotd_pro.className = "nav_car1";   nuevotd_pre.className = "nav_car2";
nuevo_btn.className = "btnborrar"; div.appendChild(nuevotr_pro);
  SumProd.push(precionum1);  console.log(SumProd);
nuevo_btn.addEventListener("click", eliminar_prod); function eliminar_prod() {
  this.parentNode.removeChild(nuevotd_pro);   this.parentNode.removeChild(nuevotd_pre);
  this.parentNode.removeChild(this);  SumProd.shift(precionum1);}
} function agregar_prod2(){ var nuevotr_pro = document.createElement("tr"), nuevotd_pro = document.createElement("td"),
   nuevotd_pre = document.createElement("td"), nuevo_btn = document.createElement("td");
  nuevotr_pro.appendChild(nuevotd_pro); nuevotr_pro.appendChild(nuevotd_pre);
  nuevotr_pro.appendChild(nuevo_btn); var productotxt = document.createTextNode(prod2);
  var preciotxt = document.createTextNode(pre2); var btnx = document.createTextNode("x");

  nuevotd_pro.appendChild(productotxt);  nuevotd_pre.appendChild(preciotxt);  nuevo_btn.appendChild(btnx);  nuevotd_pro.className = "nav_car1";
  nuevotd_pre.className = "nav_car2";  nuevo_btn.className = "btnborrar";

  div.appendChild(nuevotr_pro); SumProd.push(precionum2);  console.log(SumProd);

  nuevo_btn.addEventListener("click", eliminar_prod);  function eliminar_prod() {
  this.parentNode.removeChild(nuevotd_pro);  this.parentNode.removeChild(nuevotd_pre);  this.parentNode.removeChild(this);

  SumProd.shift(precionum2);
}
}
function agregar_prod3(){ var nuevotr_pro = document.createElement("tr");   var nuevotd_pro = document.createElement("td");
  var nuevotd_pre = document.createElement("td");  var nuevo_btn = document.createElement("td");
  nuevotr_pro.appendChild(nuevotd_pro);  nuevotr_pro.appendChild(nuevotd_pre);
   nuevotr_pro.appendChild(nuevo_btn);  var productotxt = document.createTextNode(prod3);
  var preciotxt = document.createTextNode(pre3);var btnx = document.createTextNode("x");
  nuevotd_pro.appendChild(productotxt);
  nuevotd_pre.appendChild(preciotxt);
nuevo_btn.appendChild(btnx);

  nuevotd_pro.className = "nav_car1";  nuevotd_pre.className = "nav_car2";
  nuevo_btn.className = "btnborrar";  div.appendChild(nuevotr_pro);

  SumProd.push(precionum3);  console.log(SumProd);
  nuevo_btn.addEventListener("click", eliminar_prod);  function eliminar_prod() {
    this.parentNode.removeChild(nuevotd_pro); this.parentNode.removeChild(nuevotd_pre); this.parentNode.removeChild(this);
  
    SumProd.shift(precionum3);
  }
}

function agregar_prod4(){
  var nuevotr_pro = document.createElement("tr"); var nuevotd_pro = document.createElement("td");  var nuevotd_pre = document.createElement("td");  var nuevo_btn = document.createElement("td"); nuevotr_pro.appendChild(nuevotd_pro);
 nuevotr_pro.appendChild(nuevotd_pre); nuevotr_pro.appendChild(nuevo_btn);
 var productotxt = document.createTextNode(prod4);  var preciotxt = document.createTextNode(pre4);    var btnx = document.createTextNode("x");

  nuevotd_pro.appendChild(productotxt);  nuevotd_pre.appendChild(preciotxt);  nuevo_btn.appendChild(btnx);  nuevotd_pro.className = "nav_car1";
  nuevotd_pre.className = "nav_car2";  nuevo_btn.className = "btnborrar";

  div.appendChild(nuevotr_pro);  SumProd.push(precionum4);  console.log(SumProd);

  nuevo_btn.addEventListener("click", eliminar_prod);
  function eliminar_prod() {

    this.parentNode.removeChild(nuevotd_pro); this.parentNode.removeChild(nuevotd_pre); this.parentNode.removeChild(this);
  
    SumProd.shift(precionum4);
  }
}

function agregar_prod5(){
  var nuevotr_pro = document.createElement("tr");
 var nuevotd_pro = document.createElement("td"); var nuevotd_pre = document.createElement("td"); var nuevo_btn = document.createElement("td");

 nuevotr_pro.appendChild(nuevotd_pro); nuevotr_pro.appendChild(nuevotd_pre); nuevotr_pro.appendChild(nuevo_btn);
 var productotxt = document.createTextNode(prod5);  var preciotxt = document.createTextNode(pre5);  var btnx = document.createTextNode("x");

  nuevotd_pro.appendChild(productotxt);  nuevotd_pre.appendChild(preciotxt);
nuevo_btn.appendChild(btnx);  nuevotd_pro.className = "nav_car1";  nuevotd_pre.className = "nav_car2";
  nuevo_btn.className = "btnborrar";  div.appendChild(nuevotr_pro);  SumProd.push(precionum5);
  console.log(SumProd);
  nuevo_btn.addEventListener("click", eliminar_prod);
  function eliminar_prod() {

 
    this.parentNode.removeChild(nuevotd_pro); this.parentNode.removeChild(nuevotd_pre);  this.parentNode.removeChild(this);
    SumProd.shift(precionum5);
  }
}

function agregar_prod6(){


  var nuevotr_pro = document.createElement("tr");  var nuevotd_pro = document.createElement("td"); var nuevotd_pre = document.createElement("td"); var nuevo_btn = document.createElement("td");
 nuevotr_pro.appendChild(nuevotd_pro); nuevotr_pro.appendChild(nuevotd_pre); nuevotr_pro.appendChild(nuevo_btn);
 var productotxt = document.createTextNode(prod6); var preciotxt = document.createTextNode(pre6);  var btnx = document.createTextNode("x");

  nuevotd_pro.appendChild(productotxt);nuevotd_pre.appendChild(preciotxt); nuevo_btn.appendChild(btnx);
  nuevotd_pro.className = "nav_car1"; nuevotd_pre.className = "nav_car2"; nuevo_btn.className = "btnborrar";

  div.appendChild(nuevotr_pro);SumProd.push(precionum6);  console.log(SumProd); nuevo_btn.addEventListener("click", eliminar_prod);
  function eliminar_prod() {

 
    this.parentNode.removeChild(nuevotd_pro);    this.parentNode.removeChild(nuevotd_pre);    this.parentNode.removeChild(this);
  
    SumProd.shift(precionum6);
  }
}
function agregar_prod7(){
 var nuevotr_pro = document.createElement("tr"),
nuevotd_pro = document.createElement("td"),
nuevotd_pre = document.createElement("td"),
 nuevo_btn = document.createElement("td");

 nuevotr_pro.appendChild(nuevotd_pro); nuevotr_pro.appendChild(nuevotd_pre); nuevotr_pro.appendChild(nuevo_btn);

 var productotxt = document.createTextNode(prod7), preciotxt = document.createTextNode(pre7),btnx = document.createTextNode("x");

  nuevotd_pro.appendChild(productotxt);  nuevotd_pre.appendChild(preciotxt); nuevo_btn.appendChild(btnx);
  nuevotd_pro.className = "nav_car1";  nuevotd_pre.className = "nav_car2";  nuevo_btn.className = "btnborrar";
  div.appendChild(nuevotr_pro);  SumProd.push(precionum7);
  console.log(SumProd);

  nuevo_btn.addEventListener("click", eliminar_prod);  function eliminar_prod() {
    this.parentNode.removeChild(nuevotd_pro); this.parentNode.removeChild(nuevotd_pre);  this.parentNode.removeChild(this);
    SumProd.shift(precionum7);
  }
}

function agregar_prod8(){
 var nuevotr_pro = document.createElement("tr"),
nuevotd_pro = document.createElement("td"), nuevotd_pre = document.createElement("td"), nuevo_btn = document.createElement("td");

 nuevotr_pro.appendChild(nuevotd_pro); nuevotr_pro.appendChild(nuevotd_pre); nuevotr_pro.appendChild(nuevo_btn);

 var productotxt = document.createTextNode(prod8),
  preciotxt = document.createTextNode(pre8),
  btnx = document.createTextNode("x");

  nuevotd_pro.appendChild(productotxt); nuevotd_pre.appendChild(preciotxt); nuevo_btn.appendChild(btnx);

  nuevotd_pro.className = "nav_car1";  nuevotd_pre.className = "nav_car2";
  nuevo_btn.className = "btnborrar"; div.appendChild(nuevotr_pro);

  SumProd.push(precionum8); console.log(SumProd);
  nuevo_btn.addEventListener("click", eliminar_prod);  function eliminar_prod() {

 
    this.parentNode.removeChild(nuevotd_pro); this.parentNode.removeChild(nuevotd_pre);  this.parentNode.removeChild(this);
  
    SumProd.shift(precionum8);
  }
}
function suma() {

  let sum = 0;

  for (let i = 0; i < SumProd.length; i++) {
      sum += SumProd[i];
  }
    Swal.fire ({
      title: "EL TOTAL DE SU COMPRA ES DE $" + sum,
      text: "INGRESE SUS DATOS DEBAJO Y SERÁ CONTACTADO PARA FINALIZAR SU COMPRA Y COORDINAR LA ENTREGA. ¡GRACIAS!",
        background: 'white',
        showConfirmButton: false
    })
}

function enviar() {
  Swal.fire ({
    icon: "success",
    text: "Sus datos han sido enviados correctamente",
      background: 'black',
      showConfirmButton: false
  })
}


function contacto() {
  Swal.fire({
    imageUrl: '../imagenes/59729423_2676299362398978_2723894926575140864_n.png',
  imageWidth: 250,
  imageHeight: 250,
  html: '<p class="putos"> Email: laflorenciana@gmail.com <br> Tel: 298-458213 <br> Instagram: laflorenciana_</p>',
    width: 600,
    background: 'black',
    backdrop: `
      black
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
    showConfirmButton: false,
  })
}
//EVENTOS

for(var i=0; i<ac_btn.length; i++) {
  ac_btn[i].addEventListener("click", agregarcarrito);
}
