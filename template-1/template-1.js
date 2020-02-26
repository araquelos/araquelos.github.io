$(function() {
    // Comportamento de alternância da barra lateral
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
    });
});