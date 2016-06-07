var elements = JSON.parse(localStorage.getItem("elements")) || [];
console.log(elements)

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

function preview() {
    localStorage.setItem("elements", JSON.stringify(elements));
    window.location = "./preview.html";
}

function edit() {
    window.location = "./index.html";
}

function render(isPreview) {
    var $form = $(".form");
    $form.empty();
    $.each(elements, function (_index, ele) {
        console.log(ele)
        $form.append($("<input type='" + ele + "' />"));
        if (!isPreview) {
            $form.append($("<button name='btnDelete' class='btn btn-danger btn-sm' onclick='removeElement(" + _index + ")'>-</button>"));
        }
        $form.append($("<br/>"));
    })
}