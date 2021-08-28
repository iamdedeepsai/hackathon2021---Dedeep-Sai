let map;
var gc;

function initialize() {
    var latlng = new GeoPoint(103.80733282853, 1.289478890541);
    var myOptions = {
        zoom: 13,
        center: latlng,
        showCopyright: false
    };
    map = new SD.genmap.Map(
        document.getElementById("map_canvas"), 
        myOptions
    );
}

var geocode = new SDGeocode(map);

function search(keyword) {
    var searchOption = {"q": keyword};
    gc = SDGeocode.SG;
    geocode.requestData(gc, searchOption);
}

function set_data(json) {
    var options = '';
    if (json != null && json.length >= 0) {
        for (var i = 0; i < json.length; i++) {
            options += "<option value='" + json[i].t + "'>";
            console.log(json[i].t)
        }
        $("#places-" + selected.substring(1)).html(options);
    }
}

function finddir(a, b) {
    gc = SDGeocode.SG;
    geocode.requestData();
}

//This links to routes from one lat and long to another. However due to cors policy accesing the data proved to be diffcult
var service = new SDServiceXml("https://www.streetdirectory.com/api/?mode=journey&output=xml&country=sg&q=103.82915135175699,1.307363769270172%20to%20103.84643694497719,1.2990493119206423&methods=driving&info=1&date=06/20/2011&time=02:38%20PM", map);
