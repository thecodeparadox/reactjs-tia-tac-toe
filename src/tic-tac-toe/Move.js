import React, {Component} from 'react';

class Move extends Component {

    constructor(props) {
        super(props);
        this.state = {
            order: 'asc'
        };
    }

    toogleMoves() {
        this.setState({
            order: this.state.order === 'asc' ? 'desc' : 'asc'
        });
    }

    render() {
        let moves = this.props.moves.slice();
        if ( this.state.order === 'asc' ) {
            moves = moves.sort((a, b) => (a.step > b.step));
        } else {
            moves = moves.sort((a, b) => (a.step < b.step));
        }

        return (
            <div>
                <ol>
                    {moves.map((move, i) => {
                        let desc = move.step ? 'Go to move # ' + move.step : 'Go to game start';
                        let cell = move.step ? `(${move.row}, ${move.col})` : '';
                        let active = this.props.stepNumber === move.step && move.step > 0 ? 'active' : '';
                        return (
                            <li key={move.step} className={active}>
                                <button
                                    className="del-btn"
                                    onClick={() => this.props.onClick(move.step)}>
                                    {desc}
                                </button>
                                <span>{cell}</span>
                            </li>
                        );
                    })}
                </ol>
                <button onClick={() => this.toogleMoves()}>Toogle Moves</button>
            </div>
        );
    }
}

export default Move;