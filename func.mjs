
import  Amadeus  from 'amadeus';

let Continent=['OC,EU,AF,AS,SA']



function ReplaceWithComma(Location){
    let NewLocation=Location.split('?').join(',')
    return NewLocation
}

async function SearchTicket(from,to,date,priceRange=50000){
    const amadeusClient = new Amadeus({
        clientId: 'NIGetG0uAkXWxEjtXCsBTF6R8BtmVCWN',
        clientSecret: 'mcnYRHQghqJEy90A',
      });
      try{
      const response= await amadeusClient.shopping.flightOffersSearch.get({
        originLocationCode: from,
        destinationLocationCode: to,
        departureDate: date,
        adults: '1',
        currencyCode: 'USD',
      })
      
     
        let AllTickets=response.data
        let returnArr=[];
        console.log(AllTickets)
        for(let i=0;i<AllTickets.length;i++){
          if(parseInt(AllTickets[i].price.total)<priceRange ){
            let ConnectingFlight=AllTickets[i].itineraries[0].segments.length;
            let SingleFlight=[];
            for(let j=0;j<ConnectingFlight;j++){
              
              let Airline=AllTickets[i].itineraries[0].segments[j].carrierCode;
              let FlightNumber=AllTickets[i].itineraries[0].segments[j].number;
              let DepatureTime=AllTickets[i].itineraries[0].segments[j].departure.at;
              let DepaturePlace=AllTickets[i].itineraries[0].segments[j].departure.iataCode;
              let ArrivalTime=AllTickets[i].itineraries[0].segments[j].arrival.at;
              let ArrivalPlace=AllTickets[i].itineraries[0].segments[j].arrival.iataCode;
              let BasePrice=AllTickets[i].price.base;
              let TotalPrice=AllTickets[i].price.total;
              let info={Airline:Airline,FlightNumber:FlightNumber,DepatureTime:DepatureTime,DepaturePlace:DepaturePlace,ArrivalTime:ArrivalTime,ArrivalPlace:ArrivalPlace,BasePrice:BasePrice,TotalPrice:TotalPrice}
              SingleFlight.push(info)
            }
            returnArr.push(SingleFlight);
          }
          
        }
        return returnArr;
        
      }catch(error){
        console.log(error);
      };
}







export{
    ReplaceWithComma,
    SearchTicket
}