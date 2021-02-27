var ctryList = $('#ctry-list'); // var setting ---ON page load, populate state/country codes and dates, identify inputs
var statesList = $('#st-list');
var cntryDateInput = $('#ctryDate');
var stateDateInput = $('#stateDate');
var cntrySrchInput = $('#search-Country');
var stateSrchInput = $('#search-State');
var datePickers = $('.dateSel')  // write validation code here - use modals instead of alerts and confirms to have validation messages
var ctryDate = cntryDateInput.attr('value');
var stateDate = stateDateInput.attr('value');
var StatesArr = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
var CtryArr = ['ABW', 'AFG', 'AGO', 'ALB', 'AND', 'ARE', 'ARG', 'AUS', 'AUT', 'AZE', 'BDI', 'BEL', 'BEN', 'BFA', 'BGD', 'BGR', 'BHR', 'BHS', 'BIH', 'BLR', 'BLZ', 'BMU', 'BOL', 'BRA', 'BRB', 'BRN', 'BTN', 'BWA', 'CAF', 'CAN', 'CHE', 'CHL', 'CHN', 'CIV', 'CMR', 'COD', 'COG', 'COL', 'CPV', 'CRI', 'CUB', 'CYP', 'CZE', 'DEU', 'DJI', 'DMA', 'DNK', 'DOM', 'DZA', 'ECU', 'EGY', 'ERI', 'ESP', 'EST', 'ETH', 'FIN', 'FJI', 'FRA', 'FRO', 'GAB', 'GBR', 'GEO', 'GHA', 'GIN', 'GMB', 'GRC', 'GRL', 'GTM', 'GUM', 'GUY', 'HKG', 'HND', 'HRV', 'HTI', 'HUN', 'IDN', 'IND', 'IRL', 'IRN', 'IRQ', 'ISL', 'ISR', 'ITA', 'JAM', 'JOR', 'JPN', 'KAZ', 'KEN', 'KGZ', 'KHM', 'KIR', 'KOR', 'KWT', 'LAO', 'LBN', 'LBR', 'LBY', 'LKA', 'LSO', 'LTU', 'LUX', 'LVA', 'MAC', 'MAR', 'MCO', 'MDA', 'MDG', 'MEX', 'MLI', 'MLT', 'MMR', 'MNG', 'MOZ', 'MRT', 'MUS', 'MWI', 'MYS', 'NAM', 'NER', 'NGA', 'NIC', 'NLD', 'NOR', 'NPL', 'NZL', 'OMN', 'PAK', 'PAN', 'PER', 'PHL', 'PNG', 'POL', 'PRI', 'PRT', 'PRY', 'PSE', 'QAT', 'RKS', 'ROU', 'RUS', 'RWA', 'SAU', 'SDN', 'SEN', 'SGP', 'SLB', 'SLE', 'SLV', 'SMR', 'SOM', 'SRB', 'SSD', 'SUR', 'SVK', 'SVN', 'SWE', 'SWZ', 'SYC', 'SYR', 'TCD', 'TGO', 'THA', 'TJK', 'TKM', 'TLS', 'TON', 'TTO', 'TUN', 'TUR', 'TWN', 'TZA', 'UGA', 'UKR', 'URY', 'USA', 'UZB', 'VEN', 'VIR', 'VNM', 'VUT', 'YEM', 'ZAF', 'ZMB', 'ZWE'];


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

//update Demographics
pullDemogphc(stateDemographcURLFinal); 
//["NAME", "B02001_002E", "B02001_003E", "B02001_004E", "B02001_005E", "state"]
// // var stateCoronaUrl;

//add listeners
$('#BtnCountry').click(pullOxford(oxfordFinalURL));
$('#BtnState').click(pullDemogphc(stateDemographcURLFinal));  /// **********ADD pullCovid(covidApiFinal)  FUNCTION

//determine today's date and use in validations
var todayDate=moment().format('yyyy-MM-DD');



// var validateDate(dateValue) = ()stateDateInput

// Demographics fetch code
function pullDemogphc(url) {
  // if validateDate=
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
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

function pullOxford(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data); // sample delete
      var firstFind = data['data'];
      //console.log(firstFind);
      // const mySelf= Object.keys(firstFind)[0];
      const mySelfValues = firstFind[Object.keys(firstFind)[0]];
      const MyDayObj = (mySelfValues[ctryCode]);
      var confirmedOx = MyDayObj['confirmed'];
      var deathsOx = MyDayObj['deaths'];
      var stringencyOx = MyDayObj['stringency'];
      //console.log(confirmedOx);
      //console.log(deathsOx);
      //console.log(stringencyOx);
    })}


// *******************************ARE THERE WAYS TO SIMPLY THE ABOVE CODE*********************************
// const found = firstFind.find(element => element.key = ctryCode);
// var result = $.grep(myArray, function(e){ return e.id == id; });
// Covid fetch code
// // Oxford fetch code


// Covid fetch code

//  https://api.covidtracking.com/v2/states/ca/2021-01-10/simple.json

var covidApiStart= 'https://api.covidtracking.com/v2/states/';
var covidApiState= 'ca';
var covidApiDate= '2020-05-10';
var covidApiEnd= 'simple.json';
var covidApiFinal= covidApiStart + covidApiState + '/' + covidApiDate + '/' + covidApiEnd;

  function pullCovid(url) {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (dataMain) {
        console.log(dataMain)
      });
  };

  pullCovid(covidApiFinal);


// var modal = $("#myModal");
// // Get the button that opens the modal
// var btn = $("#myBtn");
// // Get the <span> element that closes the modal
// var span = $(".close")[0];
// // When the user clicks on the button, open the modal



// btn.on("click", function() {

//   modal.style.display = "block";
// });

// // $( "#dataTable tbody tr" ).on( "click", function() {
// //   console.log( $( this ).text() );
// // });

// // When the user clicks on <span> (x), close the modal
// span.on("click", function() {
//   modal.style.display = "none";
// });
// // When the user clicks anywhere outside of the modal, close it
// window.on("click", function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });