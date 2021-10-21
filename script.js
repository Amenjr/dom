console.log(document);
var plus=document.querySelectorAll(".plus-btn");
var minus=document.querySelectorAll(".minus-btn");


for(let i=0;i<plus.length;i++){
 
    plus[i].addEventListener("click",function(){
        plus[i].nextElementSibling.innerHTML++;
        plus[i].classList.toggle("green");
        price();
    
        
    })
}

for (let i=0; i<minus.length; i++) {
    
    minus[i].addEventListener("click", function () {
        if(minus[i].previousElementSibling.innerHTML>0){
      minus[i].previousElementSibling.innerHTML--;
  
      minus[i].classList.toggle("green");
      price();
    
    }});
  }
var like=document.querySelectorAll(".like-btn");


for(let i=0;i<like.length;i++){
    like[i].addEventListener("click",function(){
        
        like[i].classList.toggle("red");
    })
}  
var supp=document.querySelectorAll(".remove");

var shop=document.querySelectorAll(".shop");

for(let i=0;i<supp.length;i++){
  supp[i].addEventListener("click",function(){
    shop[i].remove();
    price();
  })
}
var prix=document.getElementsByClassName('prix');
console.log(parseInt(prix[0].innerHTML));
var quantity=document.getElementsByClassName('count');
console.log(quantity[0].innerHTML);
function price(){
  let prix=document.getElementsByClassName('prix');
  let quantity=document.getElementsByClassName('count');
  let total=document.querySelector('.total-price');
  let sum=0;
  for(let i=0;i<quantity.length;i++){
    console.log(i);
  sum+=quantity[i].innerHTML*prix[i].innerHTML;
    console.log(sum);
  
  }
  total.innerHTML=sum;
  console.log(sum);
}



