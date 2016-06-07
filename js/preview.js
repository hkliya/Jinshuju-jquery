$(function () {
    var isPreview = true;
    render(isPreview);
     
    $("#btnEdit").click(function () {
        edit();
    });
})