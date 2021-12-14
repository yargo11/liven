/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from "react";

type Player = 'X' | 'O'

// let nextnextPlayer: nextPlayer = 'X';
// let currentBoard = Array(9).fill(null);

const useGameState = () => {
  const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null))
  const [stepNumber, setStepNumber] = useState(0);
  const [firstPlayer, setFirstPlayer] = useState<Player>('X')
  const [nextPlayer, setnextPlayer] = useState<Player>(firstPlayer);

  const computeMove = (nextPlayer: Player, squareId: any) => {
    if (nextPlayer === 'X') {
      currentBoard[squareId] = nextPlayer;
      setnextPlayer('O');
    } else {
      currentBoard[squareId] = nextPlayer;
      setnextPlayer('X');
    }
    setStepNumber((currentStepNumber) => currentStepNumber + 1);

  }

  const onResetClick = () => {
    setCurrentBoard(Array(9).fill(null));
    setStepNumber(0);
    if (firstPlayer === 'X') {
      setFirstPlayer('O');
    } else {
      setFirstPlayer('X');
    }
    setnextPlayer(firstPlayer)
  }

  return {
    nextPlayer,
    stepNumber,
    currentBoard,
    computeMove,
    onResetClick
  }
}

export default useGameState;
