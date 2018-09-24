const dataModule = (function () {

    class Show {
        constructor(name, image, id) {
            this.name = name;
            this.image = image;
            this.id = id;

        }
    }
    class singleShow extends Show {
        constructor(name, original, id, summary, seasons, cast) {
            super(name, id)

            this.original = original;
            this.summary = summary;
            this.seasons = seasons;
            this.cast = cast;
        }

    }
    class Season {
        constructor(beginDate, endDate) {
            this.beginDate = beginDate;
            this.endDate = endDate;
        }
    }

    const loadData = function (doneHandler) {
        $.ajax({
            url: "http://api.tvmaze.com/shows",
            method: "GET"
        }).done(function (listShows) {
            const list = listShows;
            list.sort(function (curr, next) {
                const a = curr.rating.average;
                const b = next.rating.average;
                return b - a;
            });

            const reformedList50 = list.slice(0, 50).map(singleShowObj => {
                const show = new Show(singleShowObj.name, singleShowObj.image.medium, singleShowObj.id);
                return show
            })
            // console.log(reformedList50);
            doneHandler(reformedList50)
            //loadData je funkcija, koju je pozvao main controler. Ona preko ajaxa i druge logike daje rezultat reformedlist50.
            // Da bi smo podatke vratili mainu, potrebna nam je callback funkcija doneHandler, koja je preuzela podatke reformedlista50 i prosledio loadData.

        });
    };

    const fetchSingleShow = function (id, doneHandler) {
        $.ajax({
            url: `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`,
            method: "GET"
        }).done(function (show) {
            let image = show.image.original;
            let id = show.id;
            let numOfSeasons = show._embedded.seasons.length;
            let seasons = show._embedded.seasons;
            let cast = show._embedded.cast;
            let castList = [];
            cast.forEach(({ person }) => {
                castList.push(person.name);
            });


            const reformatedSeasons = seasons.map(singleObj => {
                const mySeason = new Season(singleObj.premiereDate, singleObj.endDate);
                return mySeason;
            })

            const myShow = new singleShow(show.name, image, id, show.summary, reformatedSeasons, castList);

            // console.log(myShow);
            doneHandler(myShow);

        })

        const searchShow = function (input, doneHandler) {
            $.ajax({
                url: `http://api.tvmaze.com/search/shows?q=${input}`,
                method: "GET"
            }).done(function (searched) {
                shows = [];
                if (searched.length <= 10) {
                    for (let i = 0; i < searched.length; i++) {
                        const searchedName = searched[i].show.name;
                        const searchedId = searched[i].show.id;
                        const searchedImg = "";
                        let show = new Show(showId, showName, showImg);
                        shows.push(show);
                    }
                } else {
                    for (let i = 0; i < 10; i++) {
                        const searchedName = searched[i].show.name;
                        const searchedId = searched[i].show.id;
                        const searchedImg = "";
                        let searchedObj = new Show(showId, showName, showImg);
                        shows.push(searchedObj);
                    }
                }
                doneHandler(shows);
            })
        }
    }

    return {
        loadData,
        fetchSingleShow,
        // searchShow
    }


})();

const uiModule = (function () {

    const showData = function (showList) {
        const $display = $(".display");
        let showListOnPage = "";
        for (let i = 0; i < showList.length; i++) {
            showListOnPage += (`<div class="show-card col-sm-4" data-id='${showList[i].id}'>
                                <img src='${showList[i].image}'><p>${showList[i].name}<p></div>`);

        }
        $display.html(showListOnPage);
    }

    const showSingleItem = function (showItem) {
        const $mainTitle = $(".show-title");
        let showTitle = showItem.name;
        $mainTitle.html(`<h3>${showTitle}<h3>`);

        const $detailImage = $(".show-image");
        let showImageOnPage = showItem.original;
        $detailImage.html(`<img src="${showImageOnPage}">`);

        const $summary = $(".summary");
        let summaryText = showItem.summary;
        $summary.html(`${summaryText}`);

        const $season = $(".season");
        const $seasonTitle = $(".seasonTitle");
        const showSeasonTitle = `Seasons (${showItem.seasons.length})`;
        $seasonTitle.html(showSeasonTitle);
        let showListOfSeasons = "";
        for (let i = 0; i < showItem.seasons.length; i++) {
            if (showItem.seasons[i].beginDate !== null) {
                showListOfSeasons += (`
                    <li>${showItem.seasons[i].beginDate} - ${showItem.seasons[i].endDate}</li>
                `)
            } else {
                showListOfSeasons += `<li>TBA</li>`;
            }
        }
        $season.html(showListOfSeasons);
        const $cast = $(".cast");
        let showCastOnPage = "";
        for (let i = 0; i < showItem.cast.length; i++) {
            showCastOnPage += (`
            <li>${showItem.cast[i]}</li>
            `)
        }
        $cast.html(showCastOnPage);
    }

    return {
        showData,
        showSingleItem
    }


})();

const mainController = (function (data, ui) {
    function initHomepage() {
        data.loadData(function (showLIst) {
            ui.showData(showLIst);
        });

        $(document).on('click', ".show-card", function () {
            // get id
            let idValue = $(this).attr("data-id");
            // set to ls
            localStorage.setItem("id", idValue);
            // redirect to single page 
            location.href = "showInfoPage.html"
        });
    }

    let id = localStorage.getItem("id");

    console.log(id);
    function initSingleShow() {
        console.log('second page');
        data.fetchSingleShow(id, function (showItem) {
            ui.showSingleItem(showItem);

        });
    }

    // $("#search-field").on("keyup", function(event){
    //     let input = this.value;
    //     data.searchShow(input, function(str){
    //        ui.dropdownDisplay(str);
    //     });
    // });

    return {
        initHomepage,
        initSingleShow
    }

})(dataModule, uiModule);