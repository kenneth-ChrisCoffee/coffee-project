"use strict"

function renderCoffee(coffee) {
    // for (var i = 0; i < coffee.length; i++){
    //     if (coffee[i].id % 2 === 0) {
    //         var html = '<div class = "coffee d-flex col-4 align-items-baseline ">';
    //         {/*html += coffee.id;*/}
    //         html += '<h2 class = "me-2">' + coffee.name + '</h2>';
    //         html += '<p>' + coffee.roast + '</p>';
    //         html += '</div>';
    //         return html;
    //
    //     }
    //     if (coffee[i].id % 2 === 1){
    //         var html2 = '<div class = "coffee d-flex col-4 align-items-baseline ">';
    //         {/*html += coffee.id;*/}
    //         html2 += '<h2 class = "me-2">' + coffee.name + '</h2>';
    //         html2 += '<p>' + coffee.roast + '</p>';
    //         html2 += '</div>';
    //         return html2;
    //
    //     }
    //     }
    //
    // }
    var html = '<div class = "coffee d-flex col-4 align-items-baseline ">';
    {/*html += coffee.id;*/}
        html += '<h2 class = "me-2">' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';


    return html;
}
//displays coffee in an ascending order
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// groups the different roasts and displays what coffees are a part of the selected group
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
