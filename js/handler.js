var elements = [];

function addFormElement() {
    console.log("add form element")
    $(".modal").modal();
}

function confirmAddElement(elementType) {
    elements.push(elementType);
    console.log(elements)
    render();
}

function removeElement(index) {
    console.log(index)
    elements.splice(index, 1);
    render();
}

function render() {
    var $form = $(".form");
    $form.empty();
    $.each(elements, function (_index, ele) {
        console.log(ele)
        $form.append($("<input type='" + ele + "' />"));
        $form.append($("<button name='btnDelete' class='btn btn-danger btn-sm' onclick='removeElement(" + _index + ")'>-</button>"));
        $form.append($("<br/>"));
    })
}