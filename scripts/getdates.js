// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Display the date this document was last modified
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;