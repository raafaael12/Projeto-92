var player1Name = localStorage.getItem("player1Name");
var player2Name = localStorage.getItem("player2Name");

var player1Score = 0;
var player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player2_score").innerHTML = player1Score;
document.getElementById("player1_score").innerHTML = player2Score;

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1Name;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2Name;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";

    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";

    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";

    row =  question_number + input_box + check_button ; 

    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}

question_turn = "player1Name";
answer_turn = "player2Name";

function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1Name")
		{
			player1Score = player1Score +1;
		    document.getElementById("player1_score").innerHTML = player1Score;
		}
		else 
		{
			player2Score = player2Score +1;
		    document.getElementById("player2_score").innerHTML = player2Score;
		}
	}
	
	if(question_turn == "player1Name")
	{
		question_turn = "player2Name"
		document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player2Name ;
	}
	else 
	{
		question_turn = "player1Name"
		document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player1Name ;
	}

	if(answer_turn == "player1Name")
	{
		answer_turn = "player2Name"
		document.getElementById("player_answer").innerHTML = "Turno de resposta - " + player2Name ;
	}
	else 
	{
		answer_turn = "player1Name"
		document.getElementById("player_answer").innerHTML = "Turno de resposta - " + player1Name ;
	}

    document.getElementById("output").innerHTML = "";
}
