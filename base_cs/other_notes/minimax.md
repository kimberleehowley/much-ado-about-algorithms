# Minimax Algorithm 
* A common algorithm for two-player AI games. 
* Mini: minimizing. 
* Max: maximizing. 
* One player tries to maximize their score (this is the human that starts by default assumption), and the other player (the computer that follows and interprets the data), tries to minimize the first player's possible future scores. 

## Pseudocode 
* Maximixing player makes a move 
* Function is called once player makes a move => 
* Minimizing player gets state of board 
* Calculates how to mimize first player's chances of a win (Which pairs would first player need?)
* Then picks one of those that first player would need. 