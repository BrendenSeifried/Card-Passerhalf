import React from 'react';
import Card from './Card';

export default function CardList({ cards, player }) {
  // const { setSelectedCard, player, setFrom, selectedCard } = useGameContext();

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.suit + card.value}
          // setSelectedCard={setSelectedCard}
          // selectedCard={selectedCard}
          player={player}
          // setFrom={setFrom}
          card={card}
        />
      ))}
    </div>
  );
}