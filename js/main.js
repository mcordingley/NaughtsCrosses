class TicTacToe {
  constructor() {
    this.grid = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    this.current_player = 'X';
  }

  move(column, row) {
    if (this.grid[column][row]) {
      return false;
    }

    this.grid[column][row] = this.current_player;

    if (this.current_player === 'X') {
      this.current_player = 'O';
    } else {
      this.current_player = 'X';
    }

    return true;
  }

 // moveAI() {
 //   const recommendedMove = this.negamax()
 // }
 //
 //negamax(node, depth, color) {
 //  if depth = 0 or node is a terminal node then
 //    return color × the heuristic value of node
 //
 //  value = −Infinity
 //
 //  for each child of node do
 //    value = max(value, −this.negamax(child, depth − 1, −color))
 //
 //  return value
 //}

  onCellClick(event) {
    const cellElement = event.target,
      row = this.elementRow(cellElement),
      column = this.elementColumn(cellElement),
      currentPlayer = this.current_player;

    if (this.move(column, row)) {
      cellElement.innerText = currentPlayer;
    }
  }

  elementRow(element) {
    return this.elementNumber(element.parentElement);
  }

  elementColumn(element) {
    return this.elementNumber(element);
  }

  elementNumber(element) {
    return Array.from(element.parentElement.children).indexOf(element);
  }
}

const game = new TicTacToe(),
  gameTable = document.getElementById('game');

gameTable
  .querySelectorAll('tbody td')
  .forEach(function (element) {
    element.addEventListener('click', function (event) {
      game.onCellClick(event);
    });
  });
