const clock=document.querySelector(".clock");

let seconds=0,minutes=0,hours=0;
let intervalid;

const start=()=>{
    intervalid=setInterval(() => {
        if(seconds<59){
            seconds++;
        }
        else if(minutes>=59){
                minutes=0;
                hours++;
        }
        else{
            seconds=0;
            minutes++;
        }
        
        const sec=String(seconds).padStart(2,"0");
        const min=String(minutes).padStart(2,"0");
        const hr=String(hours).padStart(2,"0");
        //! padstart makes add two string with value provided
        //* we can also use tostring method to convert to a string



        clock.innerText=`${hr}:${min}:${sec}`;
    }, 1000);
}

const stop=()=>{
    clearInterval(intervalid);
}