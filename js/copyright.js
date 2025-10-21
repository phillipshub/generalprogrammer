/*
Site: General Programmer
Script: copyright date script
Program: Portfolio Website
Author: Phillip McCullough
Date: 7/2/2023
Last Update: 10/14/2023
*/


// Writes copyright to html file.
function copyright() {
    year = new Date().getFullYear();
    document.getElementById("copyright").textContent = "© " + year +
        " | Phillip McCullough Ardrey, all rights reserved.";
}

