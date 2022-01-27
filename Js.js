const navbar=document.getElementById("mySidenav");
function myFunction() {
	var x = navbar;
	if (x.style.width === "0%") {
	  x.style.width = "28%";
	} else {
	  x.style.width = "0%";
	}
  }
