console.log("script.js is running")
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//set times for beginning and end of planner
var firstHour= 9;
var lastHour= 17;

//current date at top
function setToday(){
var currentDay = moment().format("ddd, MMM, Do, YYYY, h:mm:ss")
$("#currentDay").text(currentDay);
console.log(currentDay);
setInterval(setToday, 5000)
};
setToday();
//save tasks to local storage
function saveTask(event) {
    var selectedTaskBlock = event.target.previousElementSibling;
    text = $(selectedTaskBlock).val().trim();
    console.log(text)
    localStorage.setItem('hour' + selectedTaskBlock.id, text);
    console.log(localStorage);
};
function savedTasks() {
    var selectedText;
    var selectedTime;
    var selectedBlock;

    for (var i = firstHour; i <= lastHour; i++) {
        selectedTime = 'hour' + i.toString();
        selectedText = localStorage.getItem(selectedTime);

        if (selectedText != null) {
            selectedBlock = document.getElementById(i);
            selectedBlock.textContent = selectedText;
        }
    }
}
function setTaskBlock(){
    var currentTime = moment().format('H');
    console.log(currentTime)
    var timeBlock;

    
    for (var time = firstHour; time <= lastHour; time++){
        timeBlock = document.getElementById(user-input.toString());
        if (currentTime == time ){
            timeBlock.classList.add('present');
            timeBlock.classList.remove('past');
            timeBlock.classList.remove('future')
        }
        if (currentTime < time){
            timeBlock.classList.add('future');
            timeBlock.classList.remove('past');
            timeBlock.classList.remove('present');
        } 
        else {
            timeBlock.classList.add('past');
            timeBlock.classList.remove('present');
            timeBlock.classList.remove('future');
        }
    }
}
    function changeColors(){
        setInterval(setTaskBlock, 60000)
        
    }
function init() {
    changeColors();
    savedTasks();
}
var saveBtns = document.getElementsByClassName('saveBtn');
    for (var i = 0; i < saveBtns.length; i++) {
        saveBtns[i].addEventListener('click', saveTask);
    }
init();

