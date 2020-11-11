function initMap() {
    const coords = { lat: 43.0842766, lng: -77.6777491 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: coords,
    });
    const marker = new google.maps.Marker({
      position: coords,
      map: map,
    });
  }
  