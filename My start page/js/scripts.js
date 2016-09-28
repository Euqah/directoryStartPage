/*  Copyright 2014 gokoururi
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the COPYING file for more details. */

/*  Remove mascot class from element "main" if its width is <= mascotMinWidth */
function controlMascot(mascot, mascotMinWidth) {
    $(window).resize(function(event) {
        if ( $(window).width() <= mascotMinWidth && $("main").hasClass("mascot") ) {
            removeMascot();
        } else if( $(window).width() > mascotMinWidth && ! $("main").hasClass("mascot") ) {
            setMascot(mascot);
        }
    });
}

function setMascot(mascot) {
    $('main').addClass("mascot");
    $('main').css("background-image", "url(" + mascot + ")");
    $('main').removeClass("plain");
}

function removeMascot() {
    $('main').removeClass("mascot");
    $('main').css("background-image", "");
    $('main').addClass("plain");
}

function refreshMascot() {

    $('main').refreshMascot
}

/*$(document).ready(function(event) {
    var mascotEnable    = true;
    var mascotPath      = "images/mascots/"
    var mascotList      = [ "isthisit.png", "isthisit2.png", "typ.png", "ff.png", "ff2.png", "ss.png", "anema.png", "10days.png", "2door.png", "beacon.png", "nextyear.png", "badsuns.png", "mum.png", "blues.png", "civilian.png","shoes.png", "helio.png", "iamx.png", "iamx2.png", "fuss.png", "palace.png", "lorde.png", "off.png", "park.png", "park2.png", "snow.png", "hope.png", "parade.png", "cheers.png","poe.png","puggy.png","vaccines.png","norgaard.png"];

    var mascot          = mascotPath + mascotList[Math.floor(Math.random() * mascotList.length)];
    var mascotMinWidth  = '500';

    if ( mascotEnable ) { 
        setMascot(mascot);
        controlMascot(mascot, mascotMinWidth);
    } else { removeMascot(); }


});
