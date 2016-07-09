require("../css/styles.css");

document.addEventListener("DOMContentLoaded", function(event) {
	var el = document.getElementById("content");
	var family = window.getComputedStyle(el)["font-family"];
	
	var result = document.getElementById("result");
	result.textContent = family;
	var validity = "color: green;";
	if (family.match(/Comic/)) {
		validity = "color: red;";
	}
	result.style.cssText = validity;
});

