function showDate()
{
var date=new Date();
let d=date.getDate();
let month=date.getMonth()+1;
let year=date.getFullYear();
let tp=d+"/"+month+"/"+year;     //we have taken showDate function above starttime and all cz we are using wrting on document if we keep it after loading full page then it will overwrite whole document and we acn see only date and time clock will be vanish. 

//alert(d+"-"+month+"-"+year);    //call it before loading full page
document.getElementById("demo1").innerHTML=tp;
}

var timer;
function startTime()
{
	timer=setInterval(updateTime,1000);

	function updateTime()
	{
		document.getElementById("demo").innerHTML=new Date().toLocaleTimeString();
	}
}
function stopTime()
{
	clearInterval(timer);
}