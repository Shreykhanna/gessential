import mongoose from 'mongoose'
import Sequelize from 'sequelize'
import _ from 'lodash'
import casual from 'casual'

//Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends')

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
})
const Friends=mongoose.model("friends",friendSchema);

//SQL
const sequelize=new Sequelize('database',null,null,{
  dialect:'sqlite',
  storage:'./aliens.sqlite',
});

const Aliens=sequelize.define('aliens',{
  firstName:{type:Sequelize.STRING},
  lastName:{type:Sequelize.STRING},
  planet:{type:Sequelize.STRING},
});

Aliens.sync({force:true}).then(()=>{
    _.times(10,(i)=>{
      Aliens.create({
        firstName:casual.firstName,
        lastName:casual.lastName,
        planet:casual.word,
      })
    })
  })

export {Friends,Aliens};
