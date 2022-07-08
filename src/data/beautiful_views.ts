import { Layer } from "../types";
import { newIcon } from "./icons";
import icon from "../icons/beautiful_view.svg";

const title = "Красивый вид";

export default {
	title: "Красивые виды",
	icon: newIcon(icon),
	points: [
		{ coords: { lat: 40.162321, long: 44.533169 }, title: title },
		{ coords: { lat: 40.204821, long: 44.562328 }, title: title },
		{ coords: { lat: 40.194474, long: 44.4802 }, title: title },
		{ coords: { lat: 40.17353, long: 44.49479 }, title: title },
		{ coords: { lat: 40.185463, long: 44.490892 }, title: title },
	],
} as Layer;
