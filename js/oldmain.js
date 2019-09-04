// JavaScript Document
function ajaxContent1(){
    $('#bodyContentDiv').fadeOut(500, ajaxCall1);
    $('#bodyContentDiv').fadeIn(500);
}

function ajaxContent2(){
    $('#bodyContentDiv').fadeOut(500, ajaxCall2);
    $('#bodyContentDiv').fadeIn(500);
}

function ajaxContent3(){
    $('#nametitle').fadeOut(500, ajaxCall3);
    $('#nametitle').fadeIn(500);
}

function ajaxContent4(){
    $('#nametitle').fadeOut(500, ajaxCall4);
    $('#nametitle').fadeIn(500);
}

function ajaxCall1() {
    $('#bodyContentDiv').html('Hi, I\'m Josh. <br> Senior Network Engineer (TCP/IP). Security professional. <br> I am currently working on my first CCIE. <br> OSCP and CISSP just around the corner.  <br> <br>  <a href="#" onClick="ajaxContent2()"><img src="image/1429109591_icon-close-round-128.png" alt="close"/></a>');
}

function ajaxCall2() {
     $('#bodyContentDiv').html(' ');
}

function ajaxCall3() {
	var username = "joshua";
	var close = '  <a href="#" onClick="ajaxContent4()"><img src="image/1429109591_icon-close-round-128.png" alt="close"/></a>';
    var hostname = "riesenweber.id.au";
    var linktext = username + "@" + hostname ;
     $('#nametitle').html("<br>" + "<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>" + "&nbsp &nbsp" + close + "<br> <br>");
}


function ajaxCall4() {
    $('#nametitle').html('<br>Joshua Riesenweber <br> <br>');
}