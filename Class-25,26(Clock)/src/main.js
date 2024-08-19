   const button = document.querySelector(".box button");
   const heading = document.querySelector(".box h1");
   const notification = document.getElementById("notification");
   
   const digitalClickInit = () => {
     const date = new Date();

     heading.innerHTML = `${date.getHours() < 10 ? "0"+ date.getHours() : date.getHours()} 
     : ${date.getMinutes()}
     :${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`;
   };

digitalClickInit();

setInterval(() => {

    digitalClickInit();
    notification.play();

}, 1000);





   