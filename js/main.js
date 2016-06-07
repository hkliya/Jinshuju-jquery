$(function() {
    var isPreview = false;
    render(isPreview);
    
    $("#btnAdd").click(function () {
        addFormElement();
    });

    $("#btnConfirm").click(function () {
        confirmAddElement($("input[type=radio]:checked").val());
    });
    
    $("#btnPreview").click(function () {
        preview();
    });
});
