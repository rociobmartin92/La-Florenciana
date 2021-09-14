// VARIABLE

// LOS GET ELEMENTBYCLASSNAME, JS ME LOS PONE TODOS EN UN ARRAY.
var ac_btn = document.getElementsByClassName("ac");

var div = document.getElementById("aqui");
var prod1 = document.getElementById("pn1").textContent;
var prod2 = document.getElementById("pn2").textContent;
var prod3 = document.getElementById("pn3").textContent;
var prod4 = document.getElementById("pn4").textContent;
var prod5 = document.getElementById("pn5").textContent;
var prod6 = document.getElementById("pn6").textContent;
var prod7 = document.getElementById("pn7").textContent;
var prod8 = document.getElementById("pn8").textContent;

var pre1 = document.getElementById("precio1").innerHTML;
var pre2 = document.getElementById("precio2").innerHTML;
var pre3 = document.getElementById("precio3").innerHTML;
var pre4 = document.getElementById("precio4").innerHTML;
var pre5 = document.getElementById("precio5").innerHTML;
var pre6 = document.getElementById("precio6").innerHTML;
var pre7 = document.getElementById("precio7").innerHTML;
var pre8 = document.getElementById("precio8").innerHTML;


let precionum1 = parseInt(pre1.replace( /^\D+/g, '')); // replace all leading non-digits with nothing
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
  
  ref++;
  
  var carr = document.getElementById("num_car").innerHTML = ref;
  
}

function agregar_prod1(){
  
  
  var nuevotr_pro = document.createElement("tr"); 
  
  
  var nuevotd_pro = document.createElement("td");
  var nuevotd_pre = document.createElement("td");
  
  nuevotr_pro.appendChild(nuevotd_pro);
  nuevotr_pro.appendChild(nuevotd_pre);
  
  var productotxt = document.createTextNode(prod1);
  var preciotxt = document.createTextNode(pre1);  
  
  nuevotd_pro.appendChild(productotxt);
  nuevotd_pre.appendChild(preciotxt);

  

  nuevotd_pro.className = "nav_car1";
  nuevotd_pre.className = "nav_car2";
  div.appendChild(nuevotr_pro);
  
  SumProd.push(precionum1);

  console.log(SumProd);

}


function agregar_prod2(){
  
  
  var nuevotr_pro = document.createElement("tr"); 
  
  
  var nuevotd_pro = document.createElement("td");
  var nuevotd_pre = document.createElement("td");
  
  nuevotr_pro.appendChild(nuevotd_pro);
  nuevotr_pro.appendChild(nuevotd_pre);
  
  var productotxt = document.createTextNode(prod2);
  var preciotxt = document.createTextNode(pre2);  
  
  nuevotd_pro.appendChild(productotxt);
  nuevotd_pre.appendChild(preciotxt);
  
  nuevotd_pro.className = "nav_car1";
  nuevotd_pre.className = "nav_car2";
  div.appendChild(nuevotr_pro);
  
  SumProd.push(precionum2);

  console.log(SumProd);
}

function agregar_prod3(){
  
  
  var nuevotr_pro = document.createElement("tr"); 
  
  
  var nuevotd_pro = document.createElement("td");
  var nuevotd_pre = document.createElement("td");
  
  nuevotr_pro.appendChild(nuevotd_pro);
  nuevotr_pro.appendChild(nuevotd_pre);
  
  var productotxt = document.createTextNode(prod3);
  var preciotxt = document.createTextNode(pre3);  

  nuevotd_pro.appendChild(productotxt);
  nuevotd_pre.appendChild(preciotxt);

  nuevotd_pro.className = "nav_car1";
  nuevotd_pre.className = "nav_car2";
  div.appendChild(nuevotr_pro);

  SumProd.push(precionum3);

  console.log(SumProd);
}

function agregar_prod4(){


  var nuevotr_pro = document.createElement("tr"); 


 var nuevotd_pro = document.createElement("td");
 var nuevotd_pre = document.createElement("td");

 nuevotr_pro.appendChild(nuevotd_pro);
 nuevotr_pro.appendChild(nuevotd_pre);

 var productotxt = document.createTextNode(prod4);
  var preciotxt = document.createTextNode(pre4);  

  nuevotd_pro.appendChild(productotxt);
  nuevotd_pre.appendChild(preciotxt);

  nuevotd_pro.className = "nav_car1";
  nuevotd_pre.className = "nav_car2";
  div.appendChild(nuevotr_pro);

  SumProd.push(precionum4);

  console.log(SumProd);
}

function agregar_prod5(){


  var nuevotr_pro = document.createElement("tr"); 


 var nuevotd_pro = document.createElement("td");
 var nuevotd_pre = document.createElement("td");

 nuevotr_pro.appendChild(nuevotd_pro);
 nuevotr_pro.appendChild(nuevotd_pre);

 var productotxt = document.createTextNode(prod5);
  var preciotxt = document.createTextNode(pre5);  

  nuevotd_pro.appendChild(productotxt);
  nuevotd_pre.appendChild(preciotxt);

  nuevotd_pro.className = "nav_car1";
  nuevotd_pre.className = "nav_car2";
  div.appendChild(nuevotr_pro);

  SumProd.push(precionum5);

  console.log(SumProd);
}

function agregar_prod6(){


  var nuevotr_pro = document.createElement("tr"); 


 var nuevotd_pro = document.createElement("td");
 var nuevotd_pre = document.createElement("td");

 nuevotr_pro.appendChild(nuevotd_pro);
 nuevotr_pro.appendChild(nuevotd_pre);

 var productotxt = document.createTextNode(prod6);
  var preciotxt = document.createTextNode(pre6);  

  nuevotd_pro.appendChild(productotxt);
  nuevotd_pre.appendChild(preciotxt);

  nuevotd_pro.className = "nav_car1";
  nuevotd_pre.className = "nav_car2";
  div.appendChild(nuevotr_pro);

  SumProd.push(precionum6);

  console.log(SumProd);
}

function agregar_prod7(){


  var nuevotr_pro = document.createElement("tr"); 


 var nuevotd_pro = document.createElement("td");
 var nuevotd_pre = document.createElement("td");

 nuevotr_pro.appendChild(nuevotd_pro);
 nuevotr_pro.appendChild(nuevotd_pre);

 var productotxt = document.createTextNode(prod7);
  var preciotxt = document.createTextNode(pre7);  

  nuevotd_pro.appendChild(productotxt);
  nuevotd_pre.appendChild(preciotxt);

  nuevotd_pro.className = "nav_car1";
  nuevotd_pre.className = "nav_car2";
  div.appendChild(nuevotr_pro);

  SumProd.push(precionum7);

  console.log(SumProd);
}

function agregar_prod8(){


  var nuevotr_pro = document.createElement("tr"); 


 var nuevotd_pro = document.createElement("td");
 var nuevotd_pre = document.createElement("td");

 nuevotr_pro.appendChild(nuevotd_pro);
 nuevotr_pro.appendChild(nuevotd_pre);

 var productotxt = document.createTextNode(prod8);
  var preciotxt = document.createTextNode(pre8);  

  nuevotd_pro.appendChild(productotxt);
  nuevotd_pre.appendChild(preciotxt);

  nuevotd_pro.className = "nav_car1";
  nuevotd_pre.className = "nav_car2";
  div.appendChild(nuevotr_pro);

  SumProd.push(precionum8);

  console.log(SumProd);
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


