var btn = $(".btn");
var container = $(".container");
var nineText = $('#nineText');
var dayEl = $('#currentDay');

container.on("click", ".btn", function(event){
    event.preventDefault();
    var imHere = $(event.target);
    var time = imHere.parent().siblings().eq(0).children().text();
    var task = imHere.parent().siblings().eq(1).val();
    localStorage.setItem(time.trim(), task.trim());
    console.log(localStorage.getItem(time))    
});

function init() {
    for (var i = 0; i < container.children().length; i++){
        var timeEl = container.children().eq(i).children().eq(0);
        var time = timeEl.text();
        var taskEl = container.children().eq(i).children().eq(1);
        var taskSaved = localStorage.getItem(time.trim());
        taskEl.text(taskSaved);
        
        var presentValue = moment().format("h");
        var timeValue = moment(time, "h:mm a").format('h');
        var timeDiff = presentValue - timeValue
        console.log(timeValue)
        // if (timeDiff == 0){
        //     timeEl.classList.add("bg-warning")
        // } else if (timeDiff == )
        


    };
};
init();

function runTime() {
    dayEl.text(moment().format("dddd, MMM Do, YYYY h:mm:ss a"))
}

runTime();
setInterval(runTime, 1000)

var time1 = moment("9:00 AM", "h:mma").format("h");
var time2 = moment("10:00 AM", "h:mma").format("h");
var time3 = moment("11:00 AM", "h:mma").format("h");

console.log(time3 - time1)

