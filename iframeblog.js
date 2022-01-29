var afterpopuplimit = 0;
function showbatman(){
document.querySelector("#batman").style.display = "block";
}
var adsframe = document.createElement("div");
adsframe.className = "adsiframe";
adsframe.innerHTML = "<style>.adsiframe{display:block;width:100%;height:100%;position:fixed;left:0;top:0;}.adsiframe iframe{width:100%;height:100%;border:0;}</style><iframe onload='showbatman()' src='https://animeflv-cc.blogspot.com/'/>";
document.querySelector("#batman").appendChild(adsframe);

document.addEventListener( 'visibilitychange' , function() {
	if (document.hidden) {
		document.querySelector("#batman").style.display = "none";
	}else{
		if(afterpopuplimit < 4){
			if(afterpopuplimit < 2){
				afterpopuplimit+=1;
				setTimeout(function(){
				document.querySelector("#batman").style.display = "block";
				}, 10000);
			}
			if(afterpopuplimit == 2){
				document.querySelector("#adflydiv").style.display = "block";
			}
		}
	}
})
document.querySelector('#adflydiv').addEventListener('click',function(){
	this.style.display = "none";
});
//---------------------------------------------------------------------------------------------------------
