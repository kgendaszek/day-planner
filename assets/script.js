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

//current date at top
var currentDay = moment().format("ddd, MMM, Do, YYYY")
$("#currentDay").text(currentDay);
console.log(currentDay);

var tasksInputEl = document.querySelector('#user-input');
var taskList = document.querySelector('.textarea');

//
function saveTask(event) {
    var selectedTaskBlock = event.target.previousElementSibling;

    text = $(selectedTaskBlock).val().trim();
    console.log(text)
    localStorage.setItem('hour' + selectedTaskBlock.id, text);
};

function savedTasks() {
    var selectedText;
    var selectedItem;
    var selectedBlock;

    for (var i = firstHour; i <= lastHour; i++) {
        selectedItem = 'hour' + i.toString();
        selectedText = localStorage.getItem(selectedItem);

        if (selectedText != null) {
            selectedBlock = document.getElementById(i);
            selectedBlock.textContent = selectedText;
        }
    }
}



function init() {
    var savebtn = document.getElementsByClassName('saveBtn');
    for (var i = 0; i < savebtn.length; i++) {
        savebtn[i].addEventListener('click', saveTask)
    }

}
init();





