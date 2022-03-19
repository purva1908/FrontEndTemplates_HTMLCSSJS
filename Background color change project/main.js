const colorArray=["yellow","pink","green","blue","red","orange","black","white","grey","Chartreuse","LawnGreen", 	
"Lime ","LimeGreen ","PaleGreen" ,"LightGreen" 	,"MediumSpringGreen", 	"SpringGreen ",	"MediumSeaGreen", 	"SeaGreen" ,"ForestGreen", 	"Green","DarkGreen", 	
"YellowGreen", 	"OliveDrab" ,	"DarkOliveGreen", 	"MediumAquaMarine", "DarkSeaGreen" 	,"LightSeaGreen "	,"DarkCyan 	","Teal ",
"Aqua 	","Cyan 	","LightCyan" ,	"PaleTurquoise", "Aquamarine ",	"Turquoise ",	"MediumTurquoise" 	,"DarkTurquoise" ];
const  lengthofArray=colorArray.length;
function changeColor(){


random_color=Math.floor(Math.random() * lengthofArray) +1;
    document.body.style.background = colorArray[random_color];


}