import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {

    renderSquare(row, col, i) {
        let win = this.props.winCoords && this.props.winCoords.indexOf(i) > -1 ? 'win' : '';
        return <Square
                    key={i}
                    win={win}
                    row={row}
                    col={col}
                    value={this.props.squares[i]}
                    onClick={() => this.props.onClick(i)}
                />;
    }

    render() {
        const self = this;
        let c = 0;
        return (
            <div>
                {Array(3).fill(null).map((_, row) => {
                    return (
                        <div className="board-row" key={row}>
                        {Array(3).fill(null).map((_, col) => {
                            return self.renderSquare(row, col, c++);
                        })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Board;