// ============================================
// UGANDA TRIP PLANNER – APP.JS
// ============================================

// ---------- DATA ----------

const TRIP_START = new Date(2027, 5, 14); // June 14, 2027 (mid-June)

const destinations = [
    {
        id: 1,
        name: "Entebbe & Jinja",
        slug: "entebbe-jinja",
        nights: 3,
        enabled: true,
        imageUrl: "photos/jinja.jpg",
        weather: "Warm and pleasant. Start of dry season, ~26°C (79°F).",
        description: "Entebbe, situated on a peninsula in Lake Victoria, serves as Uganda's tranquil gateway, boasting lush botanical gardens and a relaxed lakeside atmosphere. A drive east leads to Jinja, the historical adventure capital of East Africa, famously positioned at the source of the Nile River. Here, the Nile flows out of Lake Victoria, offering world-class white-water rafting, kayaking, and scenic sunset boat cruises along the riverbanks, surrounded by colonial-era architecture and vibrant local markets.",
        activities: "Pick up rental car in Entebbe. Drive to Jinja to see the Source of the Nile. Optional sunset Nile cruise or white-water rafting.",
        lat: 0.4244, lng: 33.2041,
        driveNext: { to: "Sipi Falls", dist: "~193 km", time: "3h 30m" },
        lodge: { name: "2 Friends Beach / The Haven", rate: 340 / 3, url: "https://thehaven-uganda.com/", photo: "photos/haven.jpg" },
        camp: { name: "White Nile Rafting Camp", rate: 30 / 3, url: "https://raftafrica.com/", photo: "photos/white_nile_rafting.webp" },
        gateway: { name: "Home on the Nile", rate: 50 / 3, url: "https://2friends.info/", photo: "photos/home on teh nile.jpg" },
        permits: 0,
        parkFeeMin: 0,
        parkFeeMax: 0,
    },
    {
        id: 2,
        name: "Sipi Falls",
        slug: "sipi-falls",
        nights: 2,
        enabled: true,
        imageUrl: "photos/sipi falls.jpeg",
        weather: "Cooler at elevation, ~22°C (72°F), cool nights.",
        description: "Nestled on the foothills of Mount Elgon near the Kenyan border, Sipi Falls is a series of three spectacular waterfalls cascading down sheer volcanic cliffs. The area is renowned for its cool mountain air, temperate climate, and panoramic views of the Kyoga plains. Sipi is also a hub for Arabica coffee production; visitors can hike through local farms, participate in the traditional roasting process, and enjoy some of the world's finest organic coffee while taking in the stunning mountain vistas.",
        activities: "Guided hike to three spectacular waterfalls. Local Arabica coffee processing tour.",
        lat: 1.3500, lng: 34.3700,
        driveNext: { to: "Murchison Falls NP", dist: "~348 km", time: "6h 10m" },
        lodge: { name: "La Cama Lodge", rate: 60, url: "https://www.lacamlodge.com/", photo: "photos/lacama.webp" },
        camp: { name: "Crows Nest Sipi Camping", rate: 7, url: "https://crowsnestsipi.com/camping-ground/", photo: "photos/crows_nest_sipi.webp" },
        gateway: { name: "Teryet Safari", rate: 35, url: "https://teryetsafari.com/", photo: "photos/teryet.webp" },
        permits: 0,
        parkFeeMin: 0,
        parkFeeMax: 0,
    },
    {
        id: 3,
        name: "Murchison Falls NP",
        slug: "murchison-falls-np",
        nights: 3,
        enabled: true,
        imageUrl: "photos/murchison_falls.webp",
        weather: "Hot and dry, ~30°C (86°F).",
        description: "Murchison Falls National Park is Uganda's largest protected area, bisected by the Victoria Nile. The park's crowning jewel is the dramatic Murchison Falls, where the entire Nile squeezes through a narrow 7-meter gorge before plunging 43 meters into the 'Devil's Cauldron.' This park offers classic savanna safaris, home to elephants, giraffes, lions, and leopards, alongside river cruises teeming with hippos, massive Nile crocodiles, and rare shoebill storks.",
        activities: "Sunrise game drives. Boat safari up the Nile to the falls. Hike to the 'Top of the Falls.'",
        lat: 2.2833, lng: 31.6833,
        driveNext: { to: "Ziwa Rhino Sanctuary", dist: "~78 km", time: "1h 20m" },
        lodge: { name: "Pakuba Safari Lodge", rate: 135, url: "https://pakubasafarilodge.com/", photo: "photos/pakuba_lodge.webp" },
        camp: { name: "Red Chilli Rest Camp", rate: 8, url: "https://redchillihideaway.com/tour/red-chilli-rest-camp-murchison/", photo: "photos/red_chilli.jpg" },
        gateway: { name: "Gipir and Labongo", rate: 40, url: "https://www.gipirandlabongo.com/", photo: "photos/gipir_and_labongo.jpg" },
        permits: 0,
        parkFeeMin: 45,
        parkFeeMax: 180,
    },
    {
        id: 4,
        name: "Ziwa Rhino Sanctuary",
        slug: "ziwa-rhino-sanctuary",
        nights: 1,
        enabled: true,
        imageUrl: "photos/ziwa.jpeg",
        weather: "Warm and dry.",
        description: "Ziwa Rhino Sanctuary is a crucial conservation project located in Nakasongola, serving as the only place in Uganda where you can see wild southern white rhinos. Established in 2005 to reintroduce rhinos back into the country's national parks, the sanctuary is home to a growing population of rhinos protected by 24-hour armed rangers. Visitors can track these magnificent, prehistoric creatures on foot, offering an intimate and thrilling wildlife encounter.",
        activities: "On-foot rhino tracking with a ranger. Nighttime walking safari.",
        lat: 1.7333, lng: 32.1000,
        driveNext: { to: "Kibale Forest NP", dist: "~285 km", time: "5h" },
        lodge: { name: "Ziwa Rhino & Wildlife Ranch", rate: 140, url: "https://ziwarhinoandwildliferanch.com/", photo: "photos/ziwa_wildlife_ranch.webp" },
        camp: { name: "Ziwa Rhino Camping", rate: 25, url: "https://ziwarhinoandwildliferanch.com/accommodation/camping/", photo: "photos/ziwa.jpeg" },
        gateway: { name: "Saltek Hotel", rate: 15, url: "https://saltekhotel.com/", photo: "photos/saltek_hotel.jpg" },
        permits: 50,
        parkFeeMin: 0,
        parkFeeMax: 0,
    },
    {
        id: 5,
        name: "Kibale Forest NP",
        slug: "kibale-forest-np",
        nights: 3,
        enabled: true,
        imageUrl: "photos/kibale.jpg",
        weather: "Humid rainforest, ~25°C (77°F).",
        description: "Kibale Forest National Park is celebrated as the primate capital of East Africa. This dense tropical rainforest shelters 13 primate species, most notably a population of over 1,500 wild chimpanzees. Guided chimpanzee tracking here offers an unparalleled opportunity to observe these highly intelligent human relatives grooming, feeding, and swinging through the canopy. The park also features the Bigodi Wetland Sanctuary, a paradise for birdwatchers and primate walks.",
        activities: "Chimpanzee Trekking. Guided walk through Bigodi Wetland Sanctuary.",
        lat: 0.4833, lng: 30.3833,
        driveNext: { to: "Queen Elizabeth NP", dist: "~75 km", time: "1h 40m" },
        lodge: { name: "Isunga Lodge", rate: 100, url: "https://isungalodge.com/", photo: "photos/ISUNGA_lodge.jpg" },
        camp: { name: "Chimpanzee Forest Lodge", rate: 40, url: "https://www.chimpanzeeforestlodge.com/rooms/", photo: "photos/chimpanzee_forest_lodge.jpg" },
        gateway: { name: "Kibale Eco Home", rate: 17, url: "https://www.booking.com/hotel/ug/kibale-eco-home.en-gb.html", photo: "photos/kibale_eco_home.jpg" },
        permits: 300,
        parkFeeMin: 40,
        parkFeeMax: 160,
    },
    {
        id: 6,
        name: "Queen Elizabeth NP",
        slug: "queen-elizabeth-np",
        nights: 2,
        enabled: true,
        imageUrl: "photos/queen_elizabeth.jpeg",
        weather: "Warm and sunny, ~28°C (82°F).",
        description: "Spanning the equator, Queen Elizabeth National Park is Uganda's most popular safari destination, featuring a diverse landscape of savanna, volcanic craters, humid forests, and fertile wetlands. The Kazinga Channel, connecting Lakes Edward and George, is a magnet for wildlife and hosts one of the world's densest concentrations of hippopotamuses. The park is also famous for its tree-climbing lions in the southern Ishasha sector and chimpanzees in Kyambura Gorge.",
        activities: "Kazinga Channel boat cruise. Game drives in Kasenyi plains and Ishasha sector (tree-climbing lions).",
        lat: -0.2000, lng: 30.0000,
        driveNext: { to: "Bwindi Impenetrable Forest", dist: "~270 km", time: "6h" },
        lodge: { name: "The Bush Lodge", rate: 115, url: "https://naturelodgesuganda.com/the-bush-lodge/", photo: "photos/the_bush_lodge.jpg" },
        camp: { name: "Engiri Game Lodge", rate: 35, url: "https://engirigamelodge.com/rates/", photo: "photos/engiri.jpg" },
        gateway: { name: "Elephant Center Campsite", rate: 26, url: "https://www.booking.com/hotel/ug/the-elephant-center-campsite.en-gb.html", photo: "photos/The elephant center.jpg" },
        permits: 0,
        parkFeeMin: 40,
        parkFeeMax: 160,
    },
    {
        id: 7,
        name: "Bwindi Impenetrable",
        slug: "bwindi-impenetrable",
        nights: 3,
        enabled: true,
        imageUrl: "photos/bwindi.jpeg",
        weather: "Cool and damp, ~20°C (68°F), 10°C at night.",
        description: "Bwindi Impenetrable National Park is a UNESCO World Heritage Site consisting of a vast, ancient primeval rainforest dating back over 25,000 years. The park is globally renowned for hosting roughly half of the world's remaining population of endangered mountain gorillas. Gorilla trekking through the steep, mist-covered ridges of the park is a profound, once-in-a-lifetime experience. The forest is also rich in biodiversity, supporting hundreds of bird, butterfly, and mammal species.",
        activities: "Mountain Gorilla Trekking. Batwa cultural experience.",
        lat: -1.0500, lng: 29.6167,
        driveNext: { to: "Lake Bunyonyi", dist: "~80 km", time: "2h 30m" },
        lodge: { name: "Bakiga Lodge", rate: 125, url: "https://bakigalodge.org/", photo: "photos/bakiga.jpg" },
        camp: { name: "Karungi Camp", rate: 25, url: "https://karungicamp.com/lodging/", photo: "photos/karungi.jpg" },
        gateway: { name: "Bwindi Forest Lodge", rate: 51, url: "https://www.booking.com/hotel/ug/bwindi-forest-lodge.en-gb.html", photo: "photos/bwindi_forest_lodge.jpg" },
        permits: 800,
        parkFeeMin: 0,
        parkFeeMax: 120,
    },
    {
        id: 8,
        name: "Lake Bunyonyi",
        slug: "lake-bunyonyi",
        nights: 3,
        enabled: true,
        imageUrl: "photos/LAKE-BUNYONYI.jpg",
        weather: "Mild and breezy, ~23°C (73°F).",
        description: "Lake Bunyonyi, meaning 'Place of many little birds,' is a picturesque freshwater lake dotted with 29 terraced islands and framed by steep terraced hillsides. It is believed to be the second deepest lake in Africa, and its safe, bilharzia-free waters make it a popular retreat for swimming, canoeing in traditional dugouts, and relaxing. The lake's peaceful atmosphere and stunning landscapes provide a perfect wind-down spot after strenuous safaris.",
        activities: "Swimming, dugout canoeing, island hopping.",
        lat: -1.2833, lng: 29.9167,
        driveNext: { to: "Lake Mburo NP", dist: "~210 km", time: "4h 30m" },
        lodge: { name: "Lake Bunyonyi Rock Resort", rate: 115, url: "https://www.lakebunyonyirockresort.net/double-cottage/", photo: "photos/Lake-Bunyonyi-Rock-Resort-balcony.webp" },
        camp: { name: "Lake Bunyonyi Rock Camping", rate: 20, url: "https://www.lakebunyonyirockresort.net/private-camp-site/", photo: "photos/lake-bunyonyi-rock-resort-2.webp" },
        gateway: { name: "Bunyonyi Overland Resort", rate: 20, url: "https://mbzgroup.africa/bunyonyioverlandresort", photo: "photos/bunyonyi_overland_resort.jpg" },
        permits: 0,
        parkFeeMin: 0,
        parkFeeMax: 0,
    },
    {
        id: 9,
        name: "Lake Mburo NP",
        slug: "lake-mburo-np",
        nights: 1,
        enabled: true,
        imageUrl: "photos/lake_mburo.jpeg",
        weather: "Sunny and dry, ~27°C (81°F).",
        description: "Lake Mburo National Park is a compact gem characterized by acacia woodlands, grassy valleys, and a series of lakes. It is the closest savanna park to Kampala/Entebbe and is unique for being the only park in western Uganda containing impalas and massive elands. Lacking elephants and lions, Lake Mburo is ideal for walking safaris, horseback safaris, and mountain biking, allowing visitors to get remarkably close to zebras, giraffes, and buffaloes.",
        activities: "Walking safaris & mountain bike safaris among zebras, giraffes, impalas. Sunset boat cruise.",
        lat: -0.6167, lng: 30.9500,
        driveNext: { to: "Entebbe (Departure)", dist: "~290 km", time: "4h 30m" },
        lodge: { name: "Rwakobo Rock", rate: 130, url: "https://www.rwakoborock.com/rooms", photo: "photos/rwakobo.webp" },
        camp: { name: "Leopard Rest Camp", rate: 40, url: "http://leopardrestcamp.com/bush_camping.html", photo: "photos/leopard_rest_camp.jpg" },
        gateway: { name: "Hyena Hill Lodge", rate: 50, url: "https://www.booking.com/hotel/ug/hyena-hill-lodge.en-gb.html", photo: "photos/hyena_hill.jpg" },
        permits: 0,
        parkFeeMin: 40,
        parkFeeMax: 80,
    }
];

// Fixed costs
const FLIGHTS_PP = 1200;
const DAILY_COST_RATE = 20; // per day per person (fuel, food, beers etc)
const VEHICLE_RAV4_DAY = 65; // per day total (split by 2)
const VEHICLE_LC_DAY = 95;
const VEHICLE_RTT_DAY = 110;

// ---------- STATE ----------

let mapInstance = null;
let mapMarkers = [];
let mapPolyline = null;
let tickerSelectedVehicle = 'rav4';

// ---------- INIT ----------

document.addEventListener('DOMContentLoaded', () => {
    renderItinerary();
    initMap();
    updateAll();
});

// ---------- DATE HELPERS ----------

function formatDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}`;
}

function formatDateFull(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function computeDates() {
    const enabled = destinations.filter(d => d.enabled);
    let currentDate = new Date(TRIP_START);
    const result = [];

    enabled.forEach((dest, i) => {
        const start = new Date(currentDate);
        const end = new Date(currentDate);
        end.setDate(end.getDate() + dest.nights);
        result.push({
            ...dest,
            startDate: start,
            endDate: end,
            dateStr: `${formatDate(start)} – ${formatDate(end)}`,
        });
        currentDate = new Date(end);
    });

    return result;
}

// ---------- RENDER ITINERARY ----------

function renderItinerary() {
    const container = document.getElementById('itinerary-cards');
    container.innerHTML = '';

    const datedDests = computeDates();
    const enabledSet = new Set(datedDests.map(d => d.id));

    destinations.forEach((dest, index) => {
        const dated = datedDests.find(d => d.id === dest.id);
        const isEnabled = dest.enabled;

        // Find next enabled destination for drive info
        let nextEnabled = null;
        for (let i = index + 1; i < destinations.length; i++) {
            if (destinations[i].enabled) {
                nextEnabled = destinations[i];
                break;
            }
        }

        const card = document.createElement('div');
        card.className = `itin-card ${isEnabled ? '' : 'disabled'} animate-in`;
        card.style.animationDelay = `${index * 0.06}s`;
        card.onclick = () => {
            window.location.href = `destination-${dest.slug}.html`;
        };

        card.innerHTML = `
            <div class="itin-card-main">
                <img class="itin-image" src="${dest.imageUrl}" alt="${dest.name}" 
                    onerror="this.src='https://placehold.co/400x300/e7e5e4/292524?text=${encodeURIComponent(dest.name)}'">
                <div class="itin-body">
                    <div class="itin-stop-badge">${isEnabled && dated ? `Stop ${datedDests.indexOf(dated) + 1}` : 'Removed'}</div>
                    <div class="itin-name">${dest.name}</div>
                    <div class="itin-dates">${isEnabled && dated ? dated.dateStr : `${dest.nights} night${dest.nights > 1 ? 's' : ''} – not included`}</div>
                    <div class="itin-activities">${dest.activities}</div>
                    <div class="itin-weather">🌤 ${dest.weather}</div>
                    <div class="itin-guide-link-wrap">
                        <a href="destination-${dest.slug}.html" class="btn-guide-link" onclick="event.stopPropagation()">View Travel Guide &amp; Details →</a>
                    </div>
                </div>
                <div class="itin-right">
                    <div>
                        <div class="itin-nights">${dest.nights}</div>
                        <div class="itin-nights-label">Night${dest.nights > 1 ? 's' : ''}</div>
                    </div>
                    <button class="itin-toggle ${isEnabled ? '' : 'off'}" id="toggle-${index}" onclick="event.stopPropagation(); toggleDestination(${index})"></button>
                </div>
            </div>
            <div class="itin-accom">
                <div class="itin-accom-title">🏨 Where to Stay</div>
                <div class="itin-accom-options">
                    <a href="${dest.lodge.url}" target="_blank" class="itin-accom-opt itin-accom-lodge" onclick="event.stopPropagation()">
                        <img class="itin-accom-photo" src="${dest.lodge.photo}" alt="${dest.lodge.name}" onerror="this.style.display='none'">
                        <div class="itin-accom-info">
                            <span class="itin-accom-type">Lodge</span>
                            <span class="itin-accom-name">${dest.lodge.name}</span>
                            <span class="itin-accom-price">$${Math.round(dest.lodge.rate)}/n · $${Math.round(dest.lodge.rate * dest.nights)}</span>
                        </div>
                    </a>
                    <a href="${dest.camp.url}" target="_blank" class="itin-accom-opt itin-accom-camp" onclick="event.stopPropagation()">
                        <img class="itin-accom-photo" src="${dest.camp.photo}" alt="${dest.camp.name}" onerror="this.style.display='none'">
                        <div class="itin-accom-info">
                            <span class="itin-accom-type">Camp</span>
                            <span class="itin-accom-name">${dest.camp.name}</span>
                            <span class="itin-accom-price">$${Math.round(dest.camp.rate)}/n · $${Math.round(dest.camp.rate * dest.nights)}</span>
                        </div>
                    </a>
                    <a href="${dest.gateway.url}" target="_blank" class="itin-accom-opt itin-accom-gateway" onclick="event.stopPropagation()">
                        <img class="itin-accom-photo" src="${dest.gateway.photo}" alt="${dest.gateway.name}" onerror="this.style.display='none'">
                        <div class="itin-accom-info">
                            <span class="itin-accom-type">Town/Off-park</span>
                            <span class="itin-accom-name">${dest.gateway.name}</span>
                            <span class="itin-accom-price">$${Math.round(dest.gateway.rate)}/n · $${Math.round(dest.gateway.rate * dest.nights)}</span>
                        </div>
                    </a>
                </div>
            </div>
            ${isEnabled && dest.driveNext && nextEnabled ? `
            <div class="itin-drive">
                <span class="itin-drive-icon">🚗</span>
                <span>Drive to <strong>${nextEnabled.name}</strong></span>
                <span class="itin-drive-detail">${dest.driveNext.dist}</span>
                <span class="itin-drive-detail">${dest.driveNext.time}</span>
            </div>` : ''}
        `;

        container.appendChild(card);
    });
}

// ---------- TOGGLE DESTINATIONS ----------

function toggleDestination(index) {
    // Don't allow disabling if less than 2 would remain
    const enabledCount = destinations.filter(d => d.enabled).length;
    if (destinations[index].enabled && enabledCount <= 2) return;

    destinations[index].enabled = !destinations[index].enabled;
    updateAll();
}

function selectAll() {
    destinations.forEach(d => d.enabled = true);
    updateAll();
}

function deselectAll() {
    // Keep first and last
    destinations.forEach((d, i) => {
        d.enabled = (i === 0 || i === destinations.length - 1);
    });
    updateAll();
}

function updateAll() {
    renderItinerary();
    updateSummary();
    updateCosts();
    updateVehicles();
    updateMap();
}

// ---------- VEHICLE COSTS ----------

function updateVehicles() {
    const enabled = destinations.filter(d => d.enabled);
    const totalDays = enabled.reduce((sum, d) => sum + d.nights, 0);

    const rav4Total = Math.round((VEHICLE_RAV4_DAY * totalDays) / 2);
    const lcTotal = Math.round((VEHICLE_LC_DAY * totalDays) / 2);
    const rttTotal = Math.round((VEHICLE_RTT_DAY * totalDays) / 2);

    document.getElementById('vehicle-rav4-total').textContent = `$${rav4Total.toLocaleString()}`;
    document.getElementById('vehicle-lc-total').textContent = `$${lcTotal.toLocaleString()}`;
    document.getElementById('vehicle-rtt-total').textContent = `$${rttTotal.toLocaleString()}`;

    // Update days labels
    document.querySelectorAll('.vehicle-days').forEach(el => {
        el.textContent = totalDays;
    });
}

// ---------- SUMMARY ----------

function updateSummary() {
    const enabled = destinations.filter(d => d.enabled);
    const totalNights = enabled.reduce((sum, d) => sum + d.nights, 0);

    document.getElementById('summary-nights').textContent = totalNights;
    document.getElementById('summary-stops').textContent = enabled.length;
    document.getElementById('hero-days').textContent = totalNights;
    document.getElementById('hero-stops').textContent = enabled.length;

    const dated = computeDates();
    if (dated.length > 0) {
        const start = formatDate(dated[0].startDate);
        const end = formatDate(dated[dated.length - 1].endDate);
        document.getElementById('summary-dates').textContent = `${start} – ${end}`;
    }
}

// ---------- COST CALCULATIONS ----------

function calculateCosts() {
    const enabled = destinations.filter(d => d.enabled);
    const totalNights = enabled.reduce((sum, d) => sum + d.nights, 0);
    const totalDays = totalNights;

    // Accommodation
    const lodgeSum = enabled.reduce((sum, d) => sum + (d.lodge.rate * d.nights), 0);
    const campSum = enabled.reduce((sum, d) => sum + (d.camp.rate * d.nights), 0);
    const gatewaySum = enabled.reduce((sum, d) => sum + (d.gateway.rate * d.nights), 0);

    const lodgeTotal = lodgeSum;
    const campTotal = campSum + (277 * (totalNights / 21));
    const gatewayTotal = gatewaySum + (25 * totalNights);

    // Vehicle (total for trip, split by 2 people)
    const vehicleRav4 = (VEHICLE_RAV4_DAY * totalDays) / 2;
    const vehicleLC = (VEHICLE_LC_DAY * totalDays) / 2;
    const vehicleRTT = (VEHICLE_RTT_DAY * totalDays) / 2;

    // Permits (already per person)
    const permits = enabled.reduce((sum, d) => sum + d.permits, 0);
    const parkFeesMin = enabled.reduce((sum, d) => sum + d.parkFeeMin, 0);
    const parkFeesMax = enabled.reduce((sum, d) => sum + d.parkFeeMax, 0);

    // Daily costs
    const dailyTotal = DAILY_COST_RATE * totalDays;

    // Totals
    const minTotal = campTotal + vehicleRav4 + permits + parkFeesMin + FLIGHTS_PP + dailyTotal;
    const midTotal = gatewayTotal + vehicleLC + permits + ((parkFeesMin + parkFeesMax) / 2) + FLIGHTS_PP + dailyTotal;
    const maxTotal = lodgeTotal + vehicleRTT + permits + parkFeesMax + FLIGHTS_PP + dailyTotal;

    return {
        totalNights,
        totalDays,
        lodge: lodgeTotal,
        camp: campTotal,
        gateway: gatewayTotal,
        vehicleRav4,
        vehicleLC,
        vehicleRTT,
        permits,
        parkFeesMin,
        parkFeesMax,
        dailyTotal,
        flights: FLIGHTS_PP,
        minTotal,
        midTotal,
        maxTotal,
    };
}

function updateCosts() {
    const c = calculateCosts();

    document.getElementById('cost-min').textContent = `$${Math.round(c.minTotal).toLocaleString()}`;
    document.getElementById('cost-mid').textContent = `$${Math.round(c.midTotal).toLocaleString()}`;
    document.getElementById('cost-max').textContent = `$${Math.round(c.maxTotal).toLocaleString()}`;

    // Breakdown table
    const tbody = document.getElementById('breakdown-body');
    const rows = [
        ['Accommodation', `$${Math.round(c.camp).toLocaleString()}`, `$${Math.round(c.gateway).toLocaleString()}`, `$${Math.round(c.lodge).toLocaleString()}`],
        ['Vehicle (' + c.totalDays + ' days, ÷2)', `$${Math.round(c.vehicleRav4).toLocaleString()}`, `$${Math.round(c.vehicleLC).toLocaleString()}`, `$${Math.round(c.vehicleRTT).toLocaleString()}`],
        ['Permits & Activities', `$${Math.round(c.permits).toLocaleString()}`, `$${Math.round(c.permits).toLocaleString()}`, `$${Math.round(c.permits).toLocaleString()}`],
        ['Park Entry Fees', `$${Math.round(c.parkFeesMin).toLocaleString()}`, `$${Math.round(Math.round((c.parkFeesMin + c.parkFeesMax) / 2)).toLocaleString()}`, `$${Math.round(c.parkFeesMax).toLocaleString()}`],
        ['Flights', `$${c.flights.toLocaleString()}`, `$${c.flights.toLocaleString()}`, `$${c.flights.toLocaleString()}`],
        ['Daily Costs (fuel, food)', `$${Math.round(c.dailyTotal).toLocaleString()}`, `$${Math.round(c.dailyTotal).toLocaleString()}`, `$${Math.round(c.dailyTotal).toLocaleString()}`],
        ['Total Per Person', `$${Math.round(c.minTotal).toLocaleString()}`, `$${Math.round(c.midTotal).toLocaleString()}`, `$${Math.round(c.maxTotal).toLocaleString()}`],
    ];

    tbody.innerHTML = rows.map(row => `
        <tr>
            ${row.map(cell => `<td>${cell}</td>`).join('')}
        </tr>
    `).join('');

    // Update Sticky Bottom Ticker
    let vehicleRate = VEHICLE_RAV4_DAY;
    if (tickerSelectedVehicle === 'lc') {
        vehicleRate = VEHICLE_LC_DAY;
    } else if (tickerSelectedVehicle === 'rtt') {
        vehicleRate = VEHICLE_RTT_DAY;
    }
    const tickerVehicleCostPP = (vehicleRate * c.totalDays) / 2;

    const tickerCampTotal = c.camp + tickerVehicleCostPP + c.permits + c.parkFeesMin + c.flights + c.dailyTotal;
    const tickerGatewayTotal = c.gateway + tickerVehicleCostPP + c.permits + ((c.parkFeesMin + c.parkFeesMax) / 2) + c.flights + c.dailyTotal;
    const tickerLodgeTotal = c.lodge + tickerVehicleCostPP + c.permits + c.parkFeesMax + c.flights + c.dailyTotal;

    document.getElementById('ticker-nights').textContent = c.totalNights;
    document.getElementById('ticker-cost-camp').textContent = `$${Math.round(tickerCampTotal).toLocaleString()}`;
    document.getElementById('ticker-cost-gateway').textContent = `$${Math.round(tickerGatewayTotal).toLocaleString()}`;
    document.getElementById('ticker-cost-lodge').textContent = `$${Math.round(tickerLodgeTotal).toLocaleString()}`;
}

function handleTickerVehicleChange(val) {
    tickerSelectedVehicle = val;
    updateCosts();
}
window.handleTickerVehicleChange = handleTickerVehicleChange;

// ---------- MAP ----------

function initMap() {
    mapInstance = L.map('map', {
        scrollWheelZoom: false,
    }).setView([1.0, 31.5], 7);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(mapInstance);

    updateMap();
}

function updateMap() {
    if (!mapInstance) return;

    // Clear existing
    mapMarkers.forEach(m => mapInstance.removeLayer(m));
    mapMarkers = [];
    if (mapPolyline) mapInstance.removeLayer(mapPolyline);

    const enabledCoords = [];

    destinations.forEach((dest, i) => {
        const isEnabled = dest.enabled;
        const enabledList = destinations.filter(d => d.enabled);
        const stopNum = isEnabled ? enabledList.indexOf(dest) + 1 : null;

        const icon = L.divIcon({
            className: '',
            html: `<div class="custom-marker ${isEnabled ? '' : 'marker-disabled'}">${stopNum || '–'}</div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14],
        });

        const marker = L.marker([dest.lat, dest.lng], { icon })
            .addTo(mapInstance)
            .bindPopup(`<strong>${dest.name}</strong><br>${dest.nights} night${dest.nights > 1 ? 's' : ''}${isEnabled ? '' : ' (removed)'}`);

        mapMarkers.push(marker);

        if (isEnabled) {
            enabledCoords.push([dest.lat, dest.lng]);
        }
    });

    // Draw route line
    if (enabledCoords.length > 1) {
        // Add Entebbe return at the end
        const entebbeLat = 0.0512;
        const entebbeLng = 32.4637;
        const routeCoords = [...enabledCoords, [entebbeLat, entebbeLng]];

        mapPolyline = L.polyline(routeCoords, {
            color: '#d4a843',
            weight: 3,
            opacity: 0.8,
            dashArray: '8, 8',
        }).addTo(mapInstance);

        // Fit bounds
        const bounds = L.latLngBounds(routeCoords);
        mapInstance.fitBounds(bounds, { padding: [40, 40] });
    }
}
