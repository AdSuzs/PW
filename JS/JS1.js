for (var i = 1; i <= 10; i++){
        document.writeln("<table border='1' style= 'margin:5px; float:left;'>");
        document.writeln("<thead><tr><td colspan='2'> Produtos de "+i+"</td> </tr></thead>");
        document.writeln("<tbody>");
    for (var j = 1; j <= 10; j++){
        document.writeln("<tr><td>"+i+"x"+j+"</td>");
        document.writeln("<td>"+i*j+"</td></tr>");
    }    
    document.writeln("</tbody></table>");
}    