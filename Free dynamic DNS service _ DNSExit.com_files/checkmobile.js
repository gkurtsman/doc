function setCookie(cname, cvalue, exdays) 
{
	  var d = new Date();
	  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	  var expires = "expires="+d.toUTCString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) 
{
	var name = cname + "=";
  	var ca = document.cookie.split(';');
  	for(var i = 0; i < ca.length; i++) 
  	{
    	var c = ca[i];
    	while (c.charAt(0) == ' ') 
    	{
      		c = c.substring(1);
    	}
    	if (c.indexOf(name) == 0) 
    	{
      		return c.substring(name.length, c.length);
    	}
  	}
  	return "";
}

function checkMobile() 
{
	//var isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
	var isMobile = Math.min(window.screen.width, window.screen.height) < 768;
	var cM = isMobile ? 'Y':'N';
	var cMobile = getCookie("is-mobile");
	if ( cM != cMobile )
	{
		setCookie("is-mobile", ""+ cM, 360);
		location.reload();
	}
}

//var cMobile = getCookie("is-mobile");
//if ( cMobile == "" )
checkMobile();
