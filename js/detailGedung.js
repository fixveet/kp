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