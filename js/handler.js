var elements = [];

function renderFormEditor() {
    reRender($(".form"), $("#formEditor").text(), elements);
}

function renderPreview() {
    reRender($(".form"), $("#formPreview").text(), elements);
}

function chooseElement() {
    $(".modal").modal();
}

function addElement() {
    var elementType = $("input[type=radio]:checked").val();
    elements.push(elementType);
    renderFormEditor();
}

function removeElement(index) {
    elements.splice(index, 1);
    renderFormEditor();
}

function preview() {
    renderPreview();
}

function edit() {
    renderFormEditor();
}

function reRender($container, template, elements) {
    $container.html(_.template(template)(elements));
}