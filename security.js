function security() {
	var security=decodeURIComponent(window.location.search);
	security=security.substring(1);
	if(security != "dj") {
		alert("நீங்கள் துஜ அல்ல !");
		location.replace("index.html");
	}
}