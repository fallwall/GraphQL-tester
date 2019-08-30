import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const dice = 3;
const sides = 6;
const query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;

export const threeDices = () => {
fetch(`${BASE_URL}/graphql`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: { dice, sides },
  })
})
  .then(r => r.json())
  .then(data => console.log('dices', data.data.rollDice));

} 



  // Using $dice and $sides as variables in GraphQL means we don't have to worry about escaping on the client side.