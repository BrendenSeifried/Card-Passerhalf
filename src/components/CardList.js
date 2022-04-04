import React from 'react';
import { useGameContext } from '../context/GameContext';
import Card from './Card';

export default function CardList() {
  const { deck, setSelectedCard, player, setFrom, selectedCard } = useGameContext();
  return (
    <div className="card-list">
      {deck.map((card) => (
        <Card
          key={card.suit + card.value}
          setSelectedCard={setSelectedCard}
          selectedCard={selectedCard}
          player={player}
          setFrom={setFrom}
          card={card}
        />
      ))}
    </div>
  );
}