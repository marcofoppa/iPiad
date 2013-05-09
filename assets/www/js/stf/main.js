document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    
    $(".BtnEsci").click(function () {
        navigator.app.exitApp();
    });

    $(".BtnInit").click(function (e) {
        e.preventDefault();
        LoadPaginaLocalizzazione();
    });
    

    $(".BtnListaPiadinerie").click(function (e) {
        e.preventDefault();
        GetCurrentPositionAndLoadPaginaPiadinerie();
    });

    $('.BtnLoadMenuPiadine').click(function (e) {
        e.preventDefault();
        LoadPaginaMenuPiadine();
    });

    LoadPaginaLocalizzazione();
}






