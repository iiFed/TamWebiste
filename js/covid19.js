function covid19update() {
  var request = new XMLHttpRequest();

  request.open("GET", "https://api.covidtracking.com/v1/us/current.json", true);

  request.onload = function() {
    var data = JSON.parse(this.response);
    var cases = data[0].positive.toLocaleString();
    var deaths = data[0].death.toLocaleString();
    var HOS = data[0].hospitalizedCurrently.toLocaleString();
    var recovered = data[0].recovered.toLocaleString();

    document.getElementById("covidcases").innerHTML =
      " " + cases + " cases total.";
    document.getElementById("coviddeaths").innerHTML = " " + deaths + " deaths";
    document.getElementById("covidhospital").innerHTML =
      " " + HOS + " Hospitalized Currently";
    document.getElementById("covidrecovered").innerHTML =
      " " + recovered + " people recovered.";
  };
  request.send();
}
