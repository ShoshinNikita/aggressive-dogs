import * as L from "leaflet";
import type { Layer } from "./types";
import aggressiveDogs from "./data/aggressive_dogs";
//
import "leaflet/dist/leaflet.css";
import "./style.css";
import faviconIcon from "./icons/bike.svg";

// Set favicon
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = faviconIcon;
document.getElementsByTagName("head")[0].appendChild(favicon);

const map = L.map("map", {
	center: [40.1673492, 44.531127], // center of Yerevan
	zoom: 12,
});

// Use CyclOSM map - https://www.cyclosm.org/
L.tileLayer("https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png", {
	attribution: `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors`,
	minZoom: 0,
	maxZoom: 20,
}).addTo(map);

const allLayers: Layer[][] = [
	[aggressiveDogs],
];
for (const layers of allLayers) {
	const controlPanel = L.control.layers({}, {}, { collapsed: false }).addTo(map);

	for (const layer of layers) {
		let markers: L.Marker[] = [];
		for (const point of layer.points) {
			const marker = L.marker(
				{ lat: point.coords.lat, lng: point.coords.long },
				{ title: point.title, icon: layer.icon },
			);

			let popup = `<h3>${point.title}</h3>`;
			for (const comment of point.comments) {
				popup += `<p><q>${comment}</q></p>`;
			}
			marker.bindPopup(popup);

			markers.push(marker);
		}

		// Add an layer on overlay and display it
		const layerGroup = L.layerGroup(markers);
		const layerName = `${layer.title} <span class="leaflet-control-layers-icon">${layer.icon.createIcon().outerHTML}</span>`;
		controlPanel.addOverlay(layerGroup, layerName);
		layerGroup.addTo(map);
	}
}
