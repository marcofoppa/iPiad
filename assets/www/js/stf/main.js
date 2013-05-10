document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
    $.mobile.phonegapNavigationEnabled = true;
    $.mobile.buttonMarkup.hoverDelay = 0;
    $.mobile.allowCrossDomainPages = true;
    
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
    
    $('.BtnConfermaQta').click(function () {
        OrdinaPiadina();
    }); 

    $('.BtnClosePopup').click(function (e) {
        e.preventDefault();
        ComponiMenu(MenuPiadine);
    });
    
    $('#btnMeno').click(function (e) {
        e.preventDefault();
        AggiornaQuantita(-1);
    });
    
    $('#btnPiu').click(function (e) {
        e.preventDefault();
        AggiornaQuantita(1);
    });

    rowPiadine = $('#listViewPiadine').html();
    rowPiadineria = $('#listapiadinerie').html();
    LoadPaginaLocalizzazione();
}






