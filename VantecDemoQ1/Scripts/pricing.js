var map;
var marker = false;
var geocoder;
var selectedLocationInfo;
var lastGeocodeResults;
var directionsService;
var directionsRenderer;
$(function () {
    $("#btnLoadFromAdds").click(function () {
        var selectedLocationInfo = getSelectedLocationInfo();
        if (selectedLocationInfo) {
            $("#txtLoadFromAdds").val(selectedLocationInfo.postcode);
            $("#txtLoadFromAdds").data("locationInfo", selectedLocationInfo);
            $("#txtLoadFromAdds").removeClass("input-validation-error");
            $("#fromAdds").text(selectedLocationInfo.address);
            $("#hffromAdds").val(selectedLocationInfo.address);
        }
    });
    $("#btnLoadToAdds").click(function () {
        var selectedLocationInfo = getSelectedLocationInfo();
        if (selectedLocationInfo) {
            $("#txtLoadToAdds").val(selectedLocationInfo.postcode);
            $("#txtLoadToAdds").data("locationInfo", selectedLocationInfo);
            $("#txtLoadToAdds").removeClass("input-validation-error");
            $("#toAdds").text(selectedLocationInfo.address);
            $("#hftoAdds").val(selectedLocationInfo.address);
        }
    });
    $("#btnPrice").click(function () {
        $("#txtLoadFromAdds").removeClass("input-validation-error");
        $("#txtLoadToAdds").removeClass("input-validation-error");
        var isVaildInput = true;
        if ($("#txtLoadFromAdds").val().length != 8) {
            isVaildInput = false;
            $("#txtLoadFromAdds").addClass("input-validation-error");
        }
        if ($("#txtLoadToAdds").val().length != 8) {
            isVaildInput = false;
            $("#txtLoadToAdds").addClass("input-validation-error");
        }

        var isCourseFound = $.ajax({ url: "/coursematching.ashx?frompostcode=" + $("#txtLoadFromAdds").val() + "&topostcode=" + $("#txtLoadToAdds").val(), async: false }).responseText;

        if (isCourseFound != "1") {
            alert("不在送货范围内");
        }

        if (!isVaildInput || isCourseFound != "1") return;

        var request = {
            //origin: $("#txtLoadFromAdds").data("locationInfo").geocode.geometry.location,
            //destination: $("#txtLoadToAdds").data("locationInfo").geocode.geometry.location,
            origin: $("#txtLoadFromAdds").val(),
            destination: $("#txtLoadToAdds").val(),
            travelMode: 'DRIVING'
        };
        directionsService.route(request, function (result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
                $("#priceoutput").show();
                $("#btnSubmit").show();
                $("#priceoutput").val(Math.round(result.routes[0].legs[0].distance.value * 27 * $("#packageNo").val() / 1000) + "円");
            }
        });
    });
})
function initMap() {
    geocoder = new google.maps.Geocoder();
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.68251662989272, lng: 139.7651388298927 },
        zoom: 10
    });
    directionsRenderer.setMap(map);

    google.maps.event.addListener(map, 'click', function (event) {
        //Get the location that the user clicked.
        var clickedLocation = event.latLng;
        //If the marker hasn't been added.
        if (marker === false) {
            //Create the marker.
            marker = new google.maps.Marker({
                position: clickedLocation,
                map: map,
                draggable: true //make it draggable
            });
        } else {
            //Marker has already been added, so just change its location.
            marker.setPosition(clickedLocation);
        }

        geocoder.geocode({ 'location': event.latLng, region: "jp" }, function (results, status) {
            if (status == 'OK') {
                //map.setCenter(results[0].geometry.location);
                console.log(results);
                lastGeocodeResults = results;
            }
        });
    });
}
function getSelectedLocationInfo() {
    var returnVal = null;
    if (lastGeocodeResults && lastGeocodeResults.length > 0 && lastGeocodeResults[0].address_components) {
        $.each(lastGeocodeResults[0].address_components, function (componentIndex, componentItem) {
            if (componentItem.types.indexOf("postal_code") > -1) {
                returnVal = {
                    address: lastGeocodeResults[0].formatted_address,
                    postcode: componentItem.long_name ? componentItem.long_name : componentItem.short_name,
                    geocode: lastGeocodeResults[0]
                }
                return false;
            }
        })
    }
    return returnVal;
}