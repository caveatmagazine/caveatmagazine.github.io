var main = function () {
    
    $("#jack").hide();
    $("#art").hide();
    $("#lipservice").hide();
    $("#children").hide();
    $("#paris").hide();
    $("#translucent").hide();
    $("#cover").hide();
    $(".previews").animate({opacity:"1"},"slow");
    
    var hexa1 = function () { 
        $(".hexes").animate({opacity:"1"},"slow");
        setTimeout(hexa2,300);
    };
    var hexa2 = function () {
        $(".hex2").animate({opacity:"1"}, "slow");
        setTimeout(hexa3,300);
    };
    var hexa3 = function () {
        $(".hex3").animate({opacity:"1"}, "slow");
        setTimeout(hexa4,300);
    };
    var hexa4 = function () {
        $(".hex4").animate({opacity:"1"}, "slow");
        setTimeout(hexa5,300);
    };
    var hexa5 = function () {
        $(".hex5").animate({opacity:"1"}, "slow");
        setTimeout(hexa6,300);
    };
    var hexa6 = function () {
        $(".hex6").animate({opacity:"1"}, "slow");
        setTimeout(hexac,300);
    };
    var hexac = function () {
        $(".hexc").animate({opacity:"1"}, "slow");
        setTimeout(footer,300);
    };
    var footer = function () {
        $("a").animate({opacity:"1"}, "slow");
    };
    
    $(".logo1").animate({opacity:"1"},"slow"); 
    setTimeout(hexa1,300);
    
    $(".hex1").click(function() {
        $(".hex1").fadeOut("fast");
        $(".hex2").fadeOut("fast");
        $(".hex3").fadeOut("fast");
        $(".hex4").fadeOut("fast");
        $(".hex5").fadeOut("fast");
        $(".hex6").fadeOut("fast");
        $(".hexc").fadeOut("fast");
        $("#jack").fadeIn("fast");
        $("#jack").css("z-index", 0 );
    });
    
    $(".hex2").click(function() {
        $(".hex1").fadeOut("fast");
        $(".hex2").fadeOut("fast");
        $(".hex3").fadeOut("fast");
        $(".hex4").fadeOut("fast");
        $(".hex5").fadeOut("fast");
        $(".hex6").fadeOut("fast");
        $(".hexc").fadeOut("fast");
        $("#art").fadeIn("fast");
        $("#art").css("z-index", 0 );
    });
    
    $(".hex3").click(function() {
        $(".hex1").fadeOut("fast");
        $(".hex2").fadeOut("fast");
        $(".hex3").fadeOut("fast");
        $(".hex4").fadeOut("fast");
        $(".hex5").fadeOut("fast");
        $(".hex6").fadeOut("fast");
        $(".hexc").fadeOut("fast");
        $("#lipservice").fadeIn("fast");
        $("#lipservice").css("z-index", 0 );
    });
    
    $(".hex4").click(function() {
        $(".hex1").fadeOut("fast");
        $(".hex2").fadeOut("fast");
        $(".hex3").fadeOut("fast");
        $(".hex4").fadeOut("fast");
        $(".hex5").fadeOut("fast");
        $(".hex6").fadeOut("fast");
        $(".hexc").fadeOut("fast");
        $("#children").fadeIn("fast");
        $("#children").css("z-index", 0 );
    });
    
    $(".hex5").click(function() {
        $(".hex1").fadeOut("fast");
        $(".hex2").fadeOut("fast");
        $(".hex3").fadeOut("fast");
        $(".hex4").fadeOut("fast");
        $(".hex5").fadeOut("fast");
        $(".hex6").fadeOut("fast");
        $(".hexc").fadeOut("fast");
        $("#paris").fadeIn("fast");
        $("#paris").css("z-index", 0 );
    });
    
    $(".hex6").click(function() {
        $(".hex1").fadeOut("fast");
        $(".hex2").fadeOut("fast");
        $(".hex3").fadeOut("fast");
        $(".hex4").fadeOut("fast");
        $(".hex5").fadeOut("fast");
        $(".hex6").fadeOut("fast");
        $(".hexc").fadeOut("fast");
        $("#translucent").fadeIn("fast");
        $("#translucent").css("z-index", 0 );
    });
    
    $(".hexc").click(function() {
        $(".hex1").fadeOut("fast");
        $(".hex2").fadeOut("fast");
        $(".hex3").fadeOut("fast");
        $(".hex4").fadeOut("fast");
        $(".hex5").fadeOut("fast");
        $(".hex6").fadeOut("fast");
        $(".hexc").fadeOut("fast");
        $("#cover").fadeIn("fast");
        $("#cover").css("z-index", 0 );
    });
    
    $(".hex1").mouseover(function() {
        $(".hex1").animate({background:"black", opacity:"0.75"}, 150);
    });
    
    $(".hex1").mouseout(function() {
        $(".hex1").animate({background:"black", opacity:"1"}, 150 );
    });
    
    $(".hex2").mouseover(function() {
        $(".hex2").animate({background:"black", opacity:"0.75"}, 150);
    });
    
    $(".hex2").mouseout(function() {
        $(".hex2").animate({background:"black", opacity:"1"}, 150);
    });
    
    $(".hex3").mouseover(function() {
        $(".hex3").animate({background:"black", opacity:"0.75"}, 150);
    });
    
     $(".hex3").mouseout(function() {
        $(".hex3").animate({background:"black", opacity:"1"}, 150);
    });
    
    $(".hex4").mouseover(function() {
        $(".hex4").animate({background:"black", opacity:"0.75"}, 150);
    });
    
    $(".hex4").mouseout(function() {
        $(".hex4").animate({background:"black", opacity:"1"}, 150);
    });
    
    $(".hex5").mouseover(function() {
        $(".hex5").animate({background:"black", opacity:"0.75"}, 150);
    });
    
    $(".hex5").mouseout(function() {
        $(".hex5").animate({background:"black", opacity:"1"}, 150);
    });
    
    $(".hex6").mouseover(function() {
        $(".hex6").animate({background:"black", opacity:"0.75"}, 150);
    });
    
     $(".hex6").mouseout(function() {
        $(".hex6").animate({background:"black", opacity:"1"}, 150);
    });
    
    $(".hexc").mouseover(function() {
        $(".hexc").animate({background:"black", opacity:"0.75"}, 150);
    });
    
     $(".hexc").mouseout(function() {
        $(".hexc").animate({background:"black", opacity:"1"}, 150);
    });
    
    
    $("#jack").click(function() {
        $("#jack").fadeOut("fast");
        $(".hex1").fadeIn("fast");
        $(".hex2").fadeIn("fast");
        $(".hex3").fadeIn("fast");
        $(".hex4").fadeIn("fast");
        $(".hex5").fadeIn("fast");
        $(".hex6").fadeIn("fast");
        $(".hexc").fadeIn("fast");
    });
    
     $("#art").click(function() {
        $("#art").fadeOut("fast");
        $(".hex1").fadeIn("fast");
        $(".hex2").fadeIn("fast");
        $(".hex3").fadeIn("fast");
        $(".hex4").fadeIn("fast");
        $(".hex5").fadeIn("fast");
        $(".hex6").fadeIn("fast");
        $(".hexc").fadeIn("fast");
    });
    
     $("#lipservice").click(function() {
        $("#lipservice").fadeOut("fast");
        $(".hex1").fadeIn("fast");
        $(".hex2").fadeIn("fast");
        $(".hex3").fadeIn("fast");
        $(".hex4").fadeIn("fast");
        $(".hex5").fadeIn("fast");
        $(".hex6").fadeIn("fast");
        $(".hexc").fadeIn("fast");
    });
    
     $("#children").click(function() {
        $("#children").fadeOut("fast");
        $(".hex1").fadeIn("fast");
        $(".hex2").fadeIn("fast");
        $(".hex3").fadeIn("fast");
        $(".hex4").fadeIn("fast");
        $(".hex5").fadeIn("fast");
        $(".hex6").fadeIn("fast");
        $(".hexc").fadeIn("fast");
    });
    
    $("#paris").click(function() {
        $("#paris").fadeOut("fast");
        $(".hex1").fadeIn("fast");
        $(".hex2").fadeIn("fast");
        $(".hex3").fadeIn("fast");
        $(".hex4").fadeIn("fast");
        $(".hex5").fadeIn("fast");
        $(".hex6").fadeIn("fast");
        $(".hexc").fadeIn("fast");
    });

    $("#translucent").click(function() {
        $("#translucent").fadeOut("fast");
        $(".hex1").fadeIn("fast");
        $(".hex2").fadeIn("fast");
        $(".hex3").fadeIn("fast");
        $(".hex4").fadeIn("fast");
        $(".hex5").fadeIn("fast");
        $(".hex6").fadeIn("fast");
        $(".hexc").fadeIn("fast");
    });
    
    $("#cover").click(function() {
        $("#cover").fadeOut("fast");
        $(".hex1").fadeIn("fast");
        $(".hex2").fadeIn("fast");
        $(".hex3").fadeIn("fast");
        $(".hex4").fadeIn("fast");
        $(".hex5").fadeIn("fast");
        $(".hex6").fadeIn("fast");
        $(".hexc").fadeIn("fast");
    });
};

$(document).ready(main);