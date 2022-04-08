// current day display
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// save function
var plan = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": [] 
}

var savePlan = function() {
    localStorage.setItem("plan", JSON.stringify(plan));
}

var getPlan = function() {
    JSON.parse(localStorage.getItem("plan"));
}
// current hour for time-block coloring

function hourUpdate() {
  var now = moment().hours();
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("-")[1]);
    if (blockTime < now) {
      $(this).addClass("past");
    } else if (blockTime === now) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

hourUpdate();




