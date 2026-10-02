const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const templeCards = document.querySelector("#temple-cards");
const pageTitle = document.querySelector("main h2");

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Concepción Chile",
        location: "Concepción, Chile",
        dedicated: "2018, October, 28",
        area: 23095,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-270-thumb.jpg"
    },
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 24",
        area: 53500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-29872-thumb.jpg"
    },
    {
        templeName: "Santiago Chile",
        location: "Santiago, Chile",
        dedicated: "1983, September, 15",
        area: 20831,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/santiago-chile-temple/santiago-chile-temple-7572.jpg"
    }
];

function displayTemples(templesToDisplay) {
    templeCards.innerHTML = "";

    templesToDisplay.forEach((temple) => {
        const card = document.createElement("section");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area} sq ft</p>
            <img
                src="${temple.imageUrl}"
                alt="${temple.templeName} Temple"
                loading="lazy"
            >
        `;

        templeCards.appendChild(card);
    });
}

homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

oldLink.addEventListener("click", (event) => {
    event.preventDefault();

    const oldTemples = temples.filter((temple) => {
        return parseInt(temple.dedicated) < 1900;
    });

    pageTitle.textContent = "Old Temples";
    displayTemples(oldTemples);
});

newLink.addEventListener("click", (event) => {
    event.preventDefault();

    const newTemples = temples.filter((temple) => {
        return parseInt(temple.dedicated) > 2000;
    });

    pageTitle.textContent = "New Temples";
    displayTemples(newTemples);
});

largeLink.addEventListener("click", (event) => {
    event.preventDefault();

    const largeTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });

    pageTitle.textContent = "Large Temples";
    displayTemples(largeTemples);
});

smallLink.addEventListener("click", (event) => {
    event.preventDefault();

    const smallTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });

    pageTitle.textContent = "Small Temples";
    displayTemples(smallTemples);
});

displayTemples(temples);