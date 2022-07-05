import * as L from "leaflet";

export type Layer = {
	title: string;
	icon: L.Icon<L.IconOptions> | L.DivIcon;
	points: Point[];
};

export type Point = {
	title: string;
	comments: string[];
	coords: Location;
};

export type Location = {
	lat: number;
	long: number;
};
