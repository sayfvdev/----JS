const body = document.body
function Header(title) {
    // a (elements)
    const header = document.createElement("header")
    const left = document.createElement("div")
    const right = document.createElement("div")
    const nav = document.createElement("nav")
    const h1 = document.createElement("h1")
    const link_courses = document.createElement("a")
    const link_study = document.createElement("a")

    for (let i = 0; i < 4; i++) {
        const round = document.createElement('div')
        round.classList.add('round')
        right.append(round)
    }

    // b (styling)
    // class
    left.classList.add('left')
    right.classList.add('right')
    // attributes
    link_courses.href = "#"
    link_study.href = "#"
    // text
    link_courses.innerText = "All courses"
    link_study.innerText = "My study"
    h1.innerHTML = "wepro"

    // c (constructing)
    header.append(left, right)
    left.append(h1, nav)
    nav.append(link_courses, link_study)

    body.append(header)

}
Header()

const cardContainer = document.createElement("div");
cardContainer.classList.add("card_container");
body.appendChild(cardContainer);
function Card() {
    const card = document.createElement("div");
    const img_product = document.createElement("div");
    const product_text = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    card.classList.add('card');
    img_product.classList.add('img_product');
    product_text.classList.add('product_text');
    h2.innerText = "Hello World!";
    p.innerText = "Hello World!";

    card.append(img_product, product_text);
    product_text.append(h2, p);
    cardContainer.append(card);
}
Card();
Card();
Card();


function People(name, age) {
    const people_container = document.querySelector('.people_container') || document.createElement("div");
    people_container.classList.add('people_container');

    const people_card = document.createElement("div");
    const name_top = document.createElement("div");
    const h3 = document.createElement("h3");
    const age_bottom = document.createElement("div");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");

    people_card.classList.add('people_card');
    name_top.classList.add('name_top');
    age_bottom.classList.add('age_bottom');

    h3.innerHTML = name;
    h5.innerHTML = "Age";
    p.innerText = age;

    people_card.append(name_top, age_bottom);
    name_top.append(h3);
    age_bottom.append(h5, p);
    people_container.append(people_card);

    body.append(people_container);
}
People("Chris Diaz", 91);
People("P.Diddy", 55);
People("Di Caprio", 49);


function Food(name, price) {
    const food_container = document.querySelector('.food_container') || document.createElement('div');
    const food_menu = document.createElement('div');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');

    food_container.classList.add('food_container');
    food_menu.classList.add('food_menu');

    h5.innerText = name;
    p.innerText = `${price}$`;

    food_menu.append(h5, p);
    food_container.append(food_menu);

    document.body.append(food_container);

}
Food("Йогурт", 25);
Food("Сыр", 9999);
Food("Молоко", 15);

const app = document.getElementById("app");
const tableContainer = document.createElement("div");
tableContainer.classList.add("table_container");
app.appendChild(tableContainer);
function Create_table() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const headers = ["No", "Имя студента", "Год рождения", "Действия"];

    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.innerText = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);

    const students = [
        { no: 1, name: "Sayfullaev Jasur", year: 2007 },
        { no: 2, name: "Рахматжанов Ислом", year: 2007 },
        { no: 3, name: "Якубов Алан", year: "НЕ ЗНАЮ" }
    ];

    students.forEach(student => {
        const row = document.createElement("tr");

        const cellNo = document.createElement("td");
        cellNo.innerText = student.no;

        const cellName = document.createElement("td");
        cellName.innerText = student.name;

        const cellYear = document.createElement("td");
        cellYear.innerText = student.year;

        const cellActions = document.createElement("td");
        const editIcon = document.createElement("span");
        const deleteIcon = document.createElement("span");

        editIcon.innerHTML = "&#9998;";
        deleteIcon.innerHTML = "&#128465;";

        editIcon.classList.add("icon");
        deleteIcon.classList.add("icon");

        cellActions.append(editIcon, deleteIcon);
        cellActions.classList.add("actions");


        row.append(cellNo, cellName, cellYear, cellActions);
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);


    tableContainer.appendChild(table);
    document.body.append(tableContainer);
}
Create_table();

function Uzum(title, rating, credit, fullPrice, imageSrc) {
    const uzum_container = document.querySelector('.uzum_container') || document.createElement('div');
    const uzum_card = document.createElement('div');
    const img_scale = document.createElement('div');
    const uzum_text = document.createElement('div');
    const h3 = document.createElement('h3');
    const span = document.createElement('span');
    const p = document.createElement('p');
    const price_card = document.createElement('div');
    const span_two = document.createElement('span');
    const bg_card = document.createElement('img');

    uzum_container.classList.add('uzum_container');
    uzum_card.classList.add('uzum_card');
    img_scale.classList.add('img_scale');
    uzum_text.classList.add('uzum_text');
    price_card.classList.add('price_card');

    h3.innerText = title;
    span.innerText = rating;
    p.innerText = credit;
    span_two.innerText = fullPrice;

    bg_card.src = imageSrc;
    bg_card.alt = "product image";

    img_scale.append(bg_card);
    uzum_text.append(h3, span, p);
    price_card.append(span_two);
    uzum_card.append(img_scale, uzum_text, price_card);
    uzum_container.append(uzum_card);


    body.append(uzum_container);
}
Uzum("Масло подсолнечное Золотая Ветвь, 900 мл", "★ 5.0 (1132 отзывов)", "984 сум/мес", "13 900 сум", "/oil.jpg");
Uzum("Куртка мужская", "★ 4.7 (68 отзывов)", "009 сум/мес", "189 000 сум", "/kurtka.jpg");
