var objPeople = [
	{
		username: 'shubham',
		password: 'password'
	},
	{
		username: 'sandeep',
		password: 'password90'
	},
	{
		username: 'nitesh',
		password: 'password3'
	}
];

function login() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	for(var i = 0; i < objPeople.length; i++) { 
		if(username == objPeople[i].username && password == objPeople[i].password) {
			window.location.href = "Success.html";
			return; 
		}
    }
			alert('incorrect username or password');
}

function registerUser() {
	var registerUsername = document.getElementById('newUsername').value;
	var registerPassword = document.getElementById('newPassword').value;
	var newUser = {
		username: registerUsername,
		password: registerPassword
	};
	for(var i = 0; i < objPeople.length; i++) {
		if(registerUsername == objPeople[i].username) {
			alert('That username is already in user, please choose another');
			return;
		} else if (registerPassword.length < 7) {
			alert('Password is to short, include 7 or more characters');
			return;
		}
	}
    objPeople.push(newUser);
    alert('Registeration Successfull')
    console.log(objPeople);
    document.getElementById("SignForm").reset();
    
}