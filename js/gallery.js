scrolltimer = null;
function horScroll2(speed) {
	var page = document.getElementById("contentLayer");
	page.scrollLeft = page.scrollLeft + speed;
	if (!scrolltimer){
		scrolltimer = window.setInterval("horScroll2("+speed+")", 5);
	}
}
function stopSctoll(){
	window.clearInterval(scrolltimer);
	scrolltimer = null
}
$oldthumb = null;
$next = 2;
function activate($id, $thumb, $image){
	document.getElementById("texta").innerHTML = $texts[$id];
	if ($massiv[$id+1]){
		$next = $id+1;
	} else {
		$next = 1;
	}
	document.getElementById("imageBig").src= $image;
//	if ($oldthumb){
//		$oldthumb.style.border = "1px solid #B5C3CE";
//	}
//	$thumb.style.border = "1px solid red";
	$oldthumb = $thumb;
}
function go_next(){
	document.getElementById("imageBig").src=$massiv[$next];
	document.getElementById("texta").innerHTML = $texts[$next];

	$thumb  =  document.getElementById("thumb["+$next+"]");
//	if ($oldthumb){
//		$oldthumb.style.border = "1px solid #B5C3CE";
//	}	
//	$thumb.style.border = "1px solid red";
	$oldthumb = $thumb;
	
	if ($massiv[$next+1]){
		$next = $next+1;
	} else {
		$next = 1;
	}
}