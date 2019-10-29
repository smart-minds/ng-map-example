import { Component, AfterViewInit, OnInit } from "@angular/core";
import { tileLayer, latLng, icon, marker, popup } from "leaflet";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ng-mapbox";
  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 50,
        attribution: "..."
      })
    ],
    zoom: 15,
    center: latLng(-18.879234, 47.521527)
  };

  layers = [];
  ngOnInit() {
    const camera = marker([-18.879234, 47.521527], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: "assets/marker-icon.png",
        shadowUrl: "assets/marker-shadow.png"
      })
    });
    const pop = popup({
      keepInView: false,
      autoPan: false,
      maxWidth: 1000
    }).setContent(
      '<iframe id="player1" src="https://player.vimeo.com/video/69426498?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=0&amp;api=1&amp;player_id=player1" width="200" height="150" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
    );
    camera.bindPopup(pop).openPopup();
    this.layers.push(camera);
  }
}
