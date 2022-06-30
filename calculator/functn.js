
window.addEventListener('load',()=>{
    document.querySelector(".loader").style.display = 'none'
})

var display = document.querySelector(".container .display");
document.querySelectorAll(".container section div").forEach((ab)=>{
    ab.addEventListener("click",(cd)=>{
        switch (cd.target.innerText) {
            case 'Clear': display.innerText = "";
                break;
            case "⇠":
                if(display.innerText)
                display.innerText= display.innerText.slice(0,-1);
                break;
            case "=": 
                try {display.innerText = eval(display.innerText);}
                catch {display.innerText = "Error!";}
                break;
            default: display.innerText += cd.target.innerText;
                break;
        }
    })
})

document.addEventListener('keypress',(cd)=>{
        var letters = /^[A-Za-z]+$/
        display.innerText += `${cd.key}`;
        let test = cd.keyCode;
        console.log(test)
        switch(test){
            case 13: display.innerText = "use screen buttons";
            break;
            case 32: display.innerText = "";
            break;
        }
        if(cd.key.match(letters)){
            display.innerText="no alphabets";
        }
})