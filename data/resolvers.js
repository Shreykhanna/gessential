import mongoose from 'mongoose'
import {Friends} from '../data/dbconnectors'


//resolver map
export const resolvers = {
  Query: {
    getFriend: ({
      id
    }) => {
      return new Friend(id, friendDatabase[id]);
    },
  },
  Mutation: {
    createFriend: (root, {
      input
    }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        language: input.language,
        email: input.email
      });
      newFriend.id = newFriend._id;
      return new Promise((resolve, object) => {
        newFriend.save((err) => {
          if (err) reject(err)
          else resolve(newFriend)
        })
      })
    },
    updateFriend: (root, {
      input
    }) => {
      return new Promise((resolve, object) => {
        Friends.findOneAndUpdate({
          id: input.id
        }, input, {
          new: true
        }, (err, friend) => {
          Friends.save((err) => {
            if (err) reject(err)
            else resolve(newFriend)
          })
        })
      })
    },
    deleteFriend: (root, {
      input
    }) => {
      return new Promise((resolve, object) => {
        Friends.remove({
          id: input.id
        }, (err) => {
          if (err) reject(err)
          else resolve('Succesfully Deleted Friend')
        })
      })
    }
  },
}

export default resolvers;
