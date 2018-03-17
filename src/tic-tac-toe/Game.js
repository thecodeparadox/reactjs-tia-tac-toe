import React, {Component} from 'react';
import Board from './Board';
import Move from './Move';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            moves: [{
                step: 0,
                row:  0,
                col: 0
            }],
            stepNumber: 0,
            next: 'X',
            winner: {
                symbol: null,
                coords: null
            }
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const moves = this.state.moves.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.next;
        const next = this.state.next === 'X' ? 'O' : 'X';
        this.setState({
            history: history.concat([{
                squares: squares,
                row: parseInt(i / 3, 10),
                col: i % 3
            }]),
            moves: moves.concat([{
                step: history.length,
                row: parseInt(i / 3, 10),
                col: i % 3
            }]),
            stepNumber: history.length,
            next: next
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            next: step % 2 === 0 ? 'X' : 'O'
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        let status, winCoords;
        if (winner) {
            winCoords = winner[1];
            status = "Winner: " + winner[0];
        } else if (this.state.stepNumber === 9 && !winner) {
            status = "Game Over. No Winner. :-(";
        } else {
            status = "New Player: " + this.state.next;
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        winCoords={winCoords}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <Move
                        moves={this.state.moves}
                        stepNumber={this.state.stepNumber}
                        onClick={step => this.jumpTo(step)}
                    />
                </div>
            </div>
        );
    }
}

export default Game;

// determine winner
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return [squares[a], [a, b, c]];
        }
    }
    return null;
}