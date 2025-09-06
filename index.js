 const progressText = document.querySelector("#progressText");
    const startBtn = document.querySelector("#startBtn");
    const progressFill = document.querySelector("#progressFill");
    let progress = 0;
    let interval;


  startBtn.addEventListener("click",function(){
    
interval=setInterval(() => {
    if (progress>=100){
      startBtn.disable=true;
      clearInterval(interval)
      startBtn.textContent="File Downloaded 🤞"
      return
    }
    else{
      progress+=1;
      startBtn.disable=false;
      progressText.textContent=progress +'%'
      progressFill.style.width=progress +"%"

      
    }
}, 30);


  })