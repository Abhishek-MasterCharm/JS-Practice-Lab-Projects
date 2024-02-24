let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");


let turn0= true;   //PlayerX  or Player0

let winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame= () =>{
    turn0= true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// add event to every button 
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        // console.log("BOX was clicked");
        if(turn0){
            box.innerText= "0";
            turn0= false;
        }
        else{
            box.innerText= "X";
            turn0= true;
        }
        box.disabled = true;
        checkWinner();
    });
});

let checkWinner= () =>{
    for(let pattern of winPatterns){
        pos1Val= boxes[pattern[0]].innerText;
        pos2Val= boxes[pattern[1]].innerText;
        pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            };
        };
    };
};

const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
} 

const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled= true;
    }
} 

const showWinner= (win) =>{
    msg.innerText= `Congratulation, Winner is ${win}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

