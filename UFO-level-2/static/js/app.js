// from data.js
var tableData = data;

// Store table body in variable
var tbody = d3.select("tbody");

// Go through data and append it to the table in the html
// Loop through table json data
tableData.forEach(function(ufoSighting) {

    // Create a table row in the table body
    var row = tbody.append("tr")

    // Loop through each ufo sighting dictionary key,value pair
    Object.entries(ufoSighting).forEach(function([key,value]) {
        // Create a table data element in that table row and set its contents to the dictionary value
        var cell = row.append("td");
        cell.text(value);
    });
});



// Grab references to the input element and the output div
var button = d3.select("#filter-btn");

// Make button click run a function
button.on("click", function() {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputDate = inputElement.property("value");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#city");
    // Get the value property of the input element
    var inputCity = inputElement.property("value");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#state");
    // Get the value property of the input element
    var inputState = inputElement.property("value");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#country");
    // Get the value property of the input element
    var inputCountry = inputElement.property("value");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#shape");
    // Get the value property of the input element
    var inputShape = inputElement.property("value");

    console.log(inputDate,inputCity,inputState,inputCountry,inputShape)

    // Get all data values in variables
    var dates = tableData.map((tableData) => tableData.datetime);
    var cities = tableData.map((tableData) => tableData.city);
    var states = tableData.map((tableData) => tableData.state);
    var countries = tableData.map((tableData) => tableData.country);
    var shapes = tableData.map((tableData) => tableData.shape);

    // Intialize filter data
    var filteredData = tableData

    // Check to see if inputs are blank or have a value
    if (inputDate == "") {
        var datecheck = true
    }
    else {
        var datecheck = dates.includes(inputDate)
        if (datecheck === true) {
            filteredData = filteredData.filter(filteredData => filteredData.datetime === inputDate);
        }
    };


    if (inputCity == "") {
        var citycheck = true
    }
    else {
        inputCity = inputCity.toLowerCase()
        var citycheck = cities.includes(inputCity)       
        if (citycheck === true) {
            filteredData = filteredData.filter(filteredData => filteredData.city === inputCity);
        }
    };


    if (inputState == "") {
        var statecheck = true
    }
    else {
        inputState = inputState.toLowerCase()
        var statecheck = states.includes(inputState)
        if (statecheck === true) {
            filteredData = filteredData.filter(filteredData => filteredData.state === inputState)
        }
    };


    if (inputCountry == "") {
        var countrycheck = true
    }
    else {
        inputCountry = inputCountry.toLowerCase()
        var countrycheck = countries.includes(inputCountry)
        if (countrycheck === true) {
            filteredData = filteredData.filter(filteredData => filteredData.country === inputCountry)
        }
    };


    if (inputShape == "") {
        var shapecheck = true
    }
    else {
        inputShape= inputShape.toLowerCase()
        var shapecheck = shapes.includes(inputShape)
        if (shapecheck === true) {
            filteredData = filteredData.filter(filteredData => filteredData.shape === inputShape)
        }
    };
    
    
    console.log(datecheck, citycheck, statecheck, countrycheck, shapecheck)

    // If input date is in data set run filter
    if (datecheck === true) {

        if (citycheck === true) {

            if (statecheck === true) {

                if (countrycheck === true) {

                    if (shapecheck === true) {

                        // Store table body in variable
                        var tbody = d3.select("tbody");
                        // Remove all data from table
                        tbody.html("");

                        // Check filtered data
                        console.log(filteredData)

                        if (filteredData == 0) {
                            alert("There are no records in the database that match your filters!")
                        }
                        else {
                            // Run loop to append filtered data to table
                            filteredData.forEach(function(ufoSighting) {

                                // Create a table row in the table body
                                var row = tbody.append("tr")
                            
                                // Loop through each ufo sighting dictionary key,value pair
                                Object.entries(ufoSighting).forEach(function([key,value]) {
                                    // Create a table data element in that table row and set its contents to the dictionary value
                                    var cell = row.append("td");
                                    cell.text(value);
                                });
                            });
                        };
                    }
                    else {
                        alert("Shape not found in dataset. Please enter a new shape.")
                    };

                }
                else {
                    alert("Sorry, US is the only country in the database currently.")
                };

            }
            else {
                alert("State not found in database. Please enter a new state.")
            };

        }
        else {
            alert("City not found in database. Please enter a new city.")
        };

    }
    // If input date is not in data then alert user
    else {
        alert("Date not found in database. Please enter a new date from 1/1/2010 to 1/13/2010")
    };
});



