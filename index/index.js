
let computerscore =0;
let userscore =0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".click");
let score=document.querySelector(".score1");
let scores=document.querySelector(".score2");
let userwins=(userwin, compchoice ,userchoice)=>{
    if(userwin){
        msg.innerText="user choose "+userchoice +" beats "+compchoice;
        userscore++;
        score.innerText=userscore;
        msg.style.backgroundColor="green";
    }
    else{
        msg.innerText="computer choose "+compchoice +" beats "+userchoice;
        computerscore++;
        scores.innerText=computerscore;
        msg.style.backgroundColor=" rgb(136, 24, 24)";
    }
}
const computerchoice=()=>{
    const array=["rock","paper","scissors"];
    const randomnumber=Math.floor(Math.random()*3);
    return array[randomnumber];
}
const draw=()=>{
    msg.innerText="Its Draw! Play again";
    msg.style.backgroundColor="black";
}
const playgames = (userchoice)=>{
    console.log("userchoice" ,userchoice); 
    const compchoice=computerchoice();
    console.log("compchoice",compchoice);
    if(userchoice==compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            if(compchoice=="paper"){
                userwin=false;
            }
        }
        if(userchoice=="paper"){
            if(compchoice=="scissors"){
                userwin=false;
            }
        }
        if(userchoice=="scissors"){
            if(compchoice=="rock"){
                userwin=false;
            }
        }
      userwins(userwin, compchoice ,userchoice);
    }
}

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userchoices = choice.getAttribute("id");
        playgames(userchoices);})
    });