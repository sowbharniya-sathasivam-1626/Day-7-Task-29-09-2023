// Print the following details name, capital, flag using forEach function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    result.forEach(function (country) {
      var name = country.name;
      console.log("Name: " + name);
      var capital = country.capital;
      console.log("Capital: " + capital);
      var flag = country.flags.svg;
      console.log("Flag: " + flag);
      console.log("                  ");
    });
};

        
    
