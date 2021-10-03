// //XML  HTTP REQUEST(xhr) (VIA API)
// // Step 01: create a XHR object
// var  request= new XMLHttpRequest();
// //Step 02:initatiate a connection(starting a connections)
// //true is used if your api doesnot want to affect the remaining  execution of your code

// request.open('GET','https://restcountries.com/v2/all',true);
// //step 03: sending a connection

// request.send();
// //step 04: once the data has been received successfully from server we need to extract te data  from JSON 

// //some conversion is needed here 
// request.onload=function(){
// var data=JSON.parse(request.response);
// console.log(data);

//XML  HTTP REQUEST(xhr) (VIA API)
// Step 01: create a XHR object
// var  request= new XMLHttpRequest();
// request.open('GET','https://restcountries.eu/rest/v2/all',true);
// request.send();
// request.onload=function(){
// var data=JSON.parse(request.response);
// for(i=0;i<data.length;i++){
//     console.log("name: "+data[i].name+" & "+"region: "+data[i].region+" & "+"sub_region: "+data[i].sub_region+" & "+" Popultion: "+data[i].popultion);
//     //console.log(data[i].capital);
// }
// }

// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };

// var compare = obj1==obj2;
// console.log(compare)

// var  request= new XMLHttpRequest();
// request.open('GET','https://restcountries.eu/rest/v2/all',true);
// request.send();
// request.onload=function(){
// var data=JSON.parse(request.response);
// for(i=0;i<data.length;i++){
//     try{

//     }catch(e){
 
//     }
var  request= new XMLHttpRequest();
 request.open('GET','https://restcountries.com/v3/all',true);
 request.send();
 request.onload = function(){
     var data = JSON.parse(request.response);
     for(i=0;i<data.length;i++){
         try{
             var name = data[i].name.common;
             var latlong = data[i].latlng
             if(latlong.length === 0) throw new Error("invalid coordinates for the country");
             weather(name,...latlong)
         }catch(e){
             console.log("Invalid data");
         }
     }
 }
function weather(name,lat,long){
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=18787aba7d082b71832f3840907e2761`
    var  request= new XMLHttpRequest();
 request.open('GET',url,true);
 request.send();
 request.onload = function(){
     var result = JSON.parse(request.response);
     console.log(`${name}:${result.main.temp}`);
}
}
