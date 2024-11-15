let hour=document.getElementById("hours");
let minute=document.getElementById("minutes");
let second=document.getElementById("seconds");
let ampm=document.getElementById("ampm");


function updatedclock(){
    hours=new Date().getHours();
    minutes=new Date().getMinutes();
    seconds=new Date().getSeconds();
     period="Am";

    if(hours>12){
        period="pm"
    }




    hour.innerHTML=hours;
    minute.innerHTML=minutes;
    second.innerHTML=seconds;
    ampm.innerHTML=period;
    setInterval(updatedclock,1000);



}
updatedclock();

