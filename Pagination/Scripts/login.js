function mintaPassword(){
	
	var alphabet = 'abcdefghijkalmnopqrstupwxyz';
	var email = document.getElementById("email").value;
	var password = document.getElementById("pwd").value;
	var resultString = '';
	var setEmail = "firdaus@gmail.com"
	var setPass = "ebpt";

	for (var i = 0; i < password.length; i++) {
		var char = password.substring(i, i+1);
		var index = alphabet.indexOf(char);
		resultString += alphabet.substring(index+1, index+2);
	}

	if (setEmail==email && setPass==resultString) {
        window.open("Pagination/Tmp");
	}
	else{
		if(setEmail!=email){
			alert("Alamat Email Tidak Terdaftar")
		}

		if(setPass!=resultString){
			alert("password yg Anda Masukkan Salah")
		}
	}
}

// function ambilKarakter(){
// 	var input = prompt();

// 	for (var i = 0; i < input.length; i++) {
// 		alert(input.substring(i, i+1));
// 	}

// 	//alert(input.substring(0, 1)); //0 s.d. <2
// }

// function getPassword(password){
// 	var alphabet = 'abcdefghijkalmnopqrstupwxyz';
// 	var resultString = '';

// 	for (var i = 0; i < password.length; i++) {
// 		var char = password.substring(i, i+1);
// 		var index = alphabet.indexOf(char);
// 		resultString += alphabet.substring(index-1, index);
// 	}
// 	alert(password+" chiper "+resultString);

// }