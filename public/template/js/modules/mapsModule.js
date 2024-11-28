export default function maps() {
    // let map;
    // // const uluru = { lat: 106.7124267, lng: 10.8446648 };
    // function initMap() {
    //     map = new google.maps.Map(document.getElementById("map"), {
    //         center: { lat: -34.397, lng: 150.644 },
    //         zoom: 8,
    //     });
    // }

    function initMap() {
        const myLatLng = { lat: 10.8447353, lng: 106.7101087 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: myLatLng,
        });
        // AIzaSyBmObITAqaZaRtH8OS-XVOB10Oa-BoFtDw
        new google.maps.Marker({
            position: myLatLng,
            map,
            title: "Hello World!",
        });
    }
}