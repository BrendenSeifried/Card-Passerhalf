import { createContext, useContext, useState } from 'react';
import App from '../App';

const GameContext = createContext();

const GameContextFunct = ({ children }) => {
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);

  };

  return <GameContext.Provider value={{ playerOneHand, playerTwoHand, playerThreeHand }}> {children} </GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);

};

export { GameContextFunct, useGameContext };