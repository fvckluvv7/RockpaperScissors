const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;

const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const resultTxt = document.getElementById("start-txt")
const userImg = document.getElementById("user-img")
const machineImg = document.getElementById("machine-img")

rockBtn.addEventListener("click", ()=>{
    play(ROCK);

});
paperBtn.addEventListener("click", ()=>{
    play(PAPER);

});
scissorsBtn.addEventListener("click", ()=>{
    play(SCISSORS);

});

function play(userOption) {
    userImg.src = "img/" + userOption + ".png";

    resultTxt.innerHTML = "Chossing!";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".png";
    }, 100);

    setTimeout(function(){
     
        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);
    
        
        machineImg.src = "img/" + machineOption + ".png";
    
        switch(result){
            case TIE:
                resultTxt.innerHTML = "You have tied!";
                break;
            case WIN:
                resultTxt.innerHTML = "You Win!";
                break;
            case LOST:
                resultTxt.innerHTML = "You Lost!"
                break;
        }


    }, 2000);
    
}

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}


function calcResult(userOption, machineOption){
    if(userOption === machineOption){
        return TIE;
     
    }else if(userOption === ROCK){
     
         if(machineOption === PAPER) return LOST;
         if(machineOption === SCISSORS) return WIN;
         
    }else if(userOption === PAPER){
         
         if(machineOption === SCISSORS) return LOST;
         if(machineOption === ROCK) return WIN;
     
    }else if(userOption === SCISSORS){
         
        if(machineOption === ROCK) return LOST;
        if(machineOption === PAPER) return WIN;
     
    }
}





