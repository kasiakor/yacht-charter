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
        console.log(yachtInfo);
        display(0);
  
    } // end if
} // end function

// function to display JSON data
function display(x){
    console.log(x);
    document.getElementById("yachtName").innerHTML = yachtInfo[x].name;
    document.getElementById("desc").innerHTML = yachtInfo[x].description;
    document.getElementById("photo").src = yachtInfo[x].photo;
    document.getElementById("highs").innerHTML = yachtInfo[x].cost.HS;
    document.getElementById("lows").innerHTML = yachtInfo[x].cost.LS;

    details = "";

    for (i=0; i < yachtInfo[x].details.length; i++ ){
        console.log(yachtInfo[x].details[i]);
        details += "<li>" + yachtInfo[x].details[i] + "</li>";
    } // end loop
    document.getElementById("details").innerHTML = details;
} // end function

