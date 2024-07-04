//document.title = "BOM and Dom";
//console.log (document.title);
//console.log (document.getElementById("title"));
//document.querySelector("ul li:nth-child(2)").innerHTML = "misti";
//console.log(document.querySelector("h2").innerHTML);
//console.log(document.querySelector("p").textContent);
// const komra = document.querySelector(".vegetable p:nth-child(4)");
// //console.log(nela.firstElementChild);
// komra.style.backgroundColor = "red";
// komra.nextElementSibling.style.backgroundColor = "green";
// komra.parentElement.style.backgroundColor = "pink";
// komra.parentElement.style.padding = "30px";
// //console.log(komra.parentElement);


//=====Event Listener=====
 //==Button==
// const btn = document.querySelector('button')

// btn.addEventListener('mousedown', () => {
//     alert("done");
// })

//====input====
// const input = document.querySelector("input");
// input.addEventListener("keypress",() => {
//       alert("hello");
// });

//==3no practise===
// const input = document.querySelector("input");

// input.addEventListener("keyup",() => {
//   //console.log(input.value);
//   document.querySelector(".box h1").innerHTML = input.value;
// });

// ===4th practise=====
// const user_name = document.querySelector('.box input[placeholder ="Name"]');
// const birth_year = document.querySelector('.box input[placeholder ="Birth-Year"]');

//===project 1===

const user_name = document.querySelector('.box input[placeholder="Name"]');
const birth_year = document.querySelector('.box input[placeholder="Birth-Year"]');

const check = document.querySelector(".box button");

check.addEventListener("click", function () {
    console.log(user_name.value);  

});


// //==Important project 2===
// const user_name = document.querySelector('.box input[placeholder="Name"]');
// const birth_year = document.querySelector('.box input[placeholder="Birth-Year"]');

// const check = document.querySelector(".box button");
// const heading = document.querySelector(".box h1")

// check.addEventListener("click", function () {
//    if(!user_name.value || !birth_year.value){
//     heading.innerHTML = `<span style="color:red;">All files are include</span>`;
//    }else {
//       let age = new Date().getFullYear() - Number(birth_year.value);
       
//       if(age >= 21){
//           heading.innerHTML = `
//           <img src="https://i.pinimg.com/originals/ba/ce/57/bace57c5e51b79fa303026d754fef8b5.gif"/>
//           `;
//       }else{
//         heading.innerHTML = `
//         <img src ="https://gifdb.com/images/high/cute-crying-baby-0xzo9rwr6hfxmb4a.gif"/>
//         `;
//       }
//    }
// });