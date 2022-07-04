export type Data = {
	title: string;
	layers: Layer[];
};

export type Layer = {
	title: string;
	color: string;
	points: Point[];
};

export type Point = {
	title: string;
	comments: string[];
	coords: Coords;
};

export type Coords = {
	lat: number;
	long: number;
};

export const dogs: Data = {
	title: "Собаки",
	layers: [
		{
			title: "Агрессивные",
			color: "#dc143c",
			points: [
				{
					coords: { lat: 40.1877306, long: 44.5149857 },
					title: "1 собака",
					comments: ["Небольшая собака, но очень агрессивно кидается на машины"],
				},
				{
					coords: { lat: 40.2051692, long: 44.4555406 },
					title: "1 собака",
					comments: ["Начала лаять при попытке подъехать, гнаться не стала"],
				},
				{
					coords: { lat: 40.1557877, long: 44.5060589 },
					title: "1 собака",
					comments: ["Лает и бросается даже просто на людей"],
				},
				{
					coords: { lat: 40.101745, long: 44.5530718 },
					title: "Большая группа собак",
					comments: [
						"Ночью дюжина любителей сосисок долго гналась за мной и пыталась скушать ноги, но не дождались сосисок и я укатил от них на адреналине",
					],
				},
				{
					coords: { lat: 40.2295824, long: 44.5413287 },
					title: "Группа собак",
					comments: ["Я когда ездил по одному и тому же маршруту каждое утро, у заправки на меня всегда кидались 2 собаки"],
				},
				{
					coords: { lat: 40.2858988, long: 44.3881568 },
					title: "1 большая собака",
					comments: ["Например вот здесь каждый четверг на нас кидается огромный типа алабай."],
				},
				{
					coords: { lat: 40.235354, long: 44.5580445 },
					title: "Большая группа собак",
					comments: [
						"А там чуть дальше на пересечении Тбилисского шоссе и Ачаряна как-то в 7 утра мне стая из 15 собак не дала проехать. Выбежали на дорогу и ждут пока я подъеду, я развернулся, отъехал, думаю проеду по встречке, они увидели меня, перебежали на встречку, хотел проехать снизу эстакады, они опять туда бегут. Пришлось разворачиваться и уезжать",
						"Я потом ездил там попозже, садился за машиной и проскакивал, но в то утро что-то совсем на дороге пусто было",
						"Два раза там проезжал и каждый раз эта стая там пасётся. Заранее включаю электрошокер - убегают на другую сторону",
					],
				},
			],
		},
		{
			title: "Нейтральные",
			color: "#28cbe6",
			points: [],
		},
	],
};
