toptext = "";
var selected = "#start";
var start;
var end;
var data = JSON.parse(dioxide);

function onkey(id) {
    selected = id;
    search($(id).val())
}

$("#go").hide();