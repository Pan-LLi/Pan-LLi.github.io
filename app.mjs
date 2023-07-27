import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import {Toilet, ReportToilet, NewToilet, Airports} from './db.mjs';
import connectDb from './db.mjs';
import * as func from './func.mjs';
import fs from 'fs/promises';
import { setTimeout } from 'timers/promises';
import  Amadeus  from 'amadeus';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));


app.post('/search',async(req,res)=>{
    const Toiletss = await Toilet.find({Borough: req.body.Place,HandicappedAccessible:req.body.Handi});
    console.log(Toiletss)
    res.render('search',{toilets:Toiletss})
})




app.post('/ticket',async(req,res)=>{
    const From=req.body.From;
    const To=req.body.To;
    const Year=req.body.Year;
    const Month=req.body.Month;
    const Day=req.body.Day;
    const Date=Year+'-'+Month+'-'+Day;
    const Price=parseInt(req.body.priceRange);
    let result=await func.SearchTicket(From,To,Date,Price);
    
    res.render('result',{info:result})
})

let GlobalAirport=[]
app.get('/ticket',async(req,res)=>{
    

    try{
        let count=0;
        const AirportCount = await Airports.countDocuments();
       
        let Allairport=[];
        if(AirportCount==0){
        let airports= await fs.readFile('./dataset/Airport.csv','utf-8')
                 
                 let eachLine=airports.split('\n');
                 eachLine.map((EachDataArray,index)=>{
                   
                    
                     let EachLineData=EachDataArray.split(',');
                     const [  
                        ID,
                        ident,
                        type,
                        Oldname,
                        latitude_deg,
                        longitude_deg,
                        elevation_ft,
                        continent,
                        iso_country,
                        iso_region,
                        Oldmunicipality,
                        scheduled_service,
                        gps_code,
                        iata_code,
                        local_code,
                        home_link]=EachLineData
                        let name=func.ReplaceWithComma(Oldname);
                        let municipality=func.ReplaceWithComma(Oldmunicipality);

                     let NewAirport= new Airports({
                        ID: ID,
                        ident: ident,
                        type: type,
                        name: name,
                        latitude_deg: latitude_deg,
                        longitude_deg: longitude_deg,
                        elevation_ft: elevation_ft,
                        continent: continent,
                        iso_country: iso_country,
                        iso_region: iso_region,
                        municipality: municipality,
                        scheduled_service: scheduled_service,
                        gps_code: gps_code,
                        iata_code: iata_code,
                        local_code: local_code,
                        home_link: home_link
                        
                    })   
                
                    Allairport.push(NewAirport);
                })
                GlobalAirport=Allairport
              
               
            
        
        
                    await Airports.insertMany(GlobalAirport)
            }
                    const Airportss = await Airports.find({});
                    
                   
                    res.render('ticket',{Airportt:Airportss})
                    }
                    
                   
                    catch(err){
                        console.log(err)
                      }
                      
                      
})

app.get('/home',(req,res)=>{
    
    res.render('home')
})

app.get('/api/continent', async (req, res) => {
    try {
      const Continent = req.query.Con;
      const airports = await Airports.find({continent: Continent})
      res.json(airports);
        
      

      /*res.json(airports);*/
    } catch(error) {
      res.send({error})
    }
  });

app.post('/home',async(req,res)=>{
    const From=req.body.Origin;
    const To=req.body.Destination;
    const Year=req.body.Year;
    const Month=req.body.Month;
    const Day=req.body.Day;
    const Date=Year+'-'+Month+'-'+Day;
    const Price=3000
    let result=await func.SearchTicket(From,To,Date,Price);
    res.render('result',{info:result})
})


  app.get('/api/iata', async (req, res) => {
    try {
      const iataCode = req.query.iataCode;
      const airports = await Airports.find({iata_code: iataCode})
      res.json(airports);
        
      

      /*res.json(airports);*/
    } catch(error) {
      res.send({error})
    }
  });


  connectDb.then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log('Server is running...');
    });
  });

