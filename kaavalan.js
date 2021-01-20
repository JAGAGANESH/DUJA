function kaavalan() {
	var user = firebase.auth().currentUser;
	//if (user == null) {
  	//	alert("நீங்கள் துஜ அல்ல !"+user);
		//location.replace("index.html");
	//}
	var kaavalan = user.uid;
	if(kaavalan != "ALbZ2dAEj0XJHLS3797w01YQq0x2") {
		alert("நீங்கள் துஜ அல்ல !"+kaavalan);
		//location.replace("index.html");
	}
}
