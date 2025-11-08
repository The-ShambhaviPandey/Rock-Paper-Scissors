let userScore = 0;
let compScore = 0;
let userWin = true;
let gameState = true;


const choosen = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");






choosen.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);

    })
    
})


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}


const gameDraw = () =>{
    msg.innerText ="It's a Draw!";
    msg.style.backgroundColor = "#081b31";
    
}


const showWin = (userWin, userChoice, compChoice)  => {       
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOST, ${compChoice} beats your ${userChoice}!`;
        msg.style.backgroundColor = "red";
    }
    if (userScore===5 || compScore===5){
        checkWin(userScore, compScore);
    }
    }
        
    


const checkWin = (userScore, compScore) => {
    if(compScore===5){
        alert("Computer score is 5. Computer Wins!");
        gameState = false;
        
    }

    else {
        alert("Your score is 5. You Win!");
        gameState = false;
    }

    restart(gameState);
        

}

const restart = (gameState) =>{
    let ques = prompt("Do you want to restart? Yes/No");
    if(ques==="yes" || ques==="Yes" || ques==="YES"){
        location.reload();
        console.log("Program will start again!");
    }
    else if(ques==="No" || ques==="no" || ques==="NO"){
        alert("Game Over!");
        console.log("Program will end!");
        location.reload();
    }
    else{
        alert("Invalid Input!");
        location.reload();
    }
    
}





const playGame = (userChoice) =>{
    console.log("User's Choice =" , userChoice);
    const  compChoice = genCompChoice();
    console.log("Computer's Choice =", compChoice);

    if(userChoice===compChoice){
        gameDraw();
    }
    else{

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper" ){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
    showWin(userWin, userChoice, compChoice);
    }



}















