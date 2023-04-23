function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}



function createEtch(blocks) {
    let size=Math.floor((750/blocks));
    const sketchRem=document.querySelector('.sketch');
    sketchRem.remove();
    const sketch=document.createElement('div');
    sketch.setAttribute('class','sketch');
    const etch=document.querySelector('.etch');
    etch.insertBefore(sketch,document.querySelector('.btnHolder'));
     let act=size+'px';
    for(let i=0;i<blocks*blocks;i++){
        const ins=document.createElement('div');
        ins.style.flex="1 1 auto"
        ins.style.minWidth=act;
        ins.style.minHeight=act;
        ins.style.margin="0%";
        ins.style.border="0%";
        ins.style.backgroundColor='white';
        ins.addEventListener('mouseover', () => {
            if(!bool)
            ins.style.backgroundColor='black';
            else {
                if(ins.style.backgroundColor!='black' && ins.style.backgroundColor!='white') 
                {
                    let CurrColor = ins.style.backgroundColor.match(/\d+/g);
                    let r=parseInt(CurrColor[0])-parseInt(CurrColor[0])*0.1
                    let g=parseInt(CurrColor[1])-parseInt(CurrColor[1])*0.1
                    let b=parseInt(CurrColor[2])-parseInt(CurrColor[2])*0.1
                    ins.style.backgroundColor="rgb("+r+','+g+','+b+')';
                }
                else {
                    const randomColor=Math.floor(Math.random()*16777215).toString(16);
                    ins.style.backgroundColor="#" + randomColor;
                }
            }
        })
    
        // ins.addEventListener('mouseout', () => {
        //     ins.style.backgroundColor='white';
        // })
    
       // ins.textContent=i;
        ins.style.color='green'
        sketch.appendChild(ins);
    }
}

createEtch(64);
let curr=64;
let bool=false;

const rainbow=document.querySelector(".temp");

rainbow.addEventListener('click', () =>{
    bool=!bool;
    console.log(bool);
    
});


const reset=document.querySelector(".reset");

reset.addEventListener('click',()=> {
    let x=prompt("Enter number of blocks per row, Max of 100");
    curr=x;
    createEtch(x);
})

const erase=document.querySelector('.erase')

erase.addEventListener('click', ()=> {
    createEtch(curr);
})




