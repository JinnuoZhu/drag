window.onload=function(){
	var oDiv=document.getElementById('div1');

	function drag(obj){
		obj.onmousedown=function(ev){
			var ev=ev||event;
			disX=ev.clientX-this.offsetLeft;
			disY=ev.clientY-this.offsetTop;
			if(obj.setCapture){
				obj.setCapture();
			}
			document.onmousemove=function(ev){
				var ev=ev||event;
				var l=ev.clientX-disX;
				var t=ev.clientY-disY;

				if(l<0){//把0改为另外任何一个正值会有磁性吸附效果，下面原理相同
					l=0;
				}else if(l>document.documentElement.clientWidth-obj.offsetWidth){
					l=document.documentElement.clientWidth-obj.offsetWidth;
				}
				if(t<0){
					t=0;
				}else if(t>document.documentElement.clientHeight-obj.offsetHeight){
					t=document.documentElement.clientHeight-obj.offsetHeight;
				}


				obj.style.left=l+'px';
				obj.style.top=t+'px';
			}
			document.onmouseup=function(){
				document.onmousemove=document.onmouseup=null;
				if(obj.releaseCapture){
					obj.releaseCapture();
				}
			}
		return false;
		}
	}

	drag(oDiv);
}