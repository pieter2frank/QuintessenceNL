/* ================================================================ 
This copyright notice must be untouched at all times.

The original version of this scriptt and the associated (x)html
is available at http://www.stunicholls.com/menu/pro_dropline_5.html
Copyright (c) 2005-2008 Stu Nicholls. All rights reserved.
This script and the associated (x)html may be modified in any 
way to fit your requirements.
=================================================================== */


	var getEls = document.getElementById('slide').getElementsByTagName("LI");
	var getAgn = getEls;

	for (var i=0; i<getEls.length; i++) {
		getEls[i].onmouseover=function() {

		for (var z=0; z<getAgn.length; z++) {
				getAgn[z].className = 'top';
		}

		this.className = "top current";


		}
	}