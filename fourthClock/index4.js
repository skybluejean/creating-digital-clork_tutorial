function updateClock(){
  const now = new Date();
  const dName = now.getDay();
  const mon = now.getMonth();
  const dNum = now.getDate();
  const year = now.getFullYear();
  const hr = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  pe = 'AM';

  if(hr == 0){
    hr = 12;
  }
  if(hr > 0){
    hr = hr - 12;
    pe = 'PM';
  }

  Number.prototype.pad = function(digits){
    for(let n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  }

  const months = ['January','february','March','April','May','June','July','August','Septenber','October','November','December'];
  const weeks = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const ids = ['dayname','month','daynum','year','hour','minutes','seconds','period'];
  const values = [weeks[dName],months[mon],dNum.pad(2),year,hr.pad(2),min.pad(2),sec.pad(2),pe];
  for(let i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
function initClock(){
  updateClock();
  window.setInterval('updateClock()',1);
}