let map = L.map("map").setView([-0.055772, 109.348456], 13);
let latLng1 = L.latLng(-0.055772, 109.348456);
let latLng2 = L.latLng(-0.074503, 109.379936);
let wp1 = new L.Routing.Waypoint(latLng1);
let wp2 = new L.Routing.Waypoint(latLng2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.Routing.control({
  waypoints: [latLng1, latLng2],
}).addTo(map);

let routeUs = L.Routing.osrmv1();
routeUs.route([wp1, wp2], (err, routes) => {
  if (!err) {
    let best = 100000000000000;
    let bestRoute = 0;
    for (i in routes) {
      if (routes[i].summary.totalDistance < best) {
        bestRoute = i;
        best = routes[i].summary.totalDistance;
      }
    }
    console.log("best route", routes[bestRoute]);
    L.Routing.line(routes[bestRoute], {
      styles: [
        {
          color: "green",
          weight: "8",
        },
      ],
    }).addTo(map);
    let marker = L.marker(latLng1).addTo(map);
    marker.bindPopup("You are here!.").openPopup();
  }
});

const properties = [
  {
    gedung: "Kantor Camat Sungai Raya",
    namaPimpinan: "Drs. M. Ikhsan Sukendra, M.Si",
    periode:"Drs. M. Ikhsan Sukendra, M.Si",
    alamat:"Jl. Adi Sucipto No.Km.12, RW.7, Sungai Raya, Kec. Sungai Raya, Kabupaten Kubu Raya, Kalimantan Barat.",
    layanan:"",
    jam:"",
    luas:"1.124",
    desa:"22",
    pdk_LK:"122.262",
    pdk_PR:"117.804",
    pdk_Total:"240.066",
    batasUtara:"Kota Pontianak dan Kec. Sungai Ambawang",
    batasSelatan:": Kec. Kubu dan Kec. Terentang",
    batasBarat:"Kec. Sungai Kakap",
    batasTimur:"Kab Sanggau",
    sekolah:"",
    rumahSakit:"",
    puskesmas:"",
    pasar:"",
    latitude:"",
    longtitude:""
  },
];
