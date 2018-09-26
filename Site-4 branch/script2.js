$(document).ready(function(){


var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];


// Passive Active State


function passiveFlicker(){

	function activateFlicker(){
		//$('.tb').removeClass('wide2');
		$('.tb').removeClass('pos01');
		$('.tb').removeClass('pos02');
		$('.tb').removeClass('pos03');
		$('.tb').removeClass('pos04');
		$('.tb').removeClass('pos05');
		$('.tb').removeClass('pos06');


		var randNum1 = Math.floor(Math.random()*36);
		var randNum2 = Math.floor(Math.random()*36);
		//console.log('flicker: ' + randNum1 + ' ' + letters[randNum1]);
		var change1 = "vs"+letters[randNum1];
		var change2 = "vs"+letters[randNum2];

		var parent1 = document.getElementsByClassName(change1);
		var parent2 = document.getElementsByClassName(change2);

		//var children1 = parent1.querySelectorAll('div');

		var children1 = $(parent1).children();

		//console.log(children1);

		for(var x = 0; x < children1.length; x ++){
			var select = children1[x];
			var classNum = Math.ceil(Math.random()*6);
			var changeClass = 'pos0'+classNum;
			$(select).addClass(changeClass);
		}
	}

	setTimeout(activateFlicker, 80);

}


setInterval(passiveFlicker, 150);








// Hover State activity 

var active = false;

$('.vs').mouseover(function(){
	var thisClass = $(this).attr('class');
	var choice = thisClass.substring(8,9);

	active = true;
	hoverFlicker(choice);

	$('.tb').removeClass('posb01');
	$('.tb').removeClass('posb02');
	$('.tb').removeClass('posb03');
	$('.tb').removeClass('posb04');
	$('.tb').removeClass('posb05');
	$('.tb').removeClass('posb06');


}).mouseout(function(){
	$('.tb').removeClass('posb01');
	$('.tb').removeClass('posb02');
	$('.tb').removeClass('posb03');
	$('.tb').removeClass('posb04');
	$('.tb').removeClass('posb05');
	$('.tb').removeClass('posb06');

	active = false;

});






/* hoverFlicker function */

function hoverFlicker(input){

	function crazy(){

			var pclass = '.vs'+input;
			var children = $(pclass).children();
			var select, classNum, changeClass;

			$('.tb').removeClass('posb01');
			$('.tb').removeClass('posb02');
			$('.tb').removeClass('posb03');
			$('.tb').removeClass('posb04');
			$('.tb').removeClass('posb05');
			$('.tb').removeClass('posb06');

			if(active){
				for(var x = 0; x < children.length; x ++){
				 	select = children[x];
				 	classNum = Math.ceil(Math.random()*6);
				 	changeClass = 'posb0'+classNum;
					$(select).addClass(changeClass);
				}
			}

			else {
				clearInterval(crazyInterval);
			}	

		}

	var crazyInterval = setInterval(crazy, 100);

}











// If you click and hold down on the letter 


var counting;


$('.vs').click(function(){

	$('.vs').mousedown(function(){

		var tracking = 5;

		counting = setInterval(function(){
			if(tracking < 19){
				tracking = tracking + 1;
				var bigger = tracking * 0.25;

				grow(bigger);
			}
			else {
				$('h1').css('display', 'block');

				setTimeout(function(){
					location.reload();
				}, 1200)
			}

		}, 450);

		return false;
	});


	$('.vs').mouseup(function(){
		clearInterval(counting);
		return false;

		console.log('up');
	});




	var thisClass = $(this).attr('class');
	var choice = thisClass.substring(8,9);

	console.log('click: ' + choice);

	active = false;


	flickerBig(choice);


	setTimeout(removeBig, 700);

});




// Large flicker reaction when clicking a letter 

function flickerBig(input){

	function big(){

		var pclass = '.vs'+input;
		var children = $(pclass).children();
		var select, classNum, changeClass;

		$('.tb').removeClass('posf01');
		$('.tb').removeClass('posf02');
		$('.tb').removeClass('posf03');
		$('.tb').removeClass('posf04');
		$('.tb').removeClass('posf05');
		$('.tb').removeClass('posf06');


		for(var x = 0; x < children.length; x ++){
		 	select = children[x];
		 	classNum = Math.ceil(Math.random()*6);
		 	changeClass = 'posf0'+classNum;
			$(select).addClass(changeClass);
		}

	}

	var crazyBig = setTimeout(big, 100);

}



function removeBig(){
	$('.tb').removeClass('posf01');
	$('.tb').removeClass('posf02');
	$('.tb').removeClass('posf03');
	$('.tb').removeClass('posf04');
	$('.tb').removeClass('posf05');
	$('.tb').removeClass('posf06');
}




// Function to grow all the elements on the page


function grow(input){

	var height = input*10;
	var scale = 'scale('+input+')';

	$('.vs').css('transform', scale);
	$('.tb').css('border-radius', '0px');
	$('.tb').css('height', height);

}

























});