function check() {

	var q1 = document.trivia.q1.value;
	var q2 = document.trivia.q2.value;
	var q3 = document.trivia.q3.value;
	var q4 = document.trivia.q4.value;
	var q5 = document.trivia.q5.value;
	var q6 = document.trivia.q6.value;
	var correct = 0;

		if (q1 == "correct") {
			correct++;
	}

		if (q2 == "correct") {
			correct++;
	}

		if (q3 == "correct") {
			correct++;
	}

		if (q4 == "correct") {
			correct++;
	}

		if (q5 == "correct") {
			correct++;
	}

		if (q6 == "correct") {
			correct++;
		}

	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";

}

function tenSeconds() {
$("#time-left").append("<h2>About 10 Seconds Left!</h2>");

}

function timeUp() {
$("#time-left").append("<h2>Time's Up!</h2>");

}




var audio = new Audio("assets/song.mp3")
audio.play();

setTimeout(function() { 
	alert("Your Time is Up!!!"); 
}, (1000 * 60));
