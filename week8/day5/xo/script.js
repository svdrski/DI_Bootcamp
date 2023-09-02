let tracker;

let xbtn = document.getElementById('x')
let Obtn = document.getElementById('o')
let table = document.getElementById('table')
let playerselector = document.getElementById('playerselector')
let restartblock = document.getElementById('restartblock')
let restarttext = document.getElementById('restarttext')


let humanplayer = 'X'
let compplayer = 'O'
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

let cells = document.querySelectorAll('.cell')
console.log(cells)


start()

function start() {
	restartblock.style.display = 'none'
	
	xbtn.addEventListener('click', function() {
		 humanplayer = 'X'
         compplayer = 'O'
		table.style.display = 'block'
		playerselector.style.display = 'none'
	})

	Obtn.addEventListener('click', function() {
		humanplayer = 'O'
        compplayer = 'X'
		table.style.display = 'block'
		playerselector.style.display = 'none'
	})

	tracker = Array.from(Array(9).keys())

	for (a of cells) {
		a.style.removeProperty('background-color');
		a.innerText = '';
		a.addEventListener('click', action, false)
	}
	console.log(cells)

}

function action (cell) {
	if (typeof tracker[cell.target.id] == 'number'){
		turn(cell.target.id, humanplayer)
		if (!draw())  turn(bestSpot(), compplayer)
	}
}




function turn (cellid, player) {
	tracker[cellid] = player
	console.log(player)
	console.log (document.getElementById(cellid))
	document.getElementById(cellid).innerText = player
	let gameWon = checkwinner(tracker, player)
	if (gameWon) gameOver(gameWon)
}


function checkwinner(board, player){
	let players = board.reduce((acc, value, index) => 
	(value === player) ? acc.concat(index) : acc, []);
	let gameWon = null;
	for (let [index, win] of winCombos.entries()) {
		if (win.every(elem => players.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player}
			break;
		}
	}
	return gameWon;
} 



function gameOver(gameWon) {
	for (let index of winCombos[gameWon.index]) {
		document.getElementById(index).style.backgroundColor =
			gameWon.player == humanplayer ? "#3366ff" : "#ff0000";
	}
	for (var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', action, false);
	}
  showwinner(gameWon.player == humanplayer ? "You win!" : "You lose!");
}


function showwinner (value) {
	restartblock.style.display = 'block'
	restarttext.innerText = value
}


function emptycells (){
	return tracker.filter(v => typeof v == 'number')
}

function bestSpot() {
	return minmax(tracker, compplayer).index;
  }


function draw () {
	if (emptycells().length == 0){
		for( a of cells) {
			a.style.backgroundColor = '#007400'
			a.removeEventListener('click', action, false)
		}
		showwinner("Draw!")
		return true;
	}
	return false
}


function minmax (newBoard, player) {
	let emSpots = emptycells(newBoard);

	if(checkwinner(newBoard, humanplayer)) {
		return {score: -10};
	} else if (checkwinner(newBoard, compplayer)){
		return{score: 10};
	} else if (emSpots.length === 0) {
		return{score: 0};
	}

	var moves = []

	for ( let i=0; i<emSpots.length; i++){
		let move ={};
		move.index = newBoard[emSpots[i]];
		newBoard[emSpots[i]] = player;

		if(player == compplayer){
			let result = minmax(newBoard, humanplayer);
			move.score = result.score;
		} else {
			let result = minmax(newBoard, compplayer)
			move.score = result.score
		}
		newBoard[emSpots[i]] = move.index;
	    moves.push(move)
	}

	let bestMove;
	if(player === compplayer) {
		var bestScore = -10000;
		for( i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore){
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for( i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}
	return moves[bestMove];

}


