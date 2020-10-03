const BACKEND_URL = 'http://localhost:8080';

let $body = document.querySelector('#body')

let tags = [];

init();

function init () {
    load_home_page();
}

function load_home_page () {
    let $template = document.querySelector('#home-page');
    $body.innerHTML = $template.innerHTML;

    let $load_registration_page_btn = document.querySelector('#load-registration-page-btn');
    $load_registration_page_btn.addEventListener('click', load_registration_page);

    let $create_new_tag_btn = document.querySelector('#create-new-tag-btn');
    $create_new_tag_btn.addEventListener('click', load_create_tag_page);
}

function load_registration_page () {
    let $template = document.querySelector('#registration-page');
    $body.innerHTML = $template.innerHTML;

    let $registration_btn = document.querySelector('#registration-btn');
    $registration_btn.addEventListener('click', () => {
        let $name_input = document.querySelector('#name-input');
        let $email_input = document.querySelector('#email-input');
        let $password_input = document.querySelector('#password-input');
        register($name_input.value, $email_input.value, $password_input.value);
    });

    let $back_btn = document.querySelector('#back-home-page-btn');
    $back_btn.addEventListener('click', load_home_page);
}

function register (name, email, password) {
    console.log(name);
    console.log(email);
    console.log(password);

    fetch(BACKEND_URL + '/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'name': name,
            'email': email,
            'password': password
        })
    })
    .then(response => response.json())
    .then(data => console.log(data));

    load_home_page();
}

function load_create_tag_page () {
    let $template = document.querySelector('#create-tag-page');
    $body.innerHTML = $template.innerHTML;

    let $create_tag_btn = document.querySelector('#create-tag-btn');
    $create_tag_btn.addEventListener('click', () => {
        let $tag_name_input = document.querySelector('#tag-name-input');
        let tag_name = $tag_name_input.value;
        $tag_name.innerText = '';
        create_tag_btn(tag_name);
    })

    let $back_btn = document.querySelector('#back-home-page-btn');
    $back_btn.addEventListener('click', load_home_page);
}

function create_tag_btn (tag_name) {
    tags.push(tag_name);
    console.log(tags);
    load_home_page();
}

console.log('IT WORKS');