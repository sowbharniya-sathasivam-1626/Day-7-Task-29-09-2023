// Print the country which uses US Dollars as currency.
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.responseText);
    var usDollarCountries = result.filter(function (country) {
      return Array.isArray(country.currencies) && country.currencies.some(function (currency) {
        return currency.code === 'USD';
      });
    });
    usDollarCountries.forEach(function (country) {
      console.log(country.name);
    });
};
