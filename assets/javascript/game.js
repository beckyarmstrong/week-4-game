// Step 1: make sure nothing runs until document is ready
$(document).ready(function() {

// Step 2: define variables for score, wins, losses, and random number
	var userTotal= 0;
	var wins = 0;
	var losses = 0;
	var randomNumber = Math.floor(Math.random()*101)+19;
	var cry1;
	var cry2;
	var cry3;
	var cry4;

// Step 2a: display wins and losses and total score
	$('#winCount').text(wins);
	$('#lossCount').text(losses);
	$('#scoreSpace').text(userTotal);
	
// Step 2b: display random number
	$('#randomSpace').text(randomNumber);

// Step 2c: function for game reset
  function reset(){
      randomNumber=Math.floor(Math.random()*101)+19;
      $('#randomSpace').text(randomNumber);
      cry1= Math.floor(Math.random()*11+1);
      cry2= Math.floor(Math.random()*11+1);
      cry3= Math.floor(Math.random()*11+1);
      cry4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#scoreSpace').text(userTotal);
      } 

// Step 3: Assign numbers for each crystal, between 1-12
  var cry1= Math.floor(Math.random()*11)+1
  console.log(cry1);
  var cry2= Math.floor(Math.random()*11)+1
  console.log(cry2);
  var cry3= Math.floor(Math.random()*11)+1
  console.log(cry3);
  var cry4= Math.floor(Math.random()*11)+1
  console.log(cry4);

// Step 4: as user clicks the crystals, add up the total. If total = randomNumber, win and reset. if over, loss, and reset
 	$('#gemOne').on('click', function() {
    userTotal += cry1;
    console.log("New total= " + userTotal);
    $('#scoreSpace').text(userTotal); 
    if (userTotal > randomNumber) {
			losses++;
			$('#lossCount').text(losses);
			alert("You lost, try again");
			console.log("you lost");
			reset();
		}
	if (userTotal == randomNumber) {
			wins++;
			$('#winCount').text(wins);
			console.log("you won");
			alert("You won! Congratulations!");
			reset();
		}
   });

   $('#gemTwo').on('click', function(){
    userTotal += cry2;
    console.log("New total= " + userTotal);
    $('#scoreSpace').text(userTotal); 
    if (userTotal > randomNumber) {
			losses++;
			$('#lossCount').text(losses);
			console.log("you lost");
			alert("You lost, try again");
			reset();
		}
	if (userTotal == randomNumber) {
			wins++;
			$('#winCount').text(wins);
			console.log("you won");
			alert("You won! Congratulations!");
			reset();
		}
   });

	$('#gemThree').on('click', function() {
    userTotal += cry3;
    console.log("New total= " + userTotal);
    $('#scoreSpace').text(userTotal); 
    if (userTotal > randomNumber) {
			losses++;
			$('#lossCount').text(losses);
			console.log("you lost");
			alert("You lost, try again");
			reset();
		}
	if (userTotal == randomNumber) {
			wins++;
			$('#winCount').text(wins);
			console.log("you won");
			alert("You won! Congratulations!");
			reset();
		}
   });

   $('#gemFour').on('click', function(){
    userTotal += cry4;
    console.log("New total= " + userTotal);
    $('#scoreSpace').text(userTotal); 
    if (userTotal > randomNumber) {
			losses++;
			$('#lossCount').text(losses);
			console.log("you lost");
			alert("You lost, try again");
			reset();
		}
	if (userTotal == randomNumber) {
			wins++;
			$('#winCount').text(wins);
			console.log("you won");
			alert("You won! Congratulations!");
			reset();
		}
   });

});
