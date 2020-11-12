function initMap() {
    const coords = { lat: 43.08401912, lng: -77.6799903 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: coords,
    });
    const marker = new google.maps.Marker({
      position: coords,
      map: map,
    });
  }
  
