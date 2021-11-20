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

var tasksInputEl = document.querySelector('#user-input')

var saveBtn = $(".saveBtn")
saveBtn.on("click", function () {
    console.log("Event saved")

    function saveTask() {
        var taskValue = tasksInputEl.value.trim();
        console.log(taskValue)
        if (taskValue) {
            tasks = JSON.parse(localStorage.getItem('taskValue'));
            if (!tasks) {
                tasks = [];
                console.log(taskValue)
                tasks.unshift(taskValue);
                localStorage.setItem('taskValue', JSON.stringify(taskValue));
            }
        }
    }
    function init() {
        var savedTasks = JSON.parse(localStorage.getItem('taskValue'));
        console.log(savedTasks)
        if (savedTasks !== null) {
            taskValue = savedTasks;
            console.log(savedTasks);
            for (var i = 0; i < savedTasks.length; i++) {
                saveTask(savedTasks);
                console.log(savedTasks);
            }
        }
    
}
init();

})
    
    

    // var formSearch = function (event) {
    //     console.log('formSearch');
    //     event.preventDefault();
    //     var task = taskContent.value.trim();
    //     if (task) {
    //         saveTask();
    //         userInputEl.textContent = '';
    //         userInputEl.textContent = 'Loading...';
    //         taskContent.value = '';
    //     }
    //     pastSearch(task);
    //     console.log(task);





