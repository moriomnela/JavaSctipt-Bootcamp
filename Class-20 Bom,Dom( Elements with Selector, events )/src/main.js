//====1st practise====
// const button = document.querySelector(".box button");
// button.addEventListener("click", function () {
//    //button.nextElementSibling.nextElementSibling.innerHTML = "Hello JS";
//    button.parentElement.parentElement.style.backgroundColor = "pink";
// });

//=====2nd practise=====
// const button = document.querySelector(".box button");
// button.onclick = (event) => {
//   console.log(event);
// };

//=====3rd practise===
// const button = document.querySelector(".box button");

// button.addEventListener("dblclick", function(event) {
//    event.target.parentElement.parentElement.style.backgroundColor = "cyan";
// });

//====4th practise====
// const lists = document.querySelectorAll(".box ul li");

// const colors = ["red","pink","green","yellow"];

// lists.forEach((item,index) => {
//    item.onclick = (e) =>{
//      e.target.style.backgroundColor = colors[index];
//    };
// });

//====5th practise===
const team = document.querySelector(".team");

let memberLoad = "";
members.forEach((item,index) => {
   memberLoad += `
  <div class="team-member">
  <img 
  src="${item.photo}" alt=""
  />
  <h2>${item.name}</h2>
  <p>${item.skill}</p>
</div>
`;
});
team.innerHTML = memberLoad;