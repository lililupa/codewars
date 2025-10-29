// DESCRIPTION:

// Terminal game move function

// In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move(position, roll) {
  const newPosition = position + roll * 2;
  if (roll > 0 && roll < 7) {
    return newPosition;
  } else {
    return "A number should be from 1 to 6";
  }
}
console.log(move(3, 7));
