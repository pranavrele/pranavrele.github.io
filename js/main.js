/*-----------------------------------------------------------------
pranavrele.com Maintenance Page
@author: Pranav Rele
@version: 1.0
------------------------------------------------------------------*/

(function(){
// get a new date (locale machine date time)
var date = new Date();
// get the date as a string
var n = date.toDateString();
// get the time as a string
var time = date.toLocaleTimeString();

// find the html element with the id of time
// set the innerHTML of that element to the date a space the time
document.getElementById('time').innerHTML = n + ' ' + time; 
}());

/*(function(){
    var typed = new Typed(".type", {
        // Waits 1000ms after typing "First"
        strings: ["First ^1000 sentence.", "Second sentence."]
    });
}());*/

(function(){
    var typed = new Typed(".type", {
        strings: ['update.sh^1000\n `Update In Progress...`^1000\n `Check Back Soon...`^1000\n `Stay Awesome...`'],
        typeSpeed: 50,
        backSpeed: 0,
      });    
}());