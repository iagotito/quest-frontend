let $body = document.querySelector("#body")

let tags = [];

init();

function init () {
    load_home_page();
}

function load_home_page () {
    let $template = document.querySelector("#home-page");
    $body.innerHTML = $template.innerHTML;

    let $create_new_tag_btn = document.querySelector("#create-new-tag-btn");
    $create_new_tag_btn.addEventListener("click", () => {
        load_create_tag_page();
    })
}

function load_create_tag_page () {
    let $template = document.querySelector("#create-tag-page");
    $body.innerHTML = $template.innerHTML;

    let $create_tag_btn = document.querySelector("#create-tag-btn");
    $create_tag_btn.addEventListener("click", () => {
        let $tag_name = document.querySelector("#tag-name-txt");
        let tag_name = $tag_name.value;
        $tag_name.innerText = "";
        create_tag_btn(tag_name);
    })

    let $back_btn = document.querySelector("#back-home-page-btn");
    $back_btn.addEventListener("click", () => {
        load_home_page();
    })
}

function create_tag_btn (tag_name) {
    tags.push(tag_name);
    console.log(tags);
    load_home_page();
}

console.log("IT WORKS");