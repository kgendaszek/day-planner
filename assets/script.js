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
var firstHour = 9;
var lastHour = 17;

//current date at top
function setToday() {
    var currentDay = moment().format("ddd, MMM, Do, YYYY, h:mm:ss")
    $("#currentDay").text(currentDay);
    // console.log(currentDay); Kept repeating!
    setInterval(setToday, 5000)
};
setToday();
//save tasks to local storage
function saveTask(event) {
    var selectedTaskBlock = event.target.previousElementSibling;
    text = $(selectedTaskBlock).val().trim();
    console.log(text)
    localStorage.setItem('user-input' + selectedTaskBlock.id, text);
    console.log(localStorage);
};
function savedTasks() {
    for (var i = firstHour; i <= lastHour; i++) {
        var selectedTime = 'user-input' + i.toString();
        var selectedText = localStorage.getItem(selectedTime);

        if (selectedText != null) {
            var selectedBlock = document.getElementById(i);
            selectedBlock.textContent = selectedText;
        }
    }
}
//Set up time blocks to change color based on time
function setTaskBlock() {
    var currentTime = moment().hour();
    console.log(currentTime)

    for (var time = firstHour; time <= lastHour; time++) {
        var timeBlock = document.getElementById(time.toString());
        if (currentTime === time) {
            timeBlock.classList.add('present');
            timeBlock.classList.remove('past');
            timeBlock.classList.remove('future')
        }
        if (currentTime < time) {
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
function changeColors() {
    setInterval(setTaskBlock, 60000)

}
function init() {
    setTaskBlock();
    changeColors();
    savedTasks();
}
var saveBtns = document.getElementsByClassName('saveBtn');
for (var i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener('click', saveTask);
}
init();

