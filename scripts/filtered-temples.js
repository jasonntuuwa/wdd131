
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 111206,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg",
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg",
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg",
    },
    {
        templeName: "Cardston Alberta",
        location: "Cardston, Alberta, Canada",
        dedicated: "1923, August, 26",
        area: 24328,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-13287-main.jpg",
    },
];


const galleryEl = document.getElementById("templeGallery");
const galleryHeading = document.getElementById("galleryHeading");
const navLinks = document.querySelectorAll("nav a");
const menuBtn = document.getElementById("menu");
const navList = document.getElementById("navList");


function renderTemples(templeArray) {
    galleryEl.innerHTML = "";

    templeArray.forEach((temple) => {
        const card = document.createElement("figure");
        card.classList.add("temple-card");

        card.innerHTML = `
      <div class="temple-info">
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </div>
      <img
        src="${temple.imageUrl}"
        alt="${temple.templeName}"
        loading="lazy"
        width="400"
        height="250"
      />
    `;

        galleryEl.appendChild(card);
    });
}


function getDedicatedYear(dedicatedString) {
    return parseInt(dedicatedString.split(",")[0].trim(), 10);
}

function filterTemples(filterType) {
    switch (filterType) {
        case "old":
            return temples.filter((t) => getDedicatedYear(t.dedicated) < 1900);
        case "new":
            return temples.filter((t) => getDedicatedYear(t.dedicated) > 2000);
        case "large":
            return temples.filter((t) => t.area > 90000);
        case "small":
            return temples.filter((t) => t.area < 10000);
        case "home":
        default:
            return temples;
    }
}


navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filterType = link.dataset.filter;
        const filtered = filterTemples(filterType);

        renderTemples(filtered);

        
        galleryHeading.textContent =
            link.textContent.charAt(0).toUpperCase() + link.textContent.slice(1);

        
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        
        navList.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});


menuBtn.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
});


document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    document.lastModified;


renderTemples(temples);