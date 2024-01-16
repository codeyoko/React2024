
import { useEffect, useState } from 'react'
import './style.css'

function Square({value, onClick}){

    return <button onClick={onClick} className="square">{value}</button>
}

export default function TicTacToe(){

    const [squares, setSquares] = useState(Array(16).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');

    
    function handleOnClick(getCurrentSquare) {
        let copySquares = [...squares];
        if( getWinner(copySquares) ||  copySquares[getCurrentSquare]) return; // ngan khong cho doi

        copySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
        setIsXTurn(!isXTurn);
        setSquares(copySquares);
    }
    //winner handle

    function getWinner(squares){
        // 0 1 2 3
        // 4 5 6 7
        // 8 9 10 11
        // 12 13 14 15
        const winningPatterns = [
            [0,1,2,3],
            [4,5,6, 7],
            [8,9,10,11],
            [12,13,14,15],
            [3,7,11,15],
            [2,6,10,14],
            [1,5,9,13],
            [0,4,8,12],
            [3,6,9,12],
            [0,5,10,15]
        ];

        for(let i = 0; i < winningPatterns.length; i++) {
            const [x,y,z,a] = winningPatterns[i];

            if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z] && squares[x] === squares[a]){

                return squares[x];
            }
        }

        return null;
    }

    useEffect(() => {
        if(!getWinner(squares) && squares.every((item) => item !== '')){
            setStatus(`This is a draw! Please restart the game.`);
        }else if(getWinner(squares)){
            setStatus(`Winner is ${getWinner(squares)}. Please restart the game.`);
            
        }else {
            setStatus(`Next player is ${isXTurn ? 'X' : 'O' }`);
        }
    },[squares, isXTurn]);

    //restart
    function handleRestart(){
        setIsXTurn(true);
        setSquares(Array(16).fill(''));
    }
    return (

        <div className="tic-tac-toe">
            <div className="row">
                <Square value={squares[0]}  onClick={() => handleOnClick(0)} />
                <Square value={squares[1]}  onClick={() => handleOnClick(1)} />
                <Square value={squares[2]}  onClick={() => handleOnClick(2)} />
                <Square value={squares[3]}  onClick={() => handleOnClick(3)} />
            </div>
            <div className="row">
                <Square value={squares[4]}  onClick={() => handleOnClick(4)} />
                <Square value={squares[5]}  onClick={() => handleOnClick(5)} />
                <Square value={squares[6]}  onClick={() => handleOnClick(6)} />
                <Square value={squares[7]}  onClick={() => handleOnClick(7)} />
            </div>
            <div className="row">
                <Square value={squares[8]}   onClick={() => handleOnClick(8)} />
                <Square value={squares[9]}   onClick={() => handleOnClick(9)} />
                <Square value={squares[10]}  onClick={() => handleOnClick(10)} />
                <Square value={squares[11]}  onClick={() => handleOnClick(11)} />
            </div>
            <div className="row">
                <Square value={squares[12]}  onClick={() => handleOnClick(12)} />
                <Square value={squares[13]}  onClick={() => handleOnClick(13)} />
                <Square value={squares[14]}  onClick={() => handleOnClick(14)} />
                <Square value={squares[15]}  onClick={() => handleOnClick(15)} />
            </div>
            <h1>{status}</h1>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}