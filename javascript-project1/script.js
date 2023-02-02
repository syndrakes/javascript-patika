var name = prompt("İsminiz?")

var myName = document.getElementById('myName')
myName.innerHTML = `${name}`;
var myClock = document.getElementById('myClock')

function showTime(){
    var mydate = new Date();
    var seconds = mydate.getSeconds();
    var minutes = mydate.getMinutes();
    var hours = mydate.getHours();
    var days = mydate.getDay();

    var week = "";

    switch(days) {
      case '0':
        week = "Pazartesi";
        break;
      case 1:
        week = "Salı";
        break;
      case 2:
        week = "Çarşamba";
        break;
      case 3:
        week = "Perşembe";
        break;
      case 4:
        week = "Cuma";
        break;
      case 5:
        week = "Cumartesi";
        break;
      case 6:
        week = "Pazar";
        break;
      
    }
    myClock.innerHTML = ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2) + ":" + ("0" + seconds).substr(-2) + " " + week;
}

setInterval(showTime, 1000);