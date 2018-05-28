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
            this.cast = [];
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
            console.log(reformedList50);
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
            console.log(show);
            const mySeason = new Season (show._embedded.seasons)
            const myShow = new singleShow(show.name, image, show.id, show.summary);
            
            let numOfSeasons = show._embedded.seasons.length;
            let seasons = show._embedded.seasons;

            console.log(seasons);
            console.log(myShow);
            doneHandler(myShow);
        })
    }

    return {
        loadData,
        fetchSingleShow
    }


})();

const uiModule = (function () {

    const showData = function (showList) {
        const $display = $(".display");
        let showListOnPage = "";
        for (let i = 0; i < showList.length; i++) {
            showListOnPage += (`<div class="show-card col-4" data-id='${showList[i].id}'>
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

    return {
        initHomepage,
        initSingleShow
    }

})(dataModule, uiModule);