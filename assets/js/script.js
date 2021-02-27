var ctryList = $('#ctry-list'); // var setting ---ON page load, populate state/country codes and dates, identify inputs
var statesList = $('#st-list');
var cntryDateInput = $('#ctryDate');
var stateDateInput = $('#stateDate');
var cntrySrchInput = $('#search-Country');
var stateSrchInput = $('#search-State');
var ctryDate = cntryDateInput.attr('value');
var stateDate = stateDateInput.attr('value');
var StatesArr = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
var CtryArr = ['ABW', 'AFG', 'AGO', 'ALB', 'AND', 'ARE', 'ARG', 'AUS', 'AUT', 'AZE', 'BDI', 'BEL', 'BEN', 'BFA', 'BGD', 'BGR', 'BHR', 'BHS', 'BIH', 'BLR', 'BLZ', 'BMU', 'BOL', 'BRA', 'BRB', 'BRN', 'BTN', 'BWA', 'CAF', 'CAN', 'CHE', 'CHL', 'CHN', 'CIV', 'CMR', 'COD', 'COG', 'COL', 'CPV', 'CRI', 'CUB', 'CYP', 'CZE', 'DEU', 'DJI', 'DMA', 'DNK', 'DOM', 'DZA', 'ECU', 'EGY', 'ERI', 'ESP', 'EST', 'ETH', 'FIN', 'FJI', 'FRA', 'FRO', 'GAB', 'GBR', 'GEO', 'GHA', 'GIN', 'GMB', 'GRC', 'GRL', 'GTM', 'GUM', 'GUY', 'HKG', 'HND', 'HRV', 'HTI', 'HUN', 'IDN', 'IND', 'IRL', 'IRN', 'IRQ', 'ISL', 'ISR', 'ITA', 'JAM', 'JOR', 'JPN', 'KAZ', 'KEN', 'KGZ', 'KHM', 'KIR', 'KOR', 'KWT', 'LAO', 'LBN', 'LBR', 'LBY', 'LKA', 'LSO', 'LTU', 'LUX', 'LVA', 'MAC', 'MAR', 'MCO', 'MDA', 'MDG', 'MEX', 'MLI', 'MLT', 'MMR', 'MNG', 'MOZ', 'MRT', 'MUS', 'MWI', 'MYS', 'NAM', 'NER', 'NGA', 'NIC', 'NLD', 'NOR', 'NPL', 'NZL', 'OMN', 'PAK', 'PAN', 'PER', 'PHL', 'PNG', 'POL', 'PRI', 'PRT', 'PRY', 'PSE', 'QAT', 'RKS', 'ROU', 'RUS', 'RWA', 'SAU', 'SDN', 'SEN', 'SGP', 'SLB', 'SLE', 'SLV', 'SMR', 'SOM', 'SRB', 'SSD', 'SUR', 'SVK', 'SVN', 'SWE', 'SWZ', 'SYC', 'SYR', 'TCD', 'TGO', 'THA', 'TJK', 'TKM', 'TLS', 'TON', 'TTO', 'TUN', 'TUR', 'TWN', 'TZA', 'UGA', 'UKR', 'URY', 'USA', 'UZB', 'VEN', 'VIR', 'VNM', 'VUT', 'YEM', 'ZAF', 'ZMB', 'ZWE'];
var confirmedCases = $('#st-f-1'); var totalDeathsEl= $('#st-f-2'); var currentlyHospitalized = $('#st-f-3'); var currentlyICU = $('#st-f-4'); 
//build array function
function populateList(array, list) {
  $.each(array, function (i) { list.append($("<option>").attr('value', array[i])); })
};
//fill lists of states and countries
populateList(StatesArr, statesList);
populateList(CtryArr, ctryList);
var stateDemogphcUrlBase = 'https://api.census.gov/data/2019/acs/acs1?get='; // api variable setting demographic
var stateDemogphcUrlquerys = 'NAME,B02001_002E,B02001_003E,B02001_004E,B02001_005E';
var stateDemogphcUrlEnd = '&for=state:*';
var stateDemographcURLFinal = 'https://api.census.gov/data/2019/acs/acs1?get=NAME,B02001_002E,B02001_003E,B02001_004E,B02001_005E&for=state:17';   //stateDemogphcUrlBase+stateDemogphcUrlquerys+stateDemogphcUrlEnd;
function populateList(array, list) {
  $.each(array, function (i) { list.append($("<option>").attr('value', array[i])); })
};
pullDemogphc(stateDemographcURLFinal); //update Demographics
//["NAME", "B02001_002E", "B02001_003E", "B02001_004E", "B02001_005E", "state"]
// // var stateCoronaUrl;

//add listeners
$('#BtnState').click(pullDemogphc(stateDemographcURLFinal));
// $('#BtnCountry').click(pullOxford(oxfordFinalURL));

// Demographics fetch code
function pullDemogphc(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data)
    });
}
// Oxford fetch code
//https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/2020-03-01/2020-03-15
var oxfordDate = "2020-03-01";
var oxfordUrlStart = 'https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/';
var oxfordFinalURL = oxfordUrlStart + oxfordDate + '/' + "2020-03-02";
var ctryCode = 'AUS';
var ctryIndex;

function keepMatch(array, ctryCoding) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === ctryCoding) {
      ctryIndex = i;
      return;
    }
  }
};

keepMatch(CtryArr, ctryCode);



// pullOxford(oxfordFinalURL);

// function pullOxford(url) {
//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       //console.log(data); // sample delete
//       var firstFind = data['data'];
//       //console.log(firstFind);
//       // const mySelf= Object.keys(firstFind)[0];
//       const mySelfValues = firstFind[Object.keys(firstFind)[0]];
//       const MyDayObj = (mySelfValues[ctryCode]);
//       var confirmedOx = MyDayObj['confirmed'];
//       var deathsOx = MyDayObj['deaths'];
//       var stringencyOx = MyDayObj['stringency'];
//       //console.log(confirmedOx);
//       //console.log(deathsOx);
//       //console.log(stringencyOx);
//     })}


// *******************************ARE THERE WAYS TO SIMPLY THE ABOVE CODE*********************************
// const found = firstFind.find(element => element.key = ctryCode);
// var result = $.grep(myArray, function(e){ return e.id == id; });
// Covid fetch code
// // Oxford fetch code


// Covid fetch code

var covidApiStart= 'https://api.covidtracking.com/v2/states/';
var covidApiState= 'ca';
var covidApiDate= '2020-05-10';
var covidApiEnd= 'simple.json';
var covidApiFinal= covidApiStart + covidApiState + '/' + covidApiDate + '/' + covidApiEnd;

//https://api.covidtracking.com/v1/states/ca/20200501.json

  function pullCovid(url) {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(data);

        var currentICU = ((((data.data).outcomes).hospitalized).in_icu).currently; // Start set variables from COVID API data
        var casesConfirmed = ((data.data).cases).confirmed;
        var totalDeaths = (((data.data).outcomes).death).total;
        var currentHospitalized = (((data.data).outcomes).hospitalized).currently;

        confirmedCases.text('Confimed Cases: ' + casesConfirmed); // Start send to HTML Fact List
        totalDeathsEl.text('Total Deaths: ' + totalDeaths);
        currentlyHospitalized.text('Currently Hospitalized: ' + currentHospitalized);
        currentlyICU.text('Currently in ICU: ' + currentICU); 
      });
  }



  pullCovid(covidApiFinal);
