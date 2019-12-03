// JavaScript source code
function validate()
{
	if(document.getElementById('movieName').value == "")
	{
		window.location = "edit-movie-validation.html";
	}
	else
	{
		window.location = "edit-movie-success.html";
	}
}