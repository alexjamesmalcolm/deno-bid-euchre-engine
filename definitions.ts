type CardRank = "9" | "10" | "Jack" | "Queen" | "King" | "Ace";
export type CardSuit = "Clubs" | "Diamonds" | "Hearts" | "Spades";

export interface Card {
  rank: CardRank;
  suit: CardSuit;
}

export type PlayerPosition = "1" | "2" | "3" | "4";

export interface LobbyPlayer {
  name: string;
  position: PlayerPosition;
}

export interface Player extends LobbyPlayer {
  hand: Card[];
}

export interface Team {
  players: [Player, Player];
  points: number;
}

interface BasePhase {
  name: string;
  teams: [Team, Team];
  dealer: PlayerPosition;
}

export type BidChoice =
  | "Pass"
  | "3"
  | "4"
  | "5"
  | "6"
  | "Partner's Best Card"
  | "Going Alone";

export type Trump = CardSuit | "High" | "Low";

export interface Bid {
  playerPosition: PlayerPosition;
  choice: BidChoice;
}

export interface BiddingPhase extends BasePhase {
  name: "Bidding";
  bidPosition: PlayerPosition;
  bids: Bid[];
}

export interface TrumpPickingPhase extends BasePhase {
  name: "Picking Trump";
  winningBid: Bid;
}

export interface PartnersBestCardPickingPhase extends BasePhase {
  name: "Picking Partner's Best Card";
  trump: Trump;
  winningBid: Bid;
  partner: PlayerPosition;
}

export interface UpCard {
  owner: PlayerPosition;
  card: Card;
}

type Trick = UpCard[];
export type FinishedTrick = UpCard[];

export interface TrickTakingPhase extends BasePhase {
  name: "Trick-Taking";
  trump: Trump;
  winningBid: Bid;
  cardPosition: PlayerPosition;
  currentTrick: Trick;
  finishedTricks: FinishedTrick[];
  playerSittingOut?: PlayerPosition;
}

export interface GameOverPhase {
  name: "Game Over";
  winners: Team;
  losers: Team;
}

export type Phase =
  | BiddingPhase
  | TrumpPickingPhase
  | PartnersBestCardPickingPhase
  | TrickTakingPhase;

export type Option = BidChoice | Trump | Card;

type FullHand = [Card, Card, Card, Card, Card, Card];
export type FourHands = [FullHand, FullHand, FullHand, FullHand];
