var btn = $(".btn");
var container = $(".container");
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
        var timeEl = container.children().eq(i).children().eq(0).children();
        var time = timeEl.text();
        var taskEl = container.children().eq(i).children().eq(1);
        var taskSaved = localStorage.getItem(time.trim());
        taskEl.text(taskSaved);
        
        var presentValue = parseInt(moment().format("H"));
        var timeValue = parseInt(moment(time, "h:mm a").format('H'));
        var timeDiff = presentValue - timeValue
        if (timeDiff == 0){
            timeEl.addClass("bg-danger text-white")
        } else if (timeDiff < 0){
            timeEl.addClass("bg-success text-white")
        };
    };
};
init();

function runTime() {
    dayEl.text(moment().format("dddd, MMM Do, YYYY h:mm:ss a"))
}

runTime();
setInterval(runTime, 1000)


