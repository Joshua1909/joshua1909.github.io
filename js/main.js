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
    $('#bodyContentDiv').html('Security professional. Network Engineer.<br>  <br>  <a href="#" onClick="ajaxContent2()"><i class="fa fa-angle-up fa-lg"></i></a>');
}

function ajaxCall2() {
     $('#bodyContentDiv').html(' ');
}

function ajaxCall3() {
	var username = "joshua";
	var close = '  <a href="#" onClick="ajaxContent4()"><i class="fa fa-angle-left fa-lg"></i></a>';
    var hostname = "riesenweber.id.au";
    var linktext = username + "@" + hostname ;
     $('#nametitle').html("<p>" + "<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>" + "&nbsp &nbsp" + close + "</p>");
}


function ajaxCall4() {
    $('#nametitle').html('<p>Joshua Riesenweber</p>');
}