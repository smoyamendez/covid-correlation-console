var cntryDateEl = $('#ctryDate');// var setting ---ON page load, populate state/country codes and dates, identify inputs
var ctryList = $('#ctry-list'); 
var statesList = $('#st-list');
var stateDateInputEl = $('#stateDate');
var ctryCode=$('#search-Country').val();
var stateSrchInput = $('#search-State');
var statesArr = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
var ctryArr = ['ABW', 'AFG', 'AGO', 'ALB', 'AND', 'ARE', 'ARG', 'AUS', 'AUT', 'AZE', 'BDI', 'BEL', 'BEN', 'BFA', 'BGD', 'BGR', 'BHR', 'BHS', 'BIH', 'BLR', 'BLZ', 'BMU', 'BOL', 'BRA', 'BRB', 'BRN', 'BTN', 'BWA', 'CAF', 'CAN', 'CHE', 'CHL', 'CHN', 'CIV', 'CMR', 'COD', 'COG', 'COL', 'CPV', 'CRI', 'CUB', 'CYP', 'CZE', 'DEU', 'DJI', 'DMA', 'DNK', 'DOM', 'DZA', 'ECU', 'EGY', 'ERI', 'ESP', 'EST', 'ETH', 'FIN', 'FJI', 'FRA', 'FRO', 'GAB', 'GBR', 'GEO', 'GHA', 'GIN', 'GMB', 'GRC', 'GRL', 'GTM', 'GUM', 'GUY', 'HKG', 'HND', 'HRV', 'HTI', 'HUN', 'IDN', 'IND', 'IRL', 'IRN', 'IRQ', 'ISL', 'ISR', 'ITA', 'JAM', 'JOR', 'JPN', 'KAZ', 'KEN', 'KGZ', 'KHM', 'KIR', 'KOR', 'KWT', 'LAO', 'LBN', 'LBR', 'LBY', 'LKA', 'LSO', 'LTU', 'LUX', 'LVA', 'MAC', 'MAR', 'MCO', 'MDA', 'MDG', 'MEX', 'MLI', 'MLT', 'MMR', 'MNG', 'MOZ', 'MRT', 'MUS', 'MWI', 'MYS', 'NAM', 'NER', 'NGA', 'NIC', 'NLD', 'NOR', 'NPL', 'NZL', 'OMN', 'PAK', 'PAN', 'PER', 'PHL', 'PNG', 'POL', 'PRI', 'PRT', 'PRY', 'PSE', 'QAT', 'RKS', 'ROU', 'RUS', 'RWA', 'SAU', 'SDN', 'SEN', 'SGP', 'SLB', 'SLE', 'SLV', 'SMR', 'SOM', 'SRB', 'SSD', 'SUR', 'SVK', 'SVN', 'SWE', 'SWZ', 'SYC', 'SYR', 'TCD', 'TGO', 'THA', 'TJK', 'TKM', 'TLS', 'TON', 'TTO', 'TUN', 'TUR', 'TWN', 'TZA', 'UGA', 'UKR', 'URY', 'USA', 'UZB', 'VEN', 'VIR', 'VNM', 'VUT', 'YEM', 'ZAF', 'ZMB', 'ZWE'];
var stateNumberCodes = ['01','02','04','05','06','08','09','10','11','12','13','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','44','45','46','47','48','49','50','51','53','54','55','56'];
var stateAbbr = $('#st-f-1'); var totalDeathsEl= $('#st-f-2'); var confirmedCases=$('#st-f-3'); var currentlyHospitalized = $('#st-f-4'); var currentlyICU = $('#st-f-5'); 
var totMaleEstEl = $('#st-f-7'); var totFemaleEstEl= $('#st-f-8'); var totPopEl = $('#st-f-6'); var asianEl = $('#st-f-9'); var caucasianEl = $('#st-f-10'); var africanAmericanEl = $('#st-f-11');
var ctryConfirmedCases = $('#ctry-f-3'); var ctryDeathsEl= $('#ctry-f-2'); var ctryStringency = $('#ctry-f-4');
var usaConfirmedCases = $('#ctry-f-7'); var usatotalDeathsEl= $('#ctry-f-6'); 
var recentCountries = JSON.parse(localStorage.getItem("recentCountries")) || [];
var recentStates = JSON.parse(localStorage.getItem('recentStates')) || [];

//load recently pulled countries and states, as available, at the bottom of the page
function loadRecentPulls(){
  $("#rec-ctry-1").html(recentCountries[0].toUpperCase());
  $("#rec-ctry-2").html(recentCountries[1].toUpperCase());
  $("#rec-ctry-3").html(recentCountries[2].toUpperCase());
  $("#rec-st-1").html(recentStates[0].toUpperCase());
  $("#rec-st-2").html(recentStates[1].toUpperCase());
  $("#rec-st-3").html(recentStates[2].toUpperCase());
}

//('li.select2-selection__choice').find('font').html('HELLO WORLD');
$( document ).ready(function() {
recentCountries = JSON.parse(localStorage.getItem("recentCountries")) || [];
recentStates = JSON.parse(localStorage.getItem('recentStates')) || [];
loadRecentPulls();
});

 //set date limiters for pulls
cntryDateEl.attr('max',moment().subtract(2,"days").format('YYYY-MM-DD'));
cntryDateEl.attr('min',moment("2020-02-01").format('YYYY-MM-DD'));

stateDateInputEl.attr('max',moment().subtract(2,"days").format('YYYY-MM-DD'));
stateDateInputEl.attr('min',moment("2020-02-01").format('YYYY-MM-DD'));

//build array function
function populateList(array, list) {
  $.each(array, function (i) { list.append($("<option>").attr('value', array[i])); })
};

//fill lists of states and countries
populateList(statesArr, statesList);
populateList(ctryArr, ctryList);

function populateList(array, list) {
  $.each(array, function (i) { list.append($("<option>").attr('value', array[i])); })
};

//validate if pulls empty
function validateCtry() {
  var cntrySrchInput=$('#search-Country').val();
  if (!cntrySrchInput) {    
    $('#alert-modal').css("display", "block");                                                                            
  }
}

function validateState() {
  var stateSrchInput=$('#search-State').val();
  if (!stateSrchInput) {    
    $('#alert-modal').css("display", "block");                                                                            
  }
}

function validateStateDate() {
  var stateDateInput = stateDateInputEl.val();
  if (!stateDateInput) {    // test if the date is empty, 
    $('#alert-modal').css("display", "block");                                                                            
  }
}

function validateCtryDate() {
var countryDateInput= cntryDateEl.val();
  if (!countryDateInput) {    // test if the date is empty, 
    $('#alert-modal').css("display", "block");                                                                            
  }
}

// Demographics fetch code***********************************************************************************
function pullDemogphc(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var totMaleEst = data[1][5];
      var totFemaleEst = data[1][6];
      var totPop = data[1][7];
      var caucasian = data[1][8];
      var africanAmerican = data[1][9];
      var asian = data[1][4];
      asianEl.text('Asian: ' + asian)
      totMaleEstEl.text('Total Male Estimate: ' + totMaleEst);
      totFemaleEstEl.text('Total Female Estimate: ' + totFemaleEst);
      totPopEl.text('Total Population: ' + totPop);
      caucasianEl.text('Caucasian: ' + caucasian);
      africanAmericanEl.text('African American: ' + africanAmerican);
    });
}

 // save to local storage after pull
function saveCountry() {
  var submittedCountry = $('#search-Country').val();
    recentCountries.push(submittedCountry);
    if (recentCountries.length > 3) {recentCountries.splice(0,1)};
    localStorage.setItem("recentCountries", JSON.stringify(recentCountries));
};

function saveState() {
  var submittedState = $('#search-State').val();
    recentStates.push(submittedState);
    if (recentStates.length > 3) {recentStates.splice(0,1)};
    localStorage.setItem('recentStates', JSON.stringify(recentStates));
    
};

// Oxford fetch code ********************************************************************************

var oxfordUrlStart = 'https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/';
var oxfordFinalURL = oxfordUrlStart + ctryDate + '/' + ctryDate;

function pullOxford(url) {   //actual fetch
  validateCtryDate();
  validateCtry();
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var cntryDate = $('#ctryDate').val();
      var dateData = ((data['data'])[cntryDate])[$('#search-Country').val()];
      var usaData =  ((data['data'])[cntryDate])['USA'];
      var confirmedOx = dateData.confirmed;  
      var deathsOx = dateData.deaths;
      var stringencyOx = dateData.stringency;
      ctryConfirmedCases.text('Confirmed Cases: ' + confirmedOx);  // Start send to HTML Fact List
      ctryDeathsEl.text('Deaths to Date: ' + deathsOx);
      ctryStringency.text('Stringency Score: ' + stringencyOx);
      var confirmedUSAOx = usaData.confirmed;  
      var deathsUSAOx = usaData.deaths; 
      var stringencyUSAOx = usaData.stringency;
      var ctryCode=$('#search-Country').val().toUpperCase();
      $("#ctry-f-5").text('USA');
      $("#ctry-f-1").text(ctryCode);
      usaConfirmedCases.text('Confirmed Cases: ' + confirmedUSAOx);  // Start send to HTML Fact List
      usatotalDeathsEl.text('Deaths to Date: ' + deathsUSAOx);
      $('#ctry-f-8').text('Stringency Score: ' + stringencyUSAOx);
    });
    saveCountry();
}

function keepMatch(array, stateCoding) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stateCoding) {
      stateIdnex = i;
      return;
    }
  }
};

// COVID FETCH***************************************************************************************************
function pullCovid(url) {       
  validateStateDate(stateDate);
  validateState();
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var covidApiState=('State Name: ' + stateSrchInput.val().toUpperCase());
      var currentICU = ((((data.data).outcomes).hospitalized).in_icu).currently; // Start set variables from COVID API data
      var casesConfirmed = ((data.data).cases).confirmed;
      var totalDeaths = (((data.data).outcomes).death).total;
      var currentHospitalized = (((data.data).outcomes).hospitalized).currently;
      stateAbbr.text(covidApiState.toUpperCase());
      totalDeathsEl.text('Total Deaths: ' + totalDeaths);
      currentlyHospitalized.text('Currently Hospitalized: ' + currentHospitalized);
      currentlyICU.text('Currently in ICU: ' + currentICU);
      confirmedCases.text('Positive Cases: ' + casesConfirmed);
    });
};

//set listeners
$('#BtnCountry').click(function(event) {
  var ctryDate = $('#ctryDate').val();
  var oxfordUrlStart = 'https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/';
  var oxfordFinalURL = oxfordUrlStart + ctryDate + '/' + ctryDate;
  event.preventDefault();
  pullOxford(oxfordFinalURL);
  loadRecentPulls();
});

var covidApiStart = 'https://api.covidtracking.com/v2/states/'; //Assemble Variables, Full URL https://api.covidtracking.com/v2/states/ca/2021-01-10/simple.json
var covidApiState = '';
var covidApiDate = '';
var covidApiEnd = 'simple.json';

var stateCode = stateSrchInput;
var stateIndex;

$('#BtnState').click(function(event) {
  var covidApiDate=stateDateInputEl.val();
  var covidApiState=stateSrchInput.val().toLowerCase();
  var covidApiFinal = covidApiStart + covidApiState + '/' + covidApiDate + '/' + covidApiEnd;
  event.preventDefault();
  pullCovid(covidApiFinal);
  var stateDemogphcUrlBase = 'https://api.census.gov/data/2019/acs/acs1?get='; // api variable setting demographic
  var stateDemogphcUrlquerys = 'NAME,B02001_002E,B02001_003E,B02001_004E,B02001_005E,B01001_002E,B01001_026E,B01003_001E,B02001_002E,B02001_003E,B17024_001E,B17020_001E,C27001_001E';
  var stateAbbrev=$('#search-State').val().toUpperCase();
  var stateAbbrPosition=statesArr.indexOf(stateAbbrev);
  var stateCode=stateNumberCodes[stateAbbrPosition];
  var stateDemogphcUrlEnd = '&for=state:' + stateCode;
  var stateDemographcURLFinal = stateDemogphcUrlBase + stateDemogphcUrlquerys + stateDemogphcUrlEnd; 
  pullDemogphc(stateDemographcURLFinal);
  saveState();
  loadRecentPulls();
});
