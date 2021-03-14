var a = document.getElementById('a');

var intv = setInterval(changeImage,1000);

a.onmouseover = stopImageChange;
a.onmouseout = restartImageChange;

function stopImageChange(){
	clearInterval(intv);
}

function restartImageChange(){
	intv = setInterval(changeImage,1000);
}

var x = 2;
function changeImage(){
	a.src = 'images/b'+x+'.png';
	x++;
	if(x>5){
		x = 1;
	}
}