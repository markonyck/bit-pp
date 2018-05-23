'use strickt';
(function () {
    console.log('Hi');

    // create constractor functions
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            const firstLetter = this.name[0].toUpperCase();
            const lastLetter = this.name[name.length - 1].toUpperCase();
            const genreCode = `${firstLetter}${lastLetter}`;
            return genreCode;

        };

    }

    function Movie(title, genre, length) {
        if (!(genre instanceof Genre)) {
            console.log(`genre is not instance of ${Genre}`);
        }
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function () {
            return `${this.title}: ${this.length}, ${genre.getData()}`;
        }
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.numOfMovies = this.listOfMovies.length;

        this.addMovie = function (movie) {
            this.numOfMovies++;
            return this.listOfMovies.push(movie);
        }

        this.lengthAllMovies = function () {
            let lengthAllMovies = 0;
            this.listOfMovies.forEach(function (movie) {
                lengthAllMovies += parseFloat(movie.length);
            });
            return lengthAllMovies;
        }

        this.moviesData = function () {
            let movieData = "";
            this.listOfMovies.forEach(function (movie) {
                movieData += `\t${movie.getData()}\n`;

            });
            return movieData;
        }

        this.getData = function () {
            return `${this.date} program duration: ${this.lengthAllMovies()} \n ${this.moviesData()}`;
        }
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfAllMovies = 0;
        this.addProgram = function (program) {
            this.numOfAllMovies++;
            return this.listOfPrograms.push(program);
        }

        this.festivalData = function () {
            let festivalData = '';
            this.listOfPrograms.forEach(function(program) {
                festivalData += program.getData();
            });
            return festivalData;
        }

        this.getData = function () {
            return `${this.name} has ${this.numOfAllMovies} programs: \n ${this.festivalData()}`;
        }
    }

    function createMovie (nameStr, genreStr, length){
        const genre = new Genre(genreStr)
        return new Movie(nameStr, genre, length);
    };

    function createProgram (date) {
        return new Program(date);
    };



    // var action = new Genre("action");
    // var drama = new Genre("drama");
    // var kids = new Genre("kids");
    // var sf = new Genre("science fiction");

    //var revenant = new Movie("Revenent", drama, "200min");
    const revenant = createMovie("Revenent", "drama", "200min");
    const frozen = createMovie("Frozen", "kids", '100min');
    // console.log(revenant);
    // console.log(revenant.getData());

    // console.log(frozen);
    // console.log(frozen.getData());
    const oscarMovies = new Program('06 22 2018');
    oscarMovies.addMovie(revenant);
    oscarMovies.addMovie(frozen);
    console.log(oscarMovies.getData());
    

    const cartoons = new Program("06 23 2018");
    cartoons.addMovie(frozen);

    // var sf = createProgram("06 24 2018");
    // console.log(sf);

    // console.log(cartoons.getData());

    const summerFest = new Festival('summerFest');
    summerFest.addProgram(oscarMovies);
    summerFest.addProgram(cartoons);
    console.log(summerFest.getData());

    // var starWars = new Movie("Star Wars", action, "180");
    // var covenant = new Movie("Star Wars", action, "180");
    // var newProgram = new createProgram("08 18 2018");
    //console.log(newMovie);
    //console.log(newProgram);



    // console.log(action);
    // console.log(revenant.getData());
    // console.log(revenant);
    // console.log(oscarMovies.listOfMovies);
    // console.log(oscarMovies.numOfMovies);
    // console.log(summerFest.listOfPrograms);
    // console.log(summerFest.numOfAllMovies);
    // console.log(summerFest.lengthAllMovies);

})();