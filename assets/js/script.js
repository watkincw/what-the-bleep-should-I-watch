// ------------------------------------------------------------------
// // The idea of the commented lines are to separate the code into the different major sections. Doing it this way could help reduce confusion when 'git pulling'. 
// // Try to keep things clean and use //comments on each and every file so the code is easy to read and the functionality of different code blocks are easy to understand.
// // Leave 2 open lines between the bottom, closing commented seperator line and the top, openeing seperator line to make it extra clear that there things are seperated
// // It could be helpful to add a label at the top of each section to make it easier to navigate through the project
// ------------------------------------------------------------------


// ------------------------------------------------------------------

// // I do not know if I should figure out how to import/export this variable from another file for this project or if I should just keep it in this file. I spent way too much time trying to figure it out on my own. For now it is here, but I may figure out how to import it from another file at some point.

// // importing API Key from key.js. (message Colton if you need help understand this)
// import { APIKEY } from './key.js';
// console.log(APIKEY);

// // Example of an API request: 
// 550 = id#550 = 'fight club'
// https://api.themoviedb.org/3/movie/550?api_key=03af2fad82ab3f23750190542914caf8

const timesAPIKey = 'Dp1ap8UZalnuCrhZYtZkLMUe6fqNRYXv'

const streamingAPIKey = '0e490c0bb2msh27474734de7d723p106e9ajsn139beffcdbea'
const movieAPIKey = '03af2fad82ab3f23750190542914caf8'
const streamingUrl = 'https://watchmode.p.rapidapi.com/list-titles/'
const base_url = "http://api.themoviedb.org/3/"
const images_url = "http://image.tmdb.org/t/p/"

// ------------------------------------------------------------------


// ------------------------------------------------------------------
// function getCertifications() {
//     fetch("https://api.themoviedb.org/3/certification/movie/list?api_key=03af2fad82ab3f23750190542914caf8&certifications_country=US")
//     .then(response => response.json())
//     .then(response => {
//         const certifications = response.certifications.US
//         let mainContainer = document.getElementById("myData");
//         for (var i = 0; i < certifications.length; i++) { 
//             // 
//             var div = document.createElement("div");
//             div.innerHTML = 'Rating: ' + certifications[i].certification
            
//             // append each rating to our page
//             mainContainer.appendChild(div)
//             console.log(certifications[i]);
//         }
//         console.log(response);
//         return response.certifications
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }
// getCertifications()

// ------------------------------------------------------------------


// ------------------------------------------------------------------
// onClick button
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// SPLICESPLICESPLICESPLICESPLICE SPLICE
// SLICE SLICE SLICE SLICE SLICE SLICE SLICE SLICE 
// sort()
// ------------------------------------------------------------------

// watchmode api for stteaming services call
let sourceSearch = document.getElementById("search-criteria");
function getSources() {
fetch("https://watchmode.p.rapidapi.com/sources/?types=sub%2Cfree&regions=US%2CCA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0e490c0bb2msh27474734de7d723p106e9ajsn139beffcdbea",
		"x-rapidapi-host": "watchmode.p.rapidapi.com"
	}
})
.then(response => {
	response.json();
})

.then(response => {
    const sources = response.sources.US
.catch(err => {
	console.error(err);
});
console.log(getSources)
getSources()
} 
// ------------------------------------------------------------------

// ------------------------------------------------------------------


// ------------------------------------------------------------------

// ------------------------------------------------------------------


// ------------------------------------------------------------------

// ------------------------------------------------------------------


// ------------------------------------------------------------------

// ------------------------------------------------------------------



// ------------------------------------------------------------------

// ------------------------------------------------------------------


// ------------------------------------------------------------------
// // // // THIS IS AN EXAMPLE OF HOW TO FETCH MOVIES FROM THE DATABASE USING A SEARCH BAR
// // // // WE MAY NOT NECESSARILY NEED THIS THROUGHOUT THE PROJECT, BUT IT IS HERE AS AN EXAMPLY OF ONE THING THAT CAN BE DONE USING TMDB API
// // // // THIS WAS TAKEN FROM THIS VIDEO: https://www.youtube.com/watch?v=bpHtxx_wmqw


//// 1. To get the config data like image base URLs
//// https://api.themoviedb.org/3/configuration?api_key=03af2fad82ab3f23750190542914caf8

//// 2. To fetch a list of movies based on a <keyword>
//// https://api.themoviedb.org/3/search/movie?api_key=03af2fad82ab3f23750190542914caf8&query=<keyword>

//// 3. To fetch more details about a movie
//// https://api.themoviedb.org/3/movie/<movie-id>?api_key=03af2fad82ab3f23750190542914caf8

// let baseURL = 'https://api.themoviedb.org/3/';
// let configData = null;
// let baseImageURL = null;

// let getConfig = function() { 
//     let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
//     fetch(url)
//     .then((result)=> { 
//         return result.json();
//     })
//     .then((data)=> { 
//         baseImageURL = data.images.secure_base_url;
//         configData = data.images;
//         console.log('config', data);
//         console.log('config fetched');
//         runSearch('jaws')
//     })
//     .catch(function(err) { 
//         alert(err);
//     });
// }

// let runSearch = function(keyword) { 
//     let url = "".concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
//     fetch(url)
//     .then(result=>result.json())
//     .then((date)=> { 
//         // process the returned data
//         document.getElementById('output').innerHTML = JSON.stringify(data, null, 4);     //// NO ELEMENT WITH THE ID OF 'output'
//         // work with results array...
//     })
// }

// document.addEventListener('DOMContentLoaded', getConfig);
// ------------------------------------------------------------------
)}