//Data representation of game board
var gameBoard = [[0,0,0], 
				 [0,0,0], 
				 [0,0,0]];


var playTurn2 = function() {
	var columns = document.getElementsByClassName("col");
	var columnsCount = columns.length;
	for (var i = 0; i <= columnsCount; i += 1) {
		columns[i].onclick = function(e) {
    		this.innerHTML = 'O';
    		var currentId = this.id;
    		var coordinates = currentId.split("");
    		var xCoordinate = parseInt(coordinates[0], 10);
    		var yCoordinate = parseInt(coordinates[1], 10);
    		gameBoard[xCoordinate][yCoordinate] = 2;
    		seeIfWin();
    		playTurn1();
		}
	}
}


var playTurn1 = function() {
	var columns = document.getElementsByClassName("col");
	var columnsCount = columns.length;
	for (var i = 0; i <= columnsCount; i += 1) {
		columns[i].onclick = function(e) {
    		this.innerHTML = 'X';
    		var currentId = this.id;
    		var coordinates = currentId.split("");
    		var xCoordinate = parseInt(coordinates[0], 10);
    		var yCoordinate = parseInt(coordinates[1], 10);
    		gameBoard[xCoordinate][yCoordinate] = 1;
    		seeIfWin();
    		playTurn2();
		}
	}
}


var checkHorizontal = function() {
	//Grab message area box
	var messageBox = document.getElementById("player-message");

	//Check first row
	if ((gameBoard[0][0] == 1) && (gameBoard[0][1] == 1) && (gameBoard[0][2] == 1)) {
		messageBox.innerHTML = "X Wins";
	}
	else if ((gameBoard[0][0] == 2) && (gameBoard[0][1] == 2) && (gameBoard[0][2] == 2)) {
		messageBox.innerHTML = "O Wins";
	}

	//Check second row
	else if ((gameBoard[1][0] == 1) && (gameBoard[1][1] == 1) && (gameBoard[1][2] == 1)) {
		messageBox.innerHTML = "X Wins";
	}
	else if ((gameBoard[1][0] == 2) && (gameBoard[1][1] == 2) && (gameBoard[1][2] == 2)) {
		messageBox.innerHTML = "O Wins";
	}

	//Check third row
	else if ((gameBoard[2][0] == 1) && (gameBoard[2][1] == 1) && (gameBoard[2][2] == 1)) {
		messageBox.innerHTML = "X Wins";
	}
	else if ((gameBoard[2][0] == 2) && (gameBoard[2][1] == 2) && (gameBoard[2][2] == 2)) {
		messageBox.innerHTML = "O Wins";
	}
}


var checkVertical = function() {
	//Grab message area box
	var messageBox = document.getElementById("player-message");

	//Check first col
	if ((gameBoard[0][0] == 1) && (gameBoard[1][0] == 1) && (gameBoard[2][0] == 1)) {
		messageBox.innerHTML = "X Wins";
	}
	else if ((gameBoard[0][0] == 2) && (gameBoard[1][0] == 2) && (gameBoard[2][0] == 2)) {
		messageBox.innerHTML = "O Wins";
	}

	//Check second col
	else if ((gameBoard[0][1] == 1) && (gameBoard[1][1] == 1) && (gameBoard[2][1] == 1)) {
		messageBox.innerHTML = "X Wins";
	}
	else if ((gameBoard[0][1] == 2) && (gameBoard[1][1] == 2) && (gameBoard[2][1] == 2)) {
		messageBox.innerHTML = "O Wins";
	}

	//Check third col
	else if ((gameBoard[0][2] == 1) && (gameBoard[1][2] == 1) && (gameBoard[2][2] == 1)) {
		messageBox.innerHTML = "X Wins";
	}
	else if ((gameBoard[0][2] == 2) && (gameBoard[1][2] == 2) && (gameBoard[2][2] == 2)) {
		messageBox.innerHTML = "O Wins";
	}
}


var checkDiagonal = function() {
	//Grab message area box
	var messageBox = document.getElementById("player-message");

	//Check top left to bottom right
	if ((gameBoard[0][0] == 1) && (gameBoard[1][1] == 1) && (gameBoard[2][2] == 1)) {
		messageBox.innerHTML = "X Wins";
	}
	else if ((gameBoard[0][0] == 2) && (gameBoard[1][1] == 2) && (gameBoard[2][2] == 2)) {
		messageBox.innerHTML = "O Wins";
	}

	//Check top right to bottom left
	else if ((gameBoard[0][2] == 1) && (gameBoard[1][1] == 1) && (gameBoard[2][0] == 1)) {
		messageBox.innerHTML = "X Wins";
	}
	else if ((gameBoard[0][2] == 2) && (gameBoard[1][1] == 2) && (gameBoard[2][0] == 2)) {
		messageBox.innerHTML = "O Wins";
	}

}	


var seeIfWin = function() {
	checkHorizontal();
	checkVertical();
	checkDiagonal();
}


playTurn1();


