$(document).ready(function(){
    $("#boton").click(function(){
        $.ajax({
            type: 'GET',
            url: "https://apis.digital.gob.cl/fl/feriados/2022",
            dataType: "json",
            success: function(data){
                var theadrow =  "<tr>";
                $.each(Object.keys(data[0]), function(i, item){
                    if(item != "comentarios"){
                        theadrow+= "<td>" + capitalizar(item) + "</td>";
                    }
                });
                $(theadrow).append("</tr>");
                $("#tabla>thead").append(theadrow);
                $.each(data, function(i, item){
                    var irrenunciable = item.irrenunciable > 0 ? "SI" : "NO";
                    var tbodyrow =  "<tr>" +
                                        "<td>" + item.nombre + "</td>" +
                                        "<td>" + item.fecha + "</td>" +
                                        "<td>" + irrenunciable + "</td>" +
                                        "<td>" + item.tipo + "</td>" +
                                    "</tr>";
                    $("#tabla>tbody").append(tbodyrow);
                });
            },
        });
    });
});

function capitalizar(palabra){
    return palabra[0].toUpperCase()+palabra.slice(1);
}