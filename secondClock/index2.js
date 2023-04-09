function displayTime(){
  //const dateTime = new Date();
  var dateTime = new Date();
  //const hrs = dateTime.getHours();
  var hrs = dateTime.getHours();
  //const min = dateTime.getMinutes();
  var min = dateTime.getMinutes();
  //const sec = dateTime.getSeconds();
  var sec = dateTime.getSeconds();
  //const session = document.getElementById(session);
  var session = document.getElementById('session');

  if(hrs >= 12){
    session.innerHTML = 'PM';
  }else{
    session.innerHTML = 'AM';
  }

  if(hrs > 12){
    hrs = hrs - 12;
  }

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = min;
  document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);