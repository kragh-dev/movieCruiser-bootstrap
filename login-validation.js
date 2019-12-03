// JavaScript source code
function login()
{
	if(document.getElementById('userName').value == "")
	{
		window.location = "login-validation.html";
	}
	else if(document.getElementById('userName').value == 'admin')
	{
		window.location = "movie-list-admin.html";
	}
	else if(document.getElementById('userName').value != "")
	{
		window.location = "movie-list-customer.html";
	}
}

function signup()
{
	window.location = "login.html";
}