import React from 'react';
import CardList from './CardList';

export default function Player({
  player,
  setTo,
  hand,              ///hand only used here
  setFrom,
  setSelectedCard,
  selectedCard,
  to,
}) {

  // const { to, player, setTo, playerOneHand, playerTwoHand  }
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </div>
  );
}
