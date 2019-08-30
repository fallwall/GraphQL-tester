import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

const BASE_URL = 'http://localhost:4000';

const client = new ApolloClient({
  uri: `${BASE_URL}/graphql`,
});

client
  .query({
    query: gql
      {
        hello
      }
    
  })
  .then(result => console.log(result));

// var author = 'andy';
// var content = 'hope is a good thing';
// var query = `mutation CreateMessage($input: MessageInput) {
//   createMessage(input: $input) {
//     id
//   }
// }`;


// export const bookStuff = () => {
//   return fetch(`${BASE_URL}/graphql`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     },
//     body: JSON.stringify({
//       query,
//       variables: {
//         input: {
//           author,
//           content,
//         }
//       }
//     })
//   })
//     .then(res => res.json())
//     .then(console.log)
//     .catch(console.error);
 
// }

