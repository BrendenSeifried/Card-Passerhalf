import { createContext, useContext } from 'react';

const GameContext = createContext();

const GameContextFunct = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUser());
  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
  };

  return <GameContext.Provider value={{ currentUser, setCurrentUser }}> {children} </GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('this is an error on GameContext.js');
  } return context;
};

export { GameContextFunct, useGameContext };