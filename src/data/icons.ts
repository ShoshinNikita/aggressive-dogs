import * as L from "leaflet";

export const newIcon = (url: string): L.Icon => {
	return new L.Icon({
		iconUrl: url,
		// All icons must have size 24x24px
		iconSize: [24, 24],
		popupAnchor: [0, -12],
	});
};
