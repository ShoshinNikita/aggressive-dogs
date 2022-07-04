import * as L from "leaflet";
import { Data, dogs } from "./data";
//
import "leaflet/dist/leaflet.css";
import "./style.css";

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

const controlPanel = L.control.layers({}, {}).addTo(map);

const addDataToMap = (data: Data) => {
	let layers: L.Control.LayersObject = {};
	for (const layer of data.layers) {
		// Based on 'map-pin' from https://phosphoricons.com/
		const markerIcon = new L.DivIcon({
			html: `
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
				<rect width="256" height="256" fill="none"></rect>
				<path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="${layer.color}" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path>
				<circle cx="128" cy="104" r="32" fill="#ffffff" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle>
			</svg>
			`,
			iconSize: [32, 32],
			popupAnchor: [0, -12],
		});

		let markers: L.Marker[] = [];
		for (const point of layer.points) {
			const marker = L.marker(
				{ lat: point.coords.lat, lng: point.coords.long },
				{ title: point.title, icon: markerIcon },
			);

			let popup = `<h3>${point.title}</h3>`;
			for (const comment of point.comments) {
				popup += `<p><q>${comment}</q></p>`;
			}
			marker.bindPopup(popup);

			markers.push(marker);
		}

		layers[`${data.title}: ${layer.title}`] = L.layerGroup(markers);
	}

	// Add layers on overlay and display them
	for (const layerName in layers) {
		const layer = layers[layerName];

		controlPanel.addOverlay(layer, layerName);
		layer.addTo(map);
	}
};

addDataToMap(dogs);
