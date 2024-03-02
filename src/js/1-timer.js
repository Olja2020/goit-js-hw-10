

// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const buttonStart = document.querySelector("button");
const datetimePicker = document.getElementById('datetime-picker');
let userSelectedDate; 


const options = {
 
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
      
      if(selectedDates[0] < new Date()){
        
      userSelectedDate = null;
      console.info("Please choose a date in the future");
      window.alert("Please choose a date in the future");
      buttonStart.disabled = true;
      } else {

        buttonStart.disabled = false;
        userSelectedDate = selectedDates[0];
      }
      console.log(selectedDates[0]);
     
    },
  };
  
  flatpickr("#datetime-picker", options);
  
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
      
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  
   function addLeadingZero(value) {
    return value < 10 ? String(value).padStart(2, "0") : value;
   }     // яка використовує метод рядка padStart() і перед відмальовуванням інтерфейсу форматує значення.
   

  


flatpickr("#datetime-picker", options);

buttonStart.addEventListener('click', function() {
    if (userSelectedDate) {
        buttonStart.disabled = true;
        datetimePicker.disabled = true;
        startTimer(userSelectedDate);
    }
});

function startTimer(endDate) {
        const timerInterval = setInterval(function() {
        const currentTime = new Date().getTime();
        const difference = endDate.getTime() - currentTime;

        if (difference <= 0) {
            clearInterval(timerInterval);
            updateTimerDisplay(0, 0, 0, 0);
            buttonStart.disabled = false;
            datetimePicker.disabled = false;
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(difference);
        updateTimerDisplay(days, hours, minutes, seconds);
    }, 1000);
}


function updateTimerDisplay(days, hours, minutes, seconds) {
    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}




console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}