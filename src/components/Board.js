import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            turn: true,
            winner: null,
        };
    }

    getMark() {
        const mark = this.state.turn ? 'O' : 'X';
        return mark;
    }

    judgmentGame(squares) {
        const winGame = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        let winner = null;
        for (let i = 0; i < winGame.length ; i++) {
            let [a, b, c] = winGame[i];
            if (squares[a] === squares[b] && squares[b] === squares[c]) {
                winner = squares[a];
                break;
            }
        }
        return winner;
    }

    handleClick(idx) {
        if (winner) {
            return;
        }
        const squares = this.state.squares.slice();
        squares[idx] = this.getMark();
        const winner = this.judgmentGame(squares);
        this.setState({
            squares: squares,
            turn: !this.state.turn,
            winner: winner
        });
    }

    renderSquare(i) {
        return (<Square
            value={this.state.squares[i]}
            onClick={ () => this.handleClick(i)}
            />
        );
    }

    showMessage() {
        if (this.state.winner) {
            return 'WINNER IS ' + this.state.winner;
        } else {
            return 'NEXT PLAYER IS ' + this.getMark();
        }
    }

    render() {
        const status = this.showMessage();

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;