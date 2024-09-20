let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-button");
let turnO = true
let winningpatterns =  [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText = "O"
            turnO = !turnO
            
        }
        else{
            box.innerText = "X"
            turnO = !turnO
        }
        box.disabled = true
        checkwinner();
    })
})
const showwinner = (winner)=>{
    document.querySelector(".msg").innerText = winner + " is the winner"
    boxes.forEach(box=>box.disabled=true)
}
const checkwinner = ()=>{
    for (let pattern of winningpatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1!="" &&val2!="" && val3!=""){
            if(val1 === val2 && val2 === val3){
                showwinner(val1)
            }
        }
    }
}
reset.addEventListener('click',()=>{
    turnO=true
    document.querySelector(".msg").innerText = ""
    boxes.forEach((box)=>{
        box.disabled = false
        box.innerText = ""
    })
    
})