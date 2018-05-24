var movieList = [];
var programList = [];

//konstruktorska za Movie
function Movie(titleMovie, duration, genre) {
    this.titleMovie = titleMovie;
    this.duration = duration;
    this.genre = genre;
}

Movie.prototype.getData = function () {
    var movieOutput = this.titleMovie + ", " + this.duration + "min, " + this.genreID();
    return movieOutput;
}
Movie.prototype.genreID = function () {
    var genreID1 = this.genre.slice(0, 1);
    var genreID2 = this.genre.slice(this.genre.length - 1);
    var genreID = (genreID1 + genreID2).toUpperCase();
    return genreID;
}

//konstruktorska za Program

function Program(inputDate) {
    this.inputDate = new Date(inputDate);
}

Program.prototype.getDate = function () {
    var dateOutput = this.inputDate.getDate() + "." + (this.inputDate.getMonth() + 1) + "." + this.inputDate.getFullYear() + ",";

    var outputProgram = dateOutput + " program duration: TBA";


    return outputProgram;
}


function createMovie() {
    var titleElement = document.querySelector("#title");
    var durationElement = document.querySelector("#duration");
    var genreElement = document.querySelector("#genre");



    var ulMovie = document.querySelector("#movie-list");

    var liOutput = document.createElement("li");

    var titleMovie = titleElement.value;
    var duration = parseInt(durationElement.value);
    var genre = genreElement.value;

    var createdMovie = new Movie(titleMovie, duration, genre);
    var index = movieList.push(createdMovie) -1;

    liOutput.textContent = createdMovie.getData();
    ulMovie.appendChild(liOutput);

    var moviesElement = document.querySelector("#movies");
    var moviesElementChildren = document.createElement("option");
    moviesElementChildren.textContent = createdMovie.getData();
    moviesElementChildren.setAttribute("value", index);
    moviesElement.appendChild(moviesElementChildren);

    titleElement.value = "";
    durationElement.value = "";
    genreElement.value = "";
}
document.querySelector("#createMovie").onclick = createMovie;

function createProgram() {
    var elementDate = document.querySelector("#date");
 
    var ulProgram = document.querySelector("#program-list");
    var liOutput = document.createElement("li");

    var createdProgram = new Program(elementDate.value);
    programList.push(createdProgram);
    console.log(createdProgram);
    

    liOutput.textContent = createdProgram.getDate();
    ulProgram.appendChild(liOutput);
}

document.querySelector("#createProgram").onclick = createProgram;

function addMovieToProgram(){
    var moviesElement = document.querySelector("#movies");
    var moviesChildren = moviesElement.children;
    for (var i = 0; i < moviesElement.length; i++){
        moviesChildren[i].value = movieList[i];
        moviesChildren[i].textContent = movieList[i];
    }
}

document.querySelector("#addMovie").onclick=addMovieToProgram;