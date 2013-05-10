


function LoadPaginaLocalizzazione() {
    

    $.mobile.changePage("#localizzazione", {  changeHash: false });

    $.mobile.loading('show', {
        text: 'Sto caricando la tua posizione. Attendi !!!',
        textVisible: true,
        theme: 'z',
        html: ""
    });
    
    var wait = setInterval(function () {
        window.clearInterval(wait);
        GetCurrentPositionAndLoadPaginaPiadinerie();
    }, 3000);



}

function GetCurrentPositionAndLoadPaginaPiadinerie() {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            
            GetPiadinerie(position.coords.latitude, position.coords.longitude, function () { LoadPaginaPiadinerie(); });
        },
        function (error) {
            alert('code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n');
        });
}

