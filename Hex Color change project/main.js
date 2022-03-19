const colorArray=["#3cb371","#ee82ee","#ee82e0",];
const  lengthofArray=colorArray.length;
function changeColor(){


    random_color=Math.floor(Math.random() * lengthofArray);
    console.log(colorArray[random_color]);
    
    document.getElementById("colorname").innerHTML=colorArray[random_color];
        document.body.style.background = colorArray[random_color];
    
    }