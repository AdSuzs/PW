function a(){
    var col1 = document.getElementById("colun1");
    var col2 = document.getElementById("colun2");
    var col3 = document.getElementById("colun3");
    var col4 = document.getElementById("colun4");

    col1.style.cssText = "color:red";
    col2.style.cssText = "color:red";
    col3.style.cssText = "color:red";
    col3.style.cssText = "color:red";

    var v1 = document.forms.col1.value;
    var v2 = document.forms.col2.value;
    var v3 = document.forms.col3.value;
    var v4 = document.forms.col4.value;
    var larg = document.forms.larg.value;

    col1.style.setProperty("width", "100px");
    col1.style.setProperty("height", "50px");

    col2.style.setProperty("width", larg+"px");
    col2.style.setProperty("position", "relative");
    col2.style.setProperty("height", v2+"px");
    col2.style.setProperty("right", "-"+(larg+2)+"px");

    col3.style.setProperty("width", larg+"px");
    col3.style.setProperty("position", "relative");
    col3.style.setProperty("height", v3+"px");
    col3.style.setProperty("right", "-"+(larg+larg+2)+"px");

    col4.style.setProperty("width", larg+"px");
    col4.style.setProperty("position", "relative");
    col4.style.setProperty("height", v4+"px");
    col4.style.setProperty("right", "-"+(larg+larg+larg+2)+"px");
}





