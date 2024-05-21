let boxes=document.querySelectorAll(".btn");

let turn ="X"

let isGameOver=false;

let chanceX=document.querySelector("#chanceX");
let chanceO=document.querySelector("#chanceO");

const changeTurn=()=>{
    if(turn==="X"){
        chanceX.classList.remove("bg-red-500",'text-white');
        chanceO.classList.add("bg-blue-500",'text-white');
        turn="O"
    }
    else{
        chanceO.classList.remove("bg-blue-500",'text-white');
        chanceX.classList.add("bg-red-500",'text-white');
        turn="X"
    }
}

const checkWin=()=>{
    let winConditions=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for(let i=0;i<winConditions.length;i++){
        var b0=boxes[winConditions[i][0]];
        var b1=boxes[winConditions[i][1]];
        var b2=boxes[winConditions[i][2]];

        var v0=b0.innerHTML;
        var v1=b1.innerHTML;
        var v2=b2.innerHTML;

        if(v0!="" && v0===v1 && v1===v2){
            isGameOver=true;
            document.querySelector("#results").innerHTML= turn + " win 🎉";
            document.querySelector("#again").classList.remove("hidden");
            let bg;
            (turn==="X")? bg="bg-red-500":bg="bg-blue-500";
            let hoverBg = turn === "X" ? "hover:bg-red-500" : "hover:bg-blue-500";

            b0.classList.add(bg,"text-white",hoverBg)
            b1.classList.add(bg,"text-white",hoverBg)
            b2.classList.add(bg,"text-white",hoverBg)
        }

    }
}
const checkDraw=()=>{
    if(!isGameOver){
        let isDraw=true;
        boxes.forEach(e=>{
            if(e.innerHTML===""){
                isDraw=false;
            }
        })

        if(isDraw){
            isGameOver=true;
            document.querySelector("#results").innerHTML= "Its Draw";
            document.querySelector("#again").classList.remove("hidden");
        }

    }
}

boxes.forEach(e=>{
    e.innerHTML=""
    e.addEventListener("click",()=>{
        if(!isGameOver && e.innerHTML===""){
            e.innerHTML=turn;
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})


document.querySelector("#again").addEventListener("click",()=>{
    isGameOver=false;
    turn="X";
    boxes.forEach(e=>{
        e.innerHTML="";
        e.classList.remove("bg-red-500","bg-blue-500","text-white","hover:bg-blue-500","hover:bg-red-500")
    })
    document.querySelector("#results").innerHTML= "";
    document.querySelector("#again").classList.add("hidden");
        
})