'use strict';

(function () {

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }
    var Continent = Object.freeze({
        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU"
    })

    function Person(name, surname, date) {
        this.name = name;
        this.surname = surname;
        this.date = new Date();
    }
    Person.prototype.fullName = function (){
        return this.name + " " + this.surname;
    }
    Person.prototype.getData = function () {
        return this.fullName + this.date.getDay() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear().toString().substr(2, 2);
    }

    function Player(person, betAmount, country) {
        if (!(country instanceof Country)) {
            throw new Error("Invalid input of country")
        }
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }
    Player.prototype.getData = function(country){
        return this.country + ", " + (this.betAmount*this.country.odds) + " eur," + this.person.fullName + (2018 - this.person.getFullYear());
    }

    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }
    Address.prototype.getData = function () {
        return this.street + this.number + ", " + this.postalCode + this.city + this.country;
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
    }

    function BettingHouse(competition, numberOfPlayers) {
        this.listOfBettingPlaces = [];
    }

})()