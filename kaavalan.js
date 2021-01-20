var config = {
apiKey: "AIzaSyAB_Q9APAALhTFv3djz9cMxft5uft2LwCM",
authDomain: "duja-55555.firebaseapp.com",
databaseURL: "https://duja-55555-default-rtdb.firebaseio.com",
projectId: "duja-55555",
storageBucket: "duja-55555.appspot.com",
messagingSenderId: "203703988385",
appId: "1:203703988385:web:1774dba54125cae6b980e0",
    measurementId: "G-EVFS9WQZ9F"
      };
      firebase.initializeApp(config);
       firebase.analytics();
function kaavalan() {
	var user = firebase.auth().currentUser;
	if (user == null) {
  		alert("நீங்கள் துஜ அல்ல !");
		//location.replace("index.html");
	}
	var kaavalan = user.uid;
	if(kaavalan != "ALbZ2dAEj0XJHLS3797w01YQq0x2") {
		alert("நீங்கள் துஜ அல்ல !");
		//location.replace("index.html");
	}
}
