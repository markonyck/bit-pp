"use strict";
(function () {

    console.log("Hi!");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        }
    }

    function Seat(number, category = "e") {
        if (category !== "b") {
            category = "e";
        }
        else {
            category == "b";
        }


        this.number = number || parseInt(Math.random() * 90 + 10);
        this.category = category;
        this.getData = function () {
            return this.number + ", " + this.category.toUpperCase();
        }

    }


    function Passenger(person, seat) {
        if (!(person instanceof Person)) {
            console.log("person is not instance of Person");
        }
        if (!(seat instanceof Seat)) {
            console.log("seat is not instance of Seat");
        }
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return seat.getData() + ", " + person.getData();
        }
    }

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
        this.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger);
        }
        this.getData = function (date, relation, listOfPassengers) {
            var outputStr = this.date.getDate() + "." + (this.date.getMonth()+1) + "." + this.date.getFullYear() + "." + ", " + this.relation + "\n \t";
            this.listOfPassengers.forEach(function(passenger){
                outputStr += passenger.getData() + "\n \t";
            })
            return outputStr;
        }
            
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        }
        this.getTotalPassengers = function(){
            var counter = 0;
            this.listOfFlights.forEach(function(flight){
              counter += flight.listOfPassengers.length;
            });
            return counter;
          }
          this.getData = function(){
            var outputStr = "Airport: " + this.name + ", total passengers: " + this.getTotalPassengers() + "\n";
            this.listOfFlights.forEach(function(flight){
              outputStr += flight.getData() + "\n";
            });
            return outputStr;
          }
    }

    function createFlight(relation, date){
        var date = new Date(date);
        return new Flight(relation, date);
    }

    function createPassenger(name, surname, category, number){
        person = new Person(name, surname);
        category = new Seat (number, category);
        return new Passenger (person, seat);
    }

   // var johnSnow = createPassenger("John", "Snow", "b", 1);
   var nikolaTesla = new Airport();

    var johnSnow = new Person("John", "Snow");
    var cerceiLannister = new Person ("Cersei", "Lannister");
    var daenerysTargaryen = new Person("Daenerys", "Targaryen");
    var tyrionLannister = new Person ("Tyrion",  "Lannister");

    var seat_b1 = new Seat(1, "b");
    var seat_b2 = new Seat(2, "b");
    var seat_14 = new Seat(14, "");
    var seat = new Seat(null, "");

    var belgradeNewYork = new Flight("Belgrade - New York", "10 25 2017");
    var barcelonaBelgrade = new Flight ("Barcelona - Belgrade", "11 11 2017");

    var passenger1 = new Passenger(johnSnow, seat_b1);
    var passenger2 = new Passenger(cerceiLannister, seat_b2);
    var passenger3 = new Passenger(daenerysTargaryen, seat_14);
    var passenger4 = new Passenger(tyrionLannister, seat);

    belgradeNewYork.addPassenger(passenger1);
    belgradeNewYork.addPassenger(passenger2);
    barcelonaBelgrade.addPassenger(passenger3);
    barcelonaBelgrade.addPassenger(passenger4);

    nikolaTesla.addFlight(belgradeNewYork);
    nikolaTesla.addFlight(barcelonaBelgrade);

    console.log(nikolaTesla.getData());

    

    // var NT = new Airport ("Nikola Tesla", );
   // var markoNik = new Person("Marko", "Nikolić");
  //  console.log(markoNik);
   // console.log(markoNik.name);
    //console.log(markoNik.getData());


    //var c12 = new Seat(null, "b");
   // console.log(c12.number);
  //  console.log(c12.category);
   // console.log(c12.getData());

  //  var putnik_c12 = new Passenger(markoNik, c12);
   // console.log(putnik_c12.getData());
})();