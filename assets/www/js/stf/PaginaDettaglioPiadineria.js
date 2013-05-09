

function getMappaImg(lat, lon) {
    try {
        //Leggo le dimensioni dello schermo
        var width = window.innerWidth;
        var height = window.innerHeight;

        //Imposto una dimensione quadrata utilizzando la dimensione minore (larghezza - altezza)
        if (width > height) {
            width = height;
        }
        else if (height > width) {
            height = width;
        }

        var zoom = 16;

        var content = "<img alt='' src='https://maps.googleapis.com/maps/api/staticmap?center=[lat],[lon]&zoom=[zoom]&size=[width]x[height]&markers=[lat],[lon]&sensor=false' width='[width]' height='[height]' />";

        content = content.replace('[zoom]', zoom);
        content = content.replace('[lat]', lat).replace('[lon]', lon);
        content = content.replace('[lat]', lat).replace('[lon]', lon);
        content = content.replace('[width]', width).replace('[height]', height);
        content = content.replace('[width]', width).replace('[height]', height);

        return content;
        
    } catch(e) {
        alert("Errore in getMappaImg :" + e);
    } 
}



function LoadPaginaDettaglioPiadineria(piadineria) {
    $.mobile.changePage("#dettaglioPiadineria", { transition: "slideup", changeHash: false });
    $("#map_canvas").html('').prepend(getMappaImg(piadineria.latitude, piadineria.longitude));
}
