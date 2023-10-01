// Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();

request.onload = function () {
        var result = JSON.parse(request.response);
        var countriesWithPopulationLessThan2Lakh = result.filter(function (country) {
                return country.population < 200000; 
            });
            countriesWithPopulationLessThan2Lakh.forEach(function (country) {
                var name = country.name;
                var population = country.population;
                console.log(name + " - Population: " + population);
            });
        }
