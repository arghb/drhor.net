//首手版自动跳转
var isiPad = navigator.userAgent.match(/iPad|iPhone|Android|Linux|iPod/i) != null;
if(isiPad){	
	var wapurl = window.location.href.replace(/www\.drhor\.net/ig,"m.drhor.net");
	window.location.href = wapurl;
}