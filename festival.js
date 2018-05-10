'use strickt';
(function (){
console.log('Hi');

// create constractor functions
function Genre (name){
    this.name = name;
    this.getData = function (){
       var firstLetter = this.name[0].toUpperCase();
       var lastLetter = this.name[name.length - 1].toUpperCase();
       var genreCode = firstLetter + lastLetter;
       return genreCode;
       
    };
    
}

function Movie (title, length){
    this.title = title;
  //  this.genre = name.getData(name);
    this.length = length;
    this.getData = function(){
        return this.title + ", " + this.length + ", " + genre.getData();
    }
}

function Program (date, numberOfMovies){
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numberOfMovies = numberOfMovies;
    this.addMovie = function(movie){
        return listOfMovies.push(movie);
    }
    this.lengthAllMovies = function() {
        var lengthAllMovies = 0;
        this.lengthAllMovies.forEach(function(movie){
            lengthAllMovies += parseFloat(movie.length);
            return lengthAllMovies;
        });
    }
    this.getData = function(){
        return this.date + " " + this.lengthAllMovies + "\n" + movie.getData;
    }
}

function Festival(name, numberofAllMovies){
    this.name = name;
    this.listOfPrograms = [];
    this.numberofAllMovies = numberofAllMovies;
    this.addProgram = function(program){
        return listOfPrograms.push(program);
    }
}

var action = new Genre("action");
var drama = new Genre ("drama");
var sf = new Genre ("scien fiction");
console.log(action);
console.log(action.getData);
var revenent = new Movie("Revenent", "200min")
})();