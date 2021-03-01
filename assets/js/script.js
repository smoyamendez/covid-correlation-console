var cntryDateEl = $('#ctryDate');
var ctryList = $('#ctry-list'); // var setting ---ON page load, populate state/country codes and dates, identify inputs
var statesList = $('#st-list');
var stateDateInput = $('#stateDate').val();
var ctryCode=$('#search-Country').val();
var stateSrchInput = $('#search-State').val();
// var datePickers = $('.dateSel')  // write validation code here - use modals instead of alerts and confirms to have validation messages
var stateDate = $('#stateDate').val();
var StatesArr = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
var CtryArr = ['ABW', 'AFG', 'AGO', 'ALB', 'AND', 'ARE', 'ARG', 'AUS', 'AUT', 'AZE', 'BDI', 'BEL', 'BEN', 'BFA', 'BGD', 'BGR', 'BHR', 'BHS', 'BIH', 'BLR', 'BLZ', 'BMU', 'BOL', 'BRA', 'BRB', 'BRN', 'BTN', 'BWA', 'CAF', 'CAN', 'CHE', 'CHL', 'CHN', 'CIV', 'CMR', 'COD', 'COG', 'COL', 'CPV', 'CRI', 'CUB', 'CYP', 'CZE', 'DEU', 'DJI', 'DMA', 'DNK', 'DOM', 'DZA', 'ECU', 'EGY', 'ERI', 'ESP', 'EST', 'ETH', 'FIN', 'FJI', 'FRA', 'FRO', 'GAB', 'GBR', 'GEO', 'GHA', 'GIN', 'GMB', 'GRC', 'GRL', 'GTM', 'GUM', 'GUY', 'HKG', 'HND', 'HRV', 'HTI', 'HUN', 'IDN', 'IND', 'IRL', 'IRN', 'IRQ', 'ISL', 'ISR', 'ITA', 'JAM', 'JOR', 'JPN', 'KAZ', 'KEN', 'KGZ', 'KHM', 'KIR', 'KOR', 'KWT', 'LAO', 'LBN', 'LBR', 'LBY', 'LKA', 'LSO', 'LTU', 'LUX', 'LVA', 'MAC', 'MAR', 'MCO', 'MDA', 'MDG', 'MEX', 'MLI', 'MLT', 'MMR', 'MNG', 'MOZ', 'MRT', 'MUS', 'MWI', 'MYS', 'NAM', 'NER', 'NGA', 'NIC', 'NLD', 'NOR', 'NPL', 'NZL', 'OMN', 'PAK', 'PAN', 'PER', 'PHL', 'PNG', 'POL', 'PRI', 'PRT', 'PRY', 'PSE', 'QAT', 'RKS', 'ROU', 'RUS', 'RWA', 'SAU', 'SDN', 'SEN', 'SGP', 'SLB', 'SLE', 'SLV', 'SMR', 'SOM', 'SRB', 'SSD', 'SUR', 'SVK', 'SVN', 'SWE', 'SWZ', 'SYC', 'SYR', 'TCD', 'TGO', 'THA', 'TJK', 'TKM', 'TLS', 'TON', 'TTO', 'TUN', 'TUR', 'TWN', 'TZA', 'UGA', 'UKR', 'URY', 'USA', 'UZB', 'VEN', 'VIR', 'VNM', 'VUT', 'YEM', 'ZAF', 'ZMB', 'ZWE'];
var confirmedCases = $('#st-f-1'); var totalDeathsEl= $('#st-f-2'); var currentlyHospitalized = $('#st-f-3'); var currentlyICU = $('#st-f-4'); 
var ctryConfirmedCases = $('#ctry-f-3'); var ctryDeathsEl= $('#ctry-f-2'); var ctryStringency = $('#ctry-f-4');
var usatotalDeathsEl=$('#ctry-f-6');  // Start send to HTML Fact List
var usaConfirmedCases=$('#ctry-f-5'); 
var usactryStringency=$('#ctry-f-7'); 

cntryDateEl.attr('max',moment().subtract(2,"days").format('YYYY-MM-DD'));
cntryDateEl.attr('min',moment("2020-02-01").format('YYYY-MM-DD'));

//build array function
function populateList(array, list) {
  $.each(array, function (i) { list.append($("<option>").attr('value', array[i])); })
};

//format date funtion

function formatDate(dateArg) {
  day = dateArg.getDate();
  month = dateArg.getMonth() + 1;
  year = dateArg.getFullYear();
  alert(day, month, year);
};

var todayDate = formatDate(new Date());
var ctryDate = formatDate(new Date("2020-05-01"));


// $('#submit').on('click', function(){
//   day = $('#date-input').getDate();
//   month = $('#date-input').getMonth() + 1;
//   year = $('#date-input').getFullYear();
//   alert(day, month, year);
// });


//fill lists of states and countries
populateList(StatesArr, statesList);
populateList(CtryArr, ctryList);
var stateDemogphcUrlBase = 'https://api.census.gov/data/2019/acs/acs1?get='; // api variable setting demographic
var stateDemogphcUrlquerys = 'NAME,B02001_002E,B02001_003E,B02001_004E,B02001_005E,';
var stateDemogphcUrlEnd = '&for=state:*';
var stateDemographcURLFinal = 'https://api.census.gov/data/2019/acs/acs1?get=NAME,B02001_002E,B02001_003E,B02001_004E,B02001_005E&for=state:17';   //stateDemogphcUrlBase+stateDemogphcUrlquerys+stateDemogphcUrlEnd;
function populateList(array, list) {
  $.each(array, function (i) { list.append($("<option>").attr('value', array[i])); })
};

function validateCtry() {
  var cntrySrchInput=$('#search-Country').val();
  if (!cntrySrchInput) {    
    $('#alert-modal').css(display = 'block');                                                                            
    // return false;
  }
}

function validateDate(myDate) {
  if (ctryDate > (todayDate - 2) || !ctryDate || myDate < ('2020-02-01')) {    // test if the date is empty, is greater than 2 days prior to today,  test if date is before 2/1/2020
    $('#alert-modal').css(display = 'block');                                                                            
    // return false;
  }
}

// 1. Find function that's going to pull date and country name from the form
// 2. Condition statement to check if cntryDateInput or cnrtySearchInput is not filled out, then trigger modal using $('#alert-modal').style.display = 'block'
// if (!cnrtyDateInput || !cntrySearchInput) {
//   $('#alert-modal').css("display: block")
// }
// 3. Place before the fetch call



//update Demographics
//["NAME", "B02001_002E", "B02001_003E", "B02001_004E", "B02001_005E", "state"]
// // var stateCoronaUrl;
//determine today's date and use in validations
// var validateDate(dateValue) = ()stateDateInput
// Demographics fetch code
function pullDemogphc(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    });
}

// Oxford fetch code
      //https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/2020-03-01/2020-03-15
var oxfordUrlStart = 'https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/';
var oxfordFinalURL = oxfordUrlStart + ctryDate + '/' + ctryDate;
// var oxfordFinalURL='https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/2020-03-01/2020-03-01'

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
function saveCountry() {
  var submittedCountry = $('#search-Country').val();
  var recentCountries = JSON.parse(localStorage.getItem("recentCountries")) || [];
  if (recentCountries.length === 0) {
    localStorage.setItem("recentCountries", JSON.stringify([submittedCountry]));
  } else {
    recentCountries.push(submittedCountry);
    localStorage.setItem("recentCountries", JSON.stringify(recentCountries));
  };
  //  add to screen display
}
function pullOxford(url) {
  var  cntryDate= cntryDateEl.val();
  validateDate(cntryDate);
  validateCtry();
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var cntryDate = $('#ctryDate').val();
      var dateData = ((data['data'])[cntryDate])[$('#search-Country').val()];
      var usaData =  ((data['data'])[cntryDate])['USA'];
      var confirmedOx = dateData.confirmed;  // Set Variables
      var deathsOx = dateData.deaths;
      var stringencyOx = dateData.stringency;
      ctryConfirmedCases.text('Confirmed Cases: ' + confirmedOx);  // Start send to HTML Fact List
      ctryDeathsEl.text('Deaths this day: ' + deathsOx);
      ctryStringency.text('Stringency Score: ' + stringencyOx);
      var confirmedUSAOx = usaData.confirmed;  // Set Variables
      var deathsUSAOx = usaData.deaths; 
      var stringencyUSAOx = usaData.stringency;
      usaConfirmedCases.text('Confirmed Cases: ' + confirmedUSAOx);  // Start send to HTML Fact List
      usatotalDeathsEl.text('Deaths this day: ' + deathsUSAOx);
      usactryStringency.text('Stringency Score: ' + stringencyUSAOx);
    });
    saveCountry();
}
// *******************************ARE THERE WAYS TO SIMPLY THE ABOVE CODE*********************************
// const found = firstFind.find(element => element.key = ctryCode);
// var result = $.grep(myArray, function(e){ return e.id == id; });
// Covid Fetch Code
var covidApiStart = 'https://api.covidtracking.com/v2/states/'; //Assemble Variables, Full URL https://api.covidtracking.com/v2/states/ca/2021-01-10/simple.json
var covidApiState = 'ca';
var covidApiDate = '2020-05-10';
var covidApiEnd = 'simple.json';
var covidApiFinal = covidApiStart + covidApiState + '/' + covidApiDate + '/' + covidApiEnd;
function pullCovid(url) {      // BEGIN FETCH
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
      pullDemogphc(stateDemographcURLFinal);
    });
};



$('#BtnCountry').click(function(event) {
  var ctryDate = $('#ctryDate').val();
  var oxfordUrlStart = 'https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/';
  var oxfordFinalURL = oxfordUrlStart + ctryDate + '/' + ctryDate;
  event.preventDefault();
  pullOxford(oxfordFinalURL);
});

$('#BtnState').click(function(event) {
  event.preventDefault();
  pullCovid(covidApiFinal);
});



/**********Save country and states in local storage****************/



   /* function recordScores(){
      initials=playerInitials.value;
      score=finalScore;
      myscore = {
          initials: [initials],
          score: [score],
      }
      saveScores();
  }
  
  // function to add new row.
  function addLi() {
      savedScores = JSON.parse(localStorage.getItem("savedScores"));
      for (a=0; a < savedScores.initials.length; a++) {
          myInitials=savedScores.initials[a];
          myScore=savedScores.score[a];
          liStamp=(myInitials + ": " + myScore)
          var li = document.createElement('li');
          li.appendChild(document.createTextNode(liStamp));
          scoreList.appendChild(li);
      }
  }*/
  
