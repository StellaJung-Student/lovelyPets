/********************************************************************************* 
*
* WEB222 – Assignment #4a
*
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: __Stella (Sung Ok) Jung__ Student ID: _131566176__ Date: __2018/07/14__ 
* 
********************************************************************************/
var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)
var filteredData = [];

// functions of filtering pets
function filterDog() {
    filterType = "dog";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}
function filterCat() {
    filterType = "cat";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}
function filterBird() {
    filterType = "bird";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

window.onload = function () {
    loadTableWithFilters();
}

//getting data according to filtered
function loadTableWithFilters() {
    var elem = document.querySelector("#main-table-body");
    //var elem = document.getElementById("main-table-body");

    //cleared pet data
    elem.innerHTML = ""

    //loop for array of data display    
    petData.forEach(function (pet) {
        if ((filterType === "" || filterType === pet.type) && (pet.age >= filterAgeMin && pet.age <= filterAgeMax)) {
            var tr = document.createElement("tr");
            var tdLeft = document.createElement("td");
            var tdRight = document.createElement("td");
            var h = document.createElement("h4");
            var p = document.createElement("p");
            var s = document.createElement("span");
            var img = document.createElement("img");
            img.src = pet.image.src;
            img.alt = pet.image.alt;
            img.height = pet.image.height;
            img.width = pet.image.width;
            //img.setAttribute("src", "pet.image.src");
            h.appendChild(document.createTextNode(pet.name));
            p.innerHTML += pet.description;
            //p.appendChild(document.createTextNode(pet.description));
            s.appendChild(document.createTextNode("Age: " + pet.age + " years old."));
            tdLeft.appendChild(img);
            tr.appendChild(tdLeft);
            tdRight.appendChild(h);
            tdRight.appendChild(p);
            tdRight.appendChild(s);
            tr.appendChild(tdRight);
            elem.appendChild(tr);
        }
    });
}

//functions of filtering age
function filter_zero_1() {
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}

function filter_1_3() {
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}

function filter_4_plus() {
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

//showing all data
function filterAllPets() {
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}
