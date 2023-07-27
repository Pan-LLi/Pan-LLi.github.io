import mongoose from 'mongoose'
//import slug from 'mongoose-slug-updater'

//mongoose.plugin(slug)
// is the environment variable, NODE_ENV, set to PRODUCTION? 
import fs from 'fs';
import path from 'path';
import url from 'url';
import {MongoClient} from 'mongodb'
import {ServerApiVersion} from 'mongodb'


const uri = "mongodb+srv://pl1989:PsXVbdErnfIsKGxs@airport.pmtnzja.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version





const connectDb = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("MongoDB Connected…")
  })
  .catch(err => console.log(err))



const MySchema = new mongoose.Schema({
  Name: String,
  Location: String,
  OpenYearRound: String,
  HandicappedAccessible: String,
  Borough: String,
  Comments: String
})

const ReportSchema = new mongoose.Schema({
  ToiletName: String,
  ProblemCategory: String,
  Detail:String
})

const ContributeShcema = new mongoose.Schema({
  NewToiletName: String,
  NewToiletAddress: String,
  NewHandiCapped: String,
  Comment:String
})

const AirportSchema = new mongoose.Schema({
  ID: Number,
  ident: String,
  type: String,
  name: String,
  latitude_deg: String,
  longitude_deg: String,
  elevation_ft: String,
  continent: String,
  iso_country: String,
  iso_region: String,
  municipality: String,
  scheduled_service: String,
  gps_code: String,
  iata_code: String,
  local_code: String,
  home_link: String
})

const Toilet=mongoose.model('Toilet',MySchema)
const ReportToilet=mongoose.model('ReportToilet',ReportSchema)
const NewToilet=mongoose.model('NewToilet',ContributeShcema)
const Airports=mongoose.model('Airports',AirportSchema)


export {Toilet, ReportToilet,NewToilet, Airports}
export default connectDb;