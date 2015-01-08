var main = function() {
    var hexa1 = function () { 
        $(".hexes").animate({opacity:"1"},"slow");
        setTimeout(hexa2,300);
    }
    var hexa2 = function () {
        $(".hex2").animate({opacity:"1"}, "slow");
        setTimeout(hexa3,300);
    }
    var hexa3 = function () {
        $(".hex3").animate({opacity:"1"}, "slow");
        setTimeout(hexa4,300);
    }
    var hexa4 = function () {
        $(".hex4").animate({opacity:"1"}, "slow");
        setTimeout(hexa5,300);
    }
    var hexa5 = function () {
        $(".hex5").animate({opacity:"1"}, "slow");
        setTimeout(hexa6,300);
    }
    var hexa6 = function () {
        $(".hex6").animate({opacity:"1"}, "slow");
        setTimeout(hexac,300);
    }
    var hexac = function () {
        $(".hexc").animate({opacity:"1"}, "slow");
        setTimeout(footer,300);
    }
    var footer = function () {
        $("a").animate({opacity:"1"}, "slow");
        setTimeout()
    }
    $(".logo1").animate({opacity:"1"},"slow"); 
    setTimeout(hexa1,300);

};

$(document).ready(main);