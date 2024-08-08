let userScore=0
let compScore=0

const user_score= document.querySelector("#user-score")
const comp_score= document.querySelector("#comp-score")

const choises=document.querySelectorAll(".choise")
const msg=document.querySelector("#msg")

const gameDraw=()=>{
    console.log("Game Was Draw")
    msg.innerText="Draw"
    msg.style.background="blue"
}

const showWinner=(userWin,userChoice,compCh)=>{
    if(userWin){
        userScore++
        user_score.innerText=userScore
        msg.innerText=`You Win ${userChoice} bets ${compCh}`
        msg.style.background="green"
    }else{
        compScore++
        comp_score.innerText=compScore
        msg.innerText=`You Lose ${compCh} bets ${userChoice}`
        msg.style.background="red"
    }
}

const gencompchoice=()=>{
    const opt=["rock","paper","scissors"]
    const raidx = Math.floor(Math.random()*3)
    return opt[raidx]
}

const playgame=(userChoice)=>{
    console.log("user:",userChoice)// generate com choice
    const compCh=gencompchoice()
    console.log("computer:",compCh)

    if(compCh===userChoice){
        //draw game
        gameDraw()
    }else{
        let userWin=true
        if(userChoice==="rock"){
            userWin=compCh==="paper" ? false:true
        }else if(userChoice==="paper"){
            userWin=compCh==="scissors" ? false:true
        }else{
            userWin=compCh==="rock" ? false:true   
        }
        showWinner(userWin,userChoice,compCh)
    }

}
choises.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        const userChoice=choise.getAttribute("id")
        playgame(userChoice)
    })
})