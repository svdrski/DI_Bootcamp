import random


class Card():
    def __init__(self):
        self.suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        self.values = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']

    def createDeck(self):
        deck = []
        for i in self.suit:
            for x in  self.values:
                deck.append({i:x})
        return deck

class Deck():
    def __init__(self, deck):
        self.deck = deck

    def shuffle(self):
        if len(self.deck) == 52:
            random.shuffle(self.deck)
            return self.deck

    def deal(self):
        return self.deck.pop(random.randint(0, len(self.deck) -1))


cards = Card()


deck = Deck(cards.createDeck())

# print(deck.deck)
# print(deck.shuffle())
print(deck.deal())
print(deck.deal())

print(deck.deck)


