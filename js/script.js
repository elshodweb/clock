let wrapperDiv = document.querySelector(".wrapper");
setInterval(() => {
   wrapperDiv.style.opacity = 1;
   let date = new Date;
   let dataDateObj = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
   }

   let div = null;
   Object.entries(dataDateObj).map(([key, valuye]) => {

      if (valuye < 10) {
         valuye = "0" + valuye;
      }

      div = document.querySelector("." + key);
      div.innerHTML = valuye;
   })

}, 500);