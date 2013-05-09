document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    
    $(".BtnEsci").click(function () {
        navigator.app.exitApp();
    });

    $(".BtnInit").click(function (e) {
        e.preventDefault();
        LoadPaginaLocalizzazione();
    });
    

    $(".BtnListaPiadinerie").click(function() {
        GetCurrentPositionAndLoadPaginaPiadinerie();
    });

    LoadPaginaLocalizzazione();
}






