console.log("Welcome to my Calculator")
let newString="";

let buttons=document.getElementsByTagName('button')
// console.log(typeof(Array.from(buttons)));
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            newString = eval(newString);
            document.querySelector('.inp').value=newString;
        }
        else if(e.target.innerHTML == 'AC'){
            newString = "";
            document.querySelector('.inp').value=newString;
        }
        else if(e.target.innerHTML == 'DEL'){
            newString = newString.slice(0,-1);
            document.querySelector('.inp').value = newString;
            // display.value = display.value.slice(0,-1);

        }
        else{
            console.log(e.target)
            newString = newString + e.target.innerText;
            document.querySelector('.inp').value=newString;
        }
    })
})