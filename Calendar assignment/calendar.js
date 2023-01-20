const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

//getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();


console.log(date, currYear, currMonth);
const months = ["January","February", "March", "April", "May", "June","July",
               "August", "September", "October", "November", "December"];

const renderCalendar = () => {
       
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), //getting last date of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDate(), //getting last day of month
        lastDateoflastMonth = new Date(currYear, currMonth, 0).getDate(), //getting last date of previous month
        myBirthday = new Date(currYear, currMonth, 0).getDate();
        
         //getting the rendered calendar days on the site
        let liTag = "";

        for (let i = firstDayofMonth; i > 0; i--) { //creating li of previous month last days
            liTag += `<li class="inactive">${lastDateoflastMonth -i + 1}</li>`;
            
        }

        for (let i = 1; i <= lastDateofMonth; i++) {    //creating li of all days of current 
          if( i == 26 && currMonth == 2 && currYear == 2022){
            liTag += `<li class="birthday">${i}</li>`;
          }else{
            let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                            && currYear === new Date().getFullYear() ? "active": "";
             
            liTag += `<li class="${isToday}">${i}</li>`;
            }
        }

        for (let i = lastDayofMonth; i < 6; i++) { // creating l of next month first days
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
            
        }

        currentDate.innerText = `${months[currMonth]} ${currYear}`;
        daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => {
        icon.addEventListener("click", () => {
           //adding click events on both icons
           // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
           currMonth = icon.id === "prev" ? currMonth - 1 : currMonth +1;
          
          if (currMonth <0 || currMonth > 11) {//if current month is less than 0 or greater than 11
            //creating a new date of cuurent year & month and pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
          }else{ //else pass new Date as date value
            date = new Date();
          }
           renderCalendar();
        
        });
});
