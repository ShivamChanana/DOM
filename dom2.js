const generateColorValue = ()=>{
    return Math.floor(Math.random() * 256)
}

const createColor = ()=>{
    const red = generateColorValue();
    const green = generateColorValue();
    const blue = generateColorValue();
    return `rgb( ${red}, ${green}, ${blue})`
}

const applyColorToBody = (color)=>{
    return document.body.style.backgroundColor = color 
}
const addRandomColorToBg = ()=>{
    const color = createColor()
    return applyColorToBody(color)
}
addRandomColorToBg(); 

const onclickevent = document.getElementById("display");
    // onclickevent.onClick=()=>addRandomColorToBg();
// or
onclickevent.addEventListener("click", ()=>setTimeout(addRandomColorToBg, 1000))
// onclickevent1.addEventListener("click", ()=>console.log("hello"));
// setTimeout(addRandomColorToBg, 1000)
// // setInterval(addRandomColorToBg, 2000)
// const interval = setInterval(addRandomColorToBg, 2000)
// onclickevent.addEventListener("click", ()=> clearInterval(interval))