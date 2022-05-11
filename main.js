"use strict"
//rewrote function to build Divs instead of table
function renderCoffee(coffee) {
    var html = '<div class = "coffee d-flex col-6 my-3 align-items-baseline ">';
    {/*html += coffee.id;*/}
    html += '<h2 class = "me-2 text-nowrap">' + coffee.name + '</h2>';
    html += '<p class ="text-muted">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

// //displays coffee in an ascending order
function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return '<div class = row>' + html + '</div>';
}

// groups the different roasts and displays what coffees are a part of the selected group
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            //added else if to add function to input all
        } else if('all' === selectedRoast){
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function searchCoffees(){
    var inputRoast = coffeeNames.value.toUpperCase();
    console.log(inputRoast)
    var filteredInput = []
    coffees.forEach(function(input){
        if(input.name.toUpperCase().includes(inputRoast)){
            filteredInput.push(input)
        }
    })
    tbody.innerHTML = renderCoffees(filteredInput);
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
//retrieves our object from the localstorage
if(localStorage.getItem('users') === null){
    localStorage.setItem( 'users', JSON.stringify(coffees))
}else {
    coffees = JSON.parse(localStorage.getItem('users'))
}
//adds our coffee input to the object and moves it to the local storage
function addACoffee(e){
    e.preventDefault();
    var newCoffee = {id:coffees.length + 1,name:newCoffeeName.value,roast:newCoffeetype.value};
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
    window.localStorage.setItem( 'users', JSON.stringify(coffees))
}


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit2');
var roastSelection = document.querySelector('#roast-selection');
var coffeeNames = document.querySelector('#coffee-name');
var newCoffeetype = document.querySelector('#roast2-selection');
var newCoffeeName = document.querySelector('#coffee2-name');

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);
coffeeNames.addEventListener('keyup', searchCoffees);
submitButton.addEventListener('click',addACoffee);
