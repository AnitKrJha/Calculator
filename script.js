let screen=document.querySelector(".screen");
const buttons=document.querySelectorAll(".buttons");
let screenvalue='';
screen.addEventListener('keypress',(e)=>{
    if(e.key=="Enter"){
        screen.value=eval(screen.value)
    }
})

for (item of buttons){
    item.addEventListener('click',function(e){
        button_text=e.target.innerText;
        if(button_text.length>3)button_text='';
        // console.log(button_text);
        screenvalue=screen.value
        if(button_text=='AC'){
            screenvalue='';
            button_text='';
        }
        else if(button_text=='C'){
            button_text=screenvalue.slice(0,screenvalue.length-1 );
            screenvalue='';
            
        }
        else if(button_text=='MOD'){
            button_text="%";
        }
        
        else if(button_text=='='){
            try{
            button_text=eval(screenvalue);
            }
            catch{
                button_text="Invalid Syntax";
            }
            screenvalue='';
        }
        
            screenvalue+=button_text;
        
            screen.value=screenvalue;
    })
}
