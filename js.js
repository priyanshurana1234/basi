// let box=document.getElementsByClassName("container")
// let click=0;
// box[0].addEventListener("click",moveBox);
// function moveBox(){
//         click +=1
//     switch(click){
//         case 1:box[0].style.left="90%";
//         break
//         case 2:box[0].style.top="80%";
//         break
//         case 3:box[0].style.left="0%";
//         break
//         case 4:box[0].style.top="0%";
//         break
//         default: click=0
//     }
// }
// let box1=document.getElementsByName("main")
// let click1=0;
// box1[0].addEventListener("onClick",movebox1);
// function movebox1(){
//     click +=1;
//     switch(click1){
//         case 1:box1[0].style.left="90%";
//         break
//         case 2:box1[0].style.top="80%";
//         break
//         case 3:box1[0].style.left="0%";
//         break
//         case 4:box1[0].style.top="0%";
//         break
//         default: click=0

//     }
// }

let input1=document.getElementsByClassName("text1");
let para=document.querySelector
("p")
let input2=document.getElementsByClassName("text2");
let num1=0;
let num2=0;
input1[0].addEventListener('input',()=>{
    num1=parseInt(input1[0].value)
})
input2[0].addEventListener('input',()=>{
    num2=parseInt(input2[0].value)
})
function operation(e){
   switch(e.target.value){
    case "divide": para.innerText=num1/num2;break
    case "multiply":para.innerText=num1*num2;break
    case "add":para.innerText=num1+num2;break
    case "subtract":para.innerText=num1-num2;
   }
}


