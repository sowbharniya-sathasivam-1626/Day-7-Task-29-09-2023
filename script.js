//  Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
        var asianCountries = result.filter(function (country) {
            return country.region === "Asia";
        });
        asianCountries.forEach(function (country) {
            var name = country.name; 
            console.log(name);
        });
};


