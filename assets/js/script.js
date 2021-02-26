
// var cntryDateInput=$('#countryDate'); // var setting ---ON page load, connect searches and dates
// var stateDateInput=$('#browsers');
// var cntrySrchInput=$('#search-country');
// var stateSrchInput=$('#search-state');
// var initCntry='USA';
// var initState='NC';
// var currDateString=moment().format('MM/DD/yyyy');

// var test=stateDateInput.attr('innerText');
// stateDateInput.attr('innerText',currDateString); // var setting --date=current date, state North Carolina, country US
// // cntryDateInput(currDateString);
// // cntrySrchInput(initCntry);
// // stateSrchInput(initState);

// var stateDemogphcUrlBase='https://api.census.gov/data/2019/acs/acs1?get='; // api variable setting demographic
// var stateDemogphcUrlquerys='NAME,B02001_002E,B02001_003E,B02001_004E,B02001_005E';
// var stateDemogphcUrlEnd='&for=state:' + initState;
// var stateDemographcURLFinal=stateDemogphcUrlBase+stateDemogphcUrlquerys+stateDemogphcUrlEnd;

// pullDemogphc(stateDemographcURLFinal); //update Demographics

// // var stateCoronaUrl;


// //standard fetch code

// function pullDemogphc(url) {
//     fetch(url)
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
//   console.log(data)
// });
// }




//AND the corresponding data is populated



// WHEN I search for a state & date // THEN I get COVID & demographic facts pertaining to that day

//variable setting

// var submitBtn = $('#submit');
// var apiKey='16d579fb98020ce8daf7d5ea4ad1f4c3';

//page load display
  


//   //grab 1st url
//   getApi(nowWeatherUrl);

//   //set 
// submitBtn.click(function(){
//     event.preventDefault();
//     var printCity= cityInpt.val();
    
//     citiesSearched.push(printCity); //prep for send to local storage
//     localStorage.setItem('citiesSearched', JSON.stringify(citiesSearched)); //send to local storage
//     $("ul").append('<li>'+ printCity+ '</li>'); //show history on page
//   });
//     //--ul display of search history built
//     //Working API Call 1 - api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=16d579fb98020ce8daf7d5ea4ad1f4c3
//     //Working API Call 2 - api.openweathermap.org/data/2.5/forecast?q=Charlotte&appid=16d579fb98020ce8daf7d5ea4ad1f4c3
//     //Working API Call 3 - https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=16d579fb98020ce8daf7d5ea4ad1f4c3

// // WHEN I view current city weather// THEN I get city name, the date, an icon rep of weather conditions, temperature, humidity, wind speed, UV index
// // WHEN I view the UV indexTHEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// // WHEN I view future weather conditions for that city// THEN a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, humidity
// // WHEN I click on a city in the search history// THEN I am again presented with current and future conditions for that city
