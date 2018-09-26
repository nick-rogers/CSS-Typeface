$(document).ready(function(){



/* Function detects key presses */




/* Rules below for casting effects on the letters */



// Button #1

var clicked = true;

$('.b1').click(function(){
	console.log('button one');
	if(clicked){
		$('.tb').addClass('wide2');
		$('.b1').css('background-color','white');
		$('.b1').css('color','black');
		clicked = false;
	}else {
		$('.tb').removeClass('wide2');
		$('.b1').css('background-color','#1d1e1e');
		$('.b1').css('color','white');
		clicked = true;
	}
});




// Button #2 

var clicked2 = true;
$('.b2').click(function(){

	if(clicked2){
		$('.int01').addClass('disperse1');
		$('.int02').addClass('disperse1');

		$('.int03').addClass('disperse2');
		$('.int04').addClass('disperse2');

		$('.int05').addClass('disperse1');
		$('.int06').addClass('disperse1');

		$('.int07').addClass('disperse2');
		$('.int08').addClass('disperse2');

		$('.int09').addClass('disperse1');

		$('.int10').addClass('disperse2');

		$('.int11').addClass('disperse1');

		$('.int12').addClass('disperse2');
		$('.int13').addClass('disperse2');

		$('.int14').addClass('disperse1');
		$('.int15').addClass('disperse1');

		$('.int16').addClass('disperse2');
		$('.int17').addClass('disperse2');



		clicked2 = false;
	}else {
		$('.tb').removeClass('disperse1');
		$('.tb').removeClass('disperse2');
		clicked2 = true;
	}
});




// Button #3


var clicked3 = true;
var moving = true;

$('.b3').click(function(){
	if(clicked3){

		moving = true;
		clicked3 = false;

		$('.b3').css('background-color','white');
		$('.b3').css('color','black');

		activeLines();
	}
	else {

		$('.b3').css('background-color','#1d1e1e');
		$('.b3').css('color','white');

		moving = false;
		clicked3 = true;
		setTimeout(removeC, 200);

	}




});


function removeC (){
	console.log('removed');
	$('.tb').removeClass('pos01');
	$('.tb').removeClass('pos02');
	$('.tb').removeClass('pos03');
	$('.tb').removeClass('pos04');
	$('.tb').removeClass('pos05');
	$('.tb').removeClass('pos06');
}




function activeLines(){


	setTimeout(function(){

		$('.tb').removeClass('pos01');
		$('.tb').removeClass('pos02');
		$('.tb').removeClass('pos03');
		$('.tb').removeClass('pos04');
		$('.tb').removeClass('pos05');
		$('.tb').removeClass('pos06');


		for(var i = 1; i < 18; i ++){


			var classNum = Math.ceil(Math.random()*6);
			var changeClass = 'pos0'+classNum;

			if(i < 10){
				var cSelect = '.tb0'+i;
			}else {
				var cSelect = '.tb'+i;
			}

			$(cSelect).addClass(changeClass);


		}

		if(moving){
			activeLines();
		}

	} , 160);


}



// Button #4


var clicked4 = true;

$('.b4').click(function(){
	if(clicked4){
		$('.tb').addClass('boxy');
		$('.b4').css('background-color','white');
		$('.b4').css('color','black');
		clicked4 = false;
	}else {
		$('.tb').removeClass('boxy');
		$('.b4').css('background-color','#1d1e1e');
		$('.b4').css('color','white');
		clicked4 = true;
	}
});





/* Function designed for when you click on a letter */


/*
var wideCheck = false;
$('.tb').click(function(){
	if(wideCheck){
		$('.tb').removeClass('wide2');
		wideCheck = false;
	}
	else {
		$('.tb').addClass('wide2');
		wideCheck = true;
	}
});


$('.tb').click(function(){
	activeLines();
	removeC();
});
*/


/* INTERACTION OPTION 1 */
/*
$('.tb').mousedown(function(){
	$(this).css('background-color', 'red');
}).mouseup(function(){
	$(this).css('background-color', 'white');
});
*/


/* INTERACTION OPTION 2 */

/*
$('.tb').mousedown(function(){
	$('.tb').css('transform', 'scale(1.5)');
	$('.l-box').css('transform', 'scale(2)');
}).mouseup(function(){
	$('.tb').css('transform', 'scale(1)');
	$('.l-box').css('transform', 'scale(1)');
});
*/



/* INTERACTION OPTION 3 */


$('.tb').mousedown(function(){
	$('.tb').css('transform', 'scale(2.8)');
	$('.tb').css('border-radius', '0px');
	$('.l-box').css('transform', 'scale(1.8)');

}).mouseup(function(){
	$('.tb').css('transform', 'scale(1)');
	$('.tb').css('border-radius', '100px');
	$('.l-box').css('transform', 'scale(1)');
});












});