var dataModule = (function () {
    var store = {
        movies : []
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    Movie.prototype.genreId = function () {
        var firstLetter = this.genre[0].toUpperCase();
        var lastLetter = this.genre[this.genre.length - 1].toUpperCase();

        return firstLetter + lastLetter;
    }

    Movie.prototype.getInfo = function() {
        return this.title + ", " + this.genre + ", " + this.genreId();
    }


    function createMovie(title,genre,length) {
        var movie = new Movie(title, genre, length);
        store.movies.push(movie);
        return movie;
    }



    return {
        store: store,
        createMovie: createMovie,
    }
})();

var uiModule = (function () {


    function collectData() {
        var titleElement = document.querySelector("#movie-title");
        var genreElement = document.querySelector("#movie-genre");
        var lengthElement = document.querySelector("#movie-length");

        var title = titleElement.value;
        var genre = genreElement.value;
        var length = lengthElement.value;

        return {
            title: title,
            genre: genre,
            length: length
        }
    }

    function displayMovie (movie) {
        var titleElement = document.querySelector("#movie-title");
        var genreElement = document.querySelector("#movie-genre");
        var lengthElement = document.querySelector("#movie-length");

        var ulElement = document.querySelector(".movie-list");
        var liElement = document.createElement("li");
        liElement.textContent = movie.getInfo();
        ulElement.appendChild(liElement);

        titleElement.value = "";
        genreElement.value = "-";
        lengthElement.value = "";
    }

    function displayMovieDropdown (movie, moviesListLength) {
        var movieSelectElement = document.querySelector("#movie-select");

        var title = movie.title;

        var optionElement = document.createElement("option");
        optionElement.textContent = title;
        optionElement.setAttribute("value", moviesListLength - 1);
        movieSelectElement.appendChild(optionElement);
    }




    return {
        collectData: collectData,
        displayMovie: displayMovie,
        displayMovieDropdown: displayMovieDropdown,
    }


})();


var mainModule = (function (ui, data) {
    var createMovieBtn = document.querySelector("#createMovieBtn");

    createMovieBtn.addEventListener("click", function (event) {
        // 1.
        var collectData =  ui.collectData();

        // 2. 
        var movie = data.createMovie(collectData.title, collectData.genre, collectData.length);
        console.log(movie);
        
        // 3. 
        ui.displayMovie(movie);
        
        // 4.

        var moviesListLength = data.store.movies.length;
        console.log(moviesListLength);
        
        ui.displayMovieDropdown(movie, moviesListLength);
    });


})(uiModule, dataModule);