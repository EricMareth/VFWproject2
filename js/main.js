// Web App Part 2
// Eric Mareth
// Visual Frameworks 1212

window.addEventListener("DOMContentLoaded", function(){
	
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	function whatType(){
		var formTag = document.getElementsByTagName("form");
			selectLi = $('selectType'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "type");
		for(i=0, j=charType.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = charType[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	function getSelectedRadio(){
		var sexChange = document.forms[0].gender;
		for(i=0; i<sexChange.length; i++){
			if (sexChange[i].checked){
				genderVal = sexChange[i].value;
			}
		}
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				$('charForm').style.display = "none";
				$('clearLink').style.display = "inline";
				$('displayData')style.display = "none";
				$('addLink')style.display = "inLine";
			case "off":
			
			default:
				return false;
		}
	}
	
	function getData(){
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id","items");
		var makeList =document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		for( i=0, length=localStorage.length; i<length; i++){
			var makeLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeLi.appendChild(makeSubList);
			for(var n in obj){
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0] + " " + obj[n][1];
				makeSubLi.innerHTML = optSubText;
			}
		}
	}
	
	function storeData(){
		var id			= Math.floor(Math.random()*10000001);
		getSelectedRadio();
		var item		={};
			item.name		=["Name:", $('charName').value];
			item.story		=["Story:", $('taleName').value];
			item.land		=["Land:", $('homeLand').value];
			item.gender		=["Sex:", genderVal];
			item.age		=["Age:", $('age').value];
			item.type		=["Character Type:", $('selectType').value];
			item.details	=["Details:", $('details').value];
			item.created	=["Birthdate:", $('created').value];
		
		localStorage.setItem(id, JSON.stringify(item));
		alert("Your character has been remembered!");
		
	}
	
	var charType = ["== What character type? ==", "Hero", "Side-kick", "Love Interest", "Mentor", "Villain", "Henchman", "Sub-Villain", "Supporting", "Walk-on", "Off-Screen", ]
	whatType();

	var displayData = $('displayData');
	displayData.addEventListener("click", getData);
/*	var clearLink = $('clearLink');
	clearLink.addEventListener("click", clearLocal);*/
	var save = $('saveChar');
	save.addEventListener("click", storeData); 
	
});