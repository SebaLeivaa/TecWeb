
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 
'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
'Octubre', 'Noviembre', 'Diciembre'];

const today = new Date();
const day = today.getDate();
const currentDay = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
const currentMonth = month;
const divCalendar = document.getElementById('div-calendar');
const pMonthYear = document.getElementById('month-year');
let horas = document.getElementById('horas-disponibles').textContent;
let hourAvailable = horas.split(',').map(Number);;
let firstHour = hourAvailable[0];
hourAvailable.shift();

function getNextMonth() {
    if(month !== 11){
        month++;
    }else {
        year++;
        month = 0;
    }
    calendar();
}
const buttonNextMonth = document.getElementById('next-month');
buttonNextMonth.addEventListener('click', getNextMonth);

function getPrevMonth() {
    if(month !== 0) {
        month--;
    }else{
        year--;
        month = 11;
    }
    calendar();
}

const buttonPrevMonth = document.getElementById('prev-month');
buttonPrevMonth.addEventListener('click', getPrevMonth);

function startDay() {
    const start = new Date(year, month, 1);
    return(start.getDay());
}
startDay()
function leapYear() {
    return year % 4 === 0 ? true : false;
}

function getTotalDays(input) {
    if(input === 0 || input === 2 || input === 4 || input === 6 || input === 7 || input === 9 || input === 11) {
        return 31;
    }else if(input === 1 && leapYear()){
        return 29;
    }else if(input === 1 && !leapYear()){
        return 28;
    }else {
        return 30;
    }
}

function calendar() {
    pMonthYear.textContent = `${months[month]} ${year}`;
    divCalendar.innerHTML = "";
    let startDays = startDay();
    if(startDays === 0){
      startDays = 7;
    }
    for(let i = (2-startDays); i <= getTotalDays(month); i++){
        const newButton = document.createElement('button');
        newButton.classList.add('rounded-full');
        newButton.classList.add('w-7');
        newButton.classList.add('h-7');
        if(i < 1){
            const totalDaysPrevMonth = getTotalDays(month-1);
            newButton.textContent = totalDaysPrevMonth + i;
            newButton.classList.add('text-teal-800');
            divCalendar.appendChild(newButton);
            newButton.disabled = true;
        }else{
            newButton.textContent = i; // Establece el contenido del <Button>
            divCalendar.appendChild(newButton);
            newButton.disabled = true;
            if(firstHour === i){
                newButton.classList.add('bg-blue-800');
                newButton.disabled = true;
            }else if(hourAvailable.includes(i)){
                newButton.classList.add('bg-blue-800');
                newButton.disabled = false;
                newButton.id = `button-${i}`;
                newButton.setAttribute('data-date', `${year}-${month+1}-${day}`);
            }
        }  
    }
}

calendar();




function horasDisponibles(){

}


