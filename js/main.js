$(function() {
    $("#btnAdd").click(function () {
        addFormElement();
    });
    $("#btnConfirm").click(function () {
        confirmAddElement($("input[type=radio]:checked").val());
    });
});
