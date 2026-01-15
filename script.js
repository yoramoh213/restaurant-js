// menu 

var menuItems = [
{
name: "LASAL CHEESE",
price: "$18.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
image: "./css/images/food1.png"
},
{
name: "JUMBO CRAB SHRIMP",
price: "$24.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
image: "./css/images/food2.png"
},
{
name: "KOKTAIL JUICE",
price: "$12.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
image: "./css/images/food3.png"
},
{
name: "CAPO STEAK",
price: "$60.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
image: "./css/images/food4.png"
},
{
name: "ORGANIC FRUIT SALAD",
price: "$8.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
image: "./css/images/food5.png"
},
{
name: "CHEESE PIZZA",
price: "$18.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
image: "./css/images/food6.png"
},
{
name: "KOFTA MEAT",
price: "$40.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
image: "./css/images/food7.jpeg"
},
{
name: "SPANISH PIES",
price: "$14.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
image: "./css/images/food8.jpeg"
},
{
name: "CHEESE TOST",
price: "$6.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
image: "./css/images/food9.jpeg"
},
{
name: "FRUIT SALAD",
price: "$14.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
image: "./css/images/food10.jpeg"
},
{
name: "CHICKEN SHAWARMA",
price: "$20.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
image: "./css/images/food11.jpeg"
},
{
name: "MEGA CHEESE PIZZA",
price: "$30.00",
description: "Lorem ipsum dolor sit amet consectetur adipisicingelit. At, explicabo.",
image: "./css/images/food12.jpeg"
}
]
// gallary
var imgsContiner = document.querySelector(".imgs");
var allImgs = [
  "gallery1.jpeg",
  "gallery2.jpeg",
  "gallery3.jpeg",
  "gallery4.jpeg",
  "gallery5.jpeg",
  "gallery6.jpeg",
  
];

for (let i = 0; i < allImgs.length; i++) {
  imgsContiner.innerHTML += `<img src="${allImgs[i]}" alt="" /> `;
}

var Foodelements = document.querySelectorAll(".imgs img");
for (let i = 0; i < Foodelements.length; i++) {
  Foodelements[i].addEventListener("click", () => {
    var pop = document.querySelector(".popup");
    pop.querySelector("img").src = allImgs[i];
    pop.style.display = "flex";
  });
}

var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  var pop = document.querySelector(".popup");
  pop.style.display = "none";
});










// validation


document.getElementById("contactform").addEventListener("submit",function(e){
e.preventDefault();


var name = document.getElementById("name").value.trim();
var email = document.getElementById("email").value.trim();
var subject = document.getElementById("subject").value.trim();
var message = document.getElementById("message").value.trim();


var  nameerror =document.getElementById("error1");
var  emailerror =document.getElementById("error2");
var  subjecterror =document.getElementById("error3");
var  messageerror =document.getElementById("error4");

nameerror.textContent="";
emailerror.textContent="";
subjecterror.textContent="";
messageerror.textContent="";


var valid = true;

if(name === ""){
   nameerror.textContent="please enter your name";
    valid = false;
}
else if(name.length < 3 || name.length > 15){
    nameerror.textContent= "name must be 3-15 characters";
    valid=false;
}

if(email===""){
    emailerror.textContent = "please enter your email";
    valid = false;
}

if(subject !== "" && subject.length<3){
    subjecterror.textContent="please enter your subject";
    valid = false;
}


if(message !== "" && message.length<10){
    messageerror.textContent="message must be at least 10";
    valid = false ;
}


if(valid){
    alert("form submit success");
}

});


