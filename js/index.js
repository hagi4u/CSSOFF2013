/* DOM Lists (root) */
var preloader = document.getElementById('preloader');
var viewport = document.getElementById('viewport');

/* DOM Dynamic Position Variables */
var section_1 = document.getElementById('box-model').parentNode;
var section_2 = document.getElementById('staying-afloat').parentNode;
var section_3 = document.getElementById('displaying-block').parentNode;
var section_4 = document.getElementById('border-bottom-line').parentNode;
var section_5 = document.getElementById('overflow').parentNode;
var screen_y = 0;
var screen_temp = 0;
var parallax_x_pos = 120;

/* Needed Function (DOM add / remove class) */
function AddClassToElement(elem,value){
    var rspaces = /\s+/;
    var classNames = (value || "").split( rspaces );
    var className = " " + elem.className + " ",
    setClass = elem.className;
    
    for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
        if ( className.indexOf( " " + classNames[c] + " " ) < 0 ) {
            setClass += " " + classNames[c];
        }
    }
    elem.className = setClass.replace(/^\s+|\s+$/g,'');//trim
}

function RemoveClassFromElement(elem,value){
    var rspaces = /\s+/;
    var rclass = /[\n\t]/g
    var classNames = (value || "").split( rspaces );
    var className = (" " + elem.className + " ").replace(rclass, " ");
    
    for ( var c = 0, cl = classNames.length; c < cl; c++ ) {
        className = className.replace(" " + classNames[c] + " ", " ");
    }
    elem.className = className.replace(/^\s+|\s+$/g,'');//trim
}

function RollOver(elem, flag){
    var tmpNode = elem;
    if(flag == 0){
        elem.childNodes[1].childNodes[1].style.marginTop = "-50px";
        elem.childNodes[1].childNodes[1].style.paddingBottom = "50px";
    } else {
        elem.childNodes[1].childNodes[1].style.marginTop = "0";
        elem.childNodes[1].childNodes[1].style.paddingBottom = "0";
    }
}

/* INIT Loading */
setTimeout(function(){ AddClassToElement(viewport,"hidden_elem"); },0);
window.onload=function(){
    preloader.parentNode.removeChild(preloader);
    setTimeout(function(){RemoveClassFromElement(viewport,"hidden_elem");},0);
};

window.onscroll = function () {
    screen_y    = window.pageYOffset;
    screen_temp = window.innerHeight*0.6;
    var flag_2 = false;
    var flag_3 = false;
    var flag_4 = false;
    var flag_5 = false;

    if(screen_y > (section_2.offsetTop - screen_temp) && !flag_2){
        var tmpNodes_2 = section_2.childNodes[3].childNodes[3];
        setTimeout(function(){ AddClassToElement(section_2.childNodes[1],"fadeInDown");},0);
        setTimeout(function(){ AddClassToElement(tmpNodes_2.parentNode.childNodes[1],"fadeInDown");},300);
        setTimeout(function(){ AddClassToElement(tmpNodes_2.childNodes[1],"fadeInLeft");},500);
        setTimeout(function(){ AddClassToElement(tmpNodes_2.childNodes[3],"fadeInLeft");},600);
        setTimeout(function(){ AddClassToElement(tmpNodes_2.childNodes[5],"fadeInLeft");},700);
        setTimeout(function(){ AddClassToElement(tmpNodes_2.childNodes[7],"fadeInLeft");},800);
        setTimeout(function(){ AddClassToElement(tmpNodes_2.childNodes[9],"fadeInLeft");},900);
        flag_2 = true;
    }
    if (screen_y > (section_3.offsetTop - screen_temp) && !flag_3){
        var tmpNodes_3 = section_3.childNodes[1];
        setTimeout(function(){ AddClassToElement(tmpNodes_3.childNodes[1],"fadeInDown");},0);
        setTimeout(function(){ AddClassToElement(tmpNodes_3.childNodes[3],"bounceIn");},200);
        setTimeout(function(){ AddClassToElement(tmpNodes_3.childNodes[5],"fadeInDown");},800);
        flag_3 = true;
    } 
    if (screen_y > (section_4.offsetTop - screen_temp) && !flag_4){
        var parallax_node_1 = document.getElementById('border-bottom-line');
        var parallax_node_2 = document.getElementById('transformers');

            if(parallax_x_pos > 0){
                parallax_x_pos = parallax_x_pos - 30;
                parallax_node_1.style.marginLeft = 0;
                parallax_node_2.style.marginRight = 0;
            } 
            if(parallax_x_pos == 0){
                flag_4 = true;
                setTimeout(function(){ AddClassToElement(parallax_node_1.childNodes[5],"on");},200);
                setTimeout(function(){ AddClassToElement(parallax_node_1.childNodes[9],"on");},200);                
                setTimeout(function(){ AddClassToElement(parallax_node_2.childNodes[3].childNodes[5].childNodes[3].childNodes[1],"gage-20");},500);
            }
        parallax_node_1.style.marginLeft =  -(parallax_x_pos) + 'px';
        parallax_node_2.style.marginRight = -(parallax_x_pos) + 'px';        
    } 
    if (screen_y > (section_5.offsetTop - screen_temp) && !flag_5){
        var tmpNodes_5 = section_5.childNodes[1];
        setTimeout(function(){ AddClassToElement(tmpNodes_5.childNodes[1],"bounceIn");},0);
        setTimeout(function(){ AddClassToElement(tmpNodes_5.childNodes[3],"fadeInRight");},500);
        setTimeout(function(){ AddClassToElement(tmpNodes_5.childNodes[5],"fadeInLeft");},800);
        setTimeout(function(){ AddClassToElement(tmpNodes_5.childNodes[7],"fadeInDown");},1100);
        /*Remove animated class becasue rotate not accept*/
        setTimeout(function(){ RemoveClassFromElement(tmpNodes_5.childNodes[3],"animated fadeInRight");},1500);
        setTimeout(function(){ RemoveClassFromElement(tmpNodes_5.childNodes[5],"animated fadeInLeft");},1500);
        setTimeout(function(){ RemoveClassFromElement(tmpNodes_5.childNodes[7],"animated fadeInDown");},1500);
        flag_5 = true;
    }
};