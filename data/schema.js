import {resolvers} from './resolvers';
import {makeExecutableSchema} from 'graphql-tools'

const typeDefs=`
type Friend{
  id:ID,
  firstName:String
  lastName:String
  gender:String
  language:String
  email : String!
}
type Aliens{
  id:ID
  firstName:String
  lastName:String
  planet:String
}
type Query{
    getFriend(id:ID) : Friend
   }
input FriendInput{
  id:ID,
  firstName:String!
  lastName:String
  gender:String
  language:String
  email : String
}
type Mutation{
  createFriend(input :FriendInput): Friend
  updateFriend(input:FriendInput) : Friend
  deleteFriend(input:ID) : String
}`;

const schema=makeExecutableSchema({typeDefs,resolvers});
export {schema};
