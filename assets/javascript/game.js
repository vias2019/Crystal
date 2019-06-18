$(document).ready(function () {
    var totalScore = 0;
    var randomNumber;
    var randomFlower;
    var randomHeart;
    var randomRound;
    var randomSquare;
    var wins = 0;
    var losses = 0;
    var winsLosses = true;

    function reset() {
        randomNumber = Math.floor(Math.random() * 102) + 19;
        randomFlower = Math.floor(Math.random() * 12) + 1;
        randomHeart = Math.floor(Math.random() * 12) + 1;
        randomRound = Math.floor(Math.random() * 12) + 1;
        randomSquare = Math.floor(Math.random() * 12) + 1;
        totalScore = 0;
        winsLosses = false;
        $(".randomNumber").text(randomNumber);
        //console.log(randomNumber);
        //console.log(randomFlower);
    }
    function event() {
        if (totalScore == randomNumber) {
            wins++;
            $("#winsNumber").text(wins);
            $(".message").text("You won!");
            winsLosses = true;
            //console.log(totalScore);
        } else if (totalScore > randomNumber) {
            losses++;
            $("#lossesNumber").text(losses);
            $(".message").text("You lost!");
            winsLosses = true;
            //console.log(totalScore);
        } else { return; }

        if (winsLosses == true) {
            reset();
        }
    }
    reset();
    $("#flower").on("click", function () {
        totalScore += randomFlower;
        event();
        $(".score").text(totalScore);
    });
    $("#heart").on("click", function () {
        totalScore += randomHeart;
        event();
        $(".score").text(totalScore);
    });
    $("#round").on("click", function () {
        totalScore += randomRound;
        event();
        $(".score").text(totalScore);
    });
    $("#square").on("click", function () {
        totalScore += randomSquare;
        event();
        $(".score").text(totalScore);
    });

});