import { MouseEvent, useRef } from 'react';
import { Flex } from '@mantine/core';

import Card from '@/UI/elements/card/Card';

import './HighlightedCards.scss';

export default function HighlightedCards() {
  const highlightedCardsRef = useRef<HTMLDivElement | null>(null);

  const onMouseMoveHandler = (event: MouseEvent<HTMLDivElement>) => {
    const cards = highlightedCardsRef?.current?.getElementsByClassName(
      'card'
    )! as HTMLCollectionOf<HTMLElement>;
    for (const card of cards) {
      const rect = card.getBoundingClientRect(),
        x = event.clientX - rect.left,
        y = event.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };
  return (
    <Flex
      py="lg"
      wrap="wrap"
      gap="sm"
      ref={highlightedCardsRef}
      onMouseMove={onMouseMoveHandler}
      className="cards-wrapper"
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Flex>
  );
}
