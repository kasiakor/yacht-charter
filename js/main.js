// JavaScript Document
var yachtInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function(){
    if(xhr.status === 200) {
        yachtInfo = JSON.parse(xhr.responseText);
        display(0);
    } 
} 

// function to display JSON data
function display(x){
    document.getElementById("yachtName").innerHTML = yachtInfo[x].name;
    document.getElementById("desc").innerHTML = yachtInfo[x].description;
    document.getElementById("photo").src = yachtInfo[x].photo;
    document.getElementById("highs").innerHTML = yachtInfo[x].cost.HS;
    document.getElementById("lows").innerHTML = yachtInfo[x].cost.LS;

    details = "";

    for (i=0; i < yachtInfo[x].details.length; i++ ){
        details += "<li>" + yachtInfo[x].details[i] + "</li>";
    } 
    document.getElementById("details").innerHTML = details;
} 

