

window.addEventListener("load",init);
	
	function init(e){
		var _nav = document.getElementById("nav");
		
		_nav.addEventListener("mouseover",nav_moveOut);
		var x = 0;
		var y = 100;
		function nav_moveOut(){
						
			setInterval(move,1);	
			
			function move() {
				
				if(x<100){
					x++;				
				}else {
					clearInterval(move);
				}
				_nav.style.left = x + "px";
			}
		}
		
		
		_nav.addEventListener("mouseout",nav_moveIn);
		
		function nav_moveIn(){
			setTimeout("_back",7000);  
			_back = setInterval(back,100);
			
			function back(){
				clearInterval(move);
				if(y>0){
					y--;						
				}else {
					clearInterval(back);
				}
				_nav.style.left = y + "px";
			}
			
		} 
	}
	
		
