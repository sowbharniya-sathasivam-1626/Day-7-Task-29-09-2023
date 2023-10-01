// Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();

request.onload = function () {
    var result = JSON.parse(request.response);
    var totalPopulation = result.reduce(function (acc, ele) {
      return acc + ele.population;
    }, 0);
    console.log("Total Population of Countries: " + totalPopulation);
};
