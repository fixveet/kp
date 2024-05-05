async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const center = { lat: -0.3533938, lng: 109.4735066 };
  const map = new Map(document.getElementById("map"), {
    zoom: 9,
    center,
    mapId: "a3efe1c035bad51b",
  });

  for (const property of properties) {
    const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(property),
      position: property.position,
      title: property.description,
    });

    AdvancedMarkerElement.addListener("click", () => {
      toggleHighlight(AdvancedMarkerElement, property);
    });
  }
}

function toggleHighlight(markerView, property) {
  if (markerView.content.classList.contains("highlight")) {
    markerView.content.classList.remove("highlight");
    markerView.zIndex = null;
  } else {
    markerView.content.classList.add("highlight");
    markerView.zIndex = 1;
  }
}

function buildContent(property) {
  const content = document.createElement("div");

  content.classList.add("property");
  content.innerHTML = `
        <div class="icon">
            <i aria-hidden="true" class="fa fa-icon fa-building" ></i>
            <span class="fa-sr-only">${property.type}</span>
        </div>
        <div class="details">
            <div class="kecamatan">${property.kecamatan}</div>
            <div class="features">
            <div>
                <i aria-hidden="true" class="fa fa-users fa-lg users" title="populasi"></i>
                <span class="fa-sr-only">populasi</span>
                <span>${property.populasi}</span>
            </div>
            <div>
                <i aria-hidden="true" class="fa fa-home fa-lg home" title="desa"></i>
                <span class="fa-sr-only">desa</span>
                <span>${property.desa}</span>
            </div>
            <div>
                <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="luas"></i>
                <span class="fa-sr-only">size</span>
                <span>${property.luas} km<sup>2</sup></span>
            </div>
            </div>
        </div>
        `;
  return content;
}

const properties = [
  {
    kecamatan: "Kecamatan Terentang",
    populasi: 11.389,
    desa: 10,
    luas: 786.4,
    position: {
      lat: -0.3883464,
      lng: 109.7115472,
    },
  },
  {
    kecamatan: " Kecamatan Telok/Telok Pakedai",
    populasi: 20.747,
    desa: 14,
    luas: 291.9,
    position: {
      lat: -0.3584977,
      lng: 109.1701666,
    },
  },
  {
    kecamatan: " Kecamatan Sungai Raya",
    populasi: 213.767,
    desa: 20,
    luas: 929.3,
    position: {
      lat: -0.074503, 
      lng: 109.379936,
    },
  },
  {
    kecamatan: "Kecamatan Kuala Mandor B",
    populasi: 25.733,
    desa: 5,
    luas: 473.0,
    position: {
      lat: 0.129294,
      lng: 109.434145,
    },
  },
  {
    kecamatan: "Kecamatan Batu Ampar",
    populasi: 36.844,
    desa: 15,
    luas: 2.002,
    position: {
      lat: -0.796977,
      lng: 109.568815,
    },
  },
  {
    kecamatan: "Kecamatan Kubu",
    populasi: 11.389,
    desa: 10,
    luas: 786.4,
    position: {
      lat: -0.481928,
      lng: 109.394307,
    },
  },
  {
    kecamatan: "Kecamatan Sungai Kakap",
    populasi: 117.402,
    desa: 12,
    luas: 453.17,
    position: {
      lat: -0.124161,
      lng: 109.211485,
    },
  },
  {
    kecamatan: "Kecamatan Rasau Jaya",
    populasi: 27.243,
    desa: 6,
    luas: 111.07,
    position: {
      lat: -0.246735,
      lng: 109.342516,
    },
  },
  {
    kecamatan: "Kecamatan Sungai Ambawang",
    populasi: 78.805,
    desa: 15,
    luas: 726.1,
    position: {
      lat: -0.050791,
      lng: 109.647077,
    },
  },
];

initMap();
