$(document).ready(function(){
    arr = [];
    $("#boton").click(function(){
        $.ajax({
            type: 'GET',
            url: "https://apis.digital.gob.cl/fl/feriados/2022",
            dataType: "json",
            success: function(data){
                var theadrow =  "<tr>";
                $.each(Object.keys(data[0]), function(i, item){
                    arr.push(item);
                    theadrow += "<td>" + capitalizar(item) + "</td>";
                });
                $(theadrow).append("</tr>");
                $("#tabla>thead").append(theadrow);
                var tbodyrow =  "<tr>";
                $.each(data, function(i, item){
                    $.each(arr, function(i, x){
                        console.log(typeof(item[x]))
                        if(item[x] == 1 || item[x] == 0){
                            if (item[x] == 1){
                                item[x] = "SI";
                            } else {
                                item[x] = "NO";
                            }
                        }
                        tbodyrow += "<td>"+ item[x] +"</td>";
                    })
                    tbodyrow+= "</tr>";
                });
                $("#tabla>tbody").append(tbodyrow);
            },
        });
    });
});

function capitalizar(palabra){
    return palabra[0].toUpperCase()+palabra.slice(1);
}