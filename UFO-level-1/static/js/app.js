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
    var inputText = inputElement.property("value");
    console.log(inputText)

    // Get all data dates in a variable 
    var dates = tableData.map((tableData) => tableData.datetime);

    // Check to see if iput date is in date set. datecheck will be a boolean
    var datecheck = dates.includes(inputText)
    console.log(datecheck)

    // If input date is in data set run filter
    if (datecheck === true) {

        // Store table body in variable
        var tbody = d3.select("tbody");
        // Remove all data from table
        tbody.html("");

        // Check data against input date and filter out data
        var filteredData = tableData.filter(tableData => tableData.datetime === inputText);
        console.log(filteredData)

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
    }

    // If input date is not in data then alert user
    else {
        alert("Date not found in database. Please enter a new date ranging from 1/1/2010 to 1/13/2010")
    }
});



