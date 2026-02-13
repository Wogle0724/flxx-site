const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const timeline = document.querySelector("#timeline");
const hero = document.querySelector("#hero");
const logo = document.querySelector(".logo");
const footerLinks = document.querySelector("#footer-links");
const timelineSection = document.querySelector(".timeline-section");
const rootStyle = document.documentElement.style;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const buildIcon = (type) => {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("viewBox", "0 0 24 24");
	svg.setAttribute("fill", "currentColor");
	
	const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
	
	if (type === "spotify") {
		path.setAttribute("d", "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z");
	} else if (type === "apple") {
		path.setAttribute("d", "M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z");
	} else if (type === "instagram" || type === "insta") {
		path.setAttribute("d", "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077");
	} else if (type === "tiktok") {
		path.setAttribute("d", "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z");
	} else if (type === "email" || type === "gmail") {
		path.setAttribute("d", "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z");
	}
	
	svg.appendChild(path);
	return svg;
};

const parseSongDate = (dateString) => {
	const [month, day, year] = dateString.split("-").map((value) => Number(value));
	return { month, day, year };
};

const formatDate = ({ month, day, year }) => {
	const monthName = MONTHS[(month || 1) - 1] || MONTHS[0];
	return `${monthName} ${day}<br>${year}`;
};

const renderTimeline = (songs) => {
	timeline.innerHTML = "";

	songs.forEach((song, index) => {
		const side = index % 2 === 0 ? "right" : "left";
		const item = document.createElement("div");
		item.className = `timeline-item ${side}`;

		const date = document.createElement("div");
		date.className = "timeline-date";
		const parsedDate = parseSongDate(song.date);
		date.innerHTML = formatDate(parsedDate);

		const card = document.createElement("button");
		card.className = "timeline-card";
		card.type = "button";
		card.setAttribute("aria-expanded", "false");

		const img = document.createElement("img");
		img.src = song.imagePath;
		img.alt = `${song.name} cover`;
		img.loading = "lazy";

		const meta = document.createElement("div");
		meta.className = "card-meta";

		const title = document.createElement("h3");
		title.textContent = song.name;

		meta.append(title);

		if (song.features) {
			const features = document.createElement("p");
			features.textContent = song.features;
			meta.appendChild(features);
		}

		const menu = document.createElement("div");
		menu.className = "platform-menu";

		const appleLink = document.createElement("a");
		appleLink.className = "platform-link";
		appleLink.href = song.appleLink;
		appleLink.target = "_blank";
		appleLink.rel = "noreferrer";
		appleLink.title = "Apple Music";
		appleLink.append(buildIcon("apple"));

		const spotifyLink = document.createElement("a");
		spotifyLink.className = "platform-link";
		spotifyLink.href = song.spotifyLink;
		spotifyLink.target = "_blank";
		spotifyLink.rel = "noreferrer";
		spotifyLink.title = "Spotify";
		spotifyLink.append(buildIcon("spotify"));

		menu.append(appleLink, spotifyLink);
		card.append(img, meta, menu);

		item.append(date, card);
		timeline.appendChild(item);
	});
};

const observeTimeline = () => {
	const items = document.querySelectorAll(".timeline-item");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("in-view");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.2 }
	);

	items.forEach((item) => observer.observe(item));
};

const setFooterLinks = (links) => {
	footerLinks.innerHTML = "";
	links.forEach((link) => {
		const anchor = document.createElement("a");
		anchor.className = "footer-link";
		anchor.href = link.url;
		anchor.target = "_blank";
		anchor.rel = "noreferrer";
		anchor.append(buildIcon(link.icon));
		footerLinks.appendChild(anchor);
	});
};

const attachDropdownHandlers = () => {
	timeline.addEventListener("click", (event) => {
		const card = event.target.closest(".timeline-card");
		if (!card) return;

		const item = card.closest(".timeline-item");
		const isOpen = item.classList.contains("open");

		document.querySelectorAll(".timeline-item.open").forEach((node) => {
			node.classList.remove("open");
			const button = node.querySelector(".timeline-card");
			if (button) button.setAttribute("aria-expanded", "false");
		});

		if (!isOpen) {
			item.classList.add("open");
			card.setAttribute("aria-expanded", "true");
		}
	});
};

const updateHero = () => {
	const heroHeight = hero.offsetHeight || window.innerHeight;
	const scrollY = window.scrollY || window.pageYOffset;
	const progress = clamp(scrollY / (heroHeight * 0.8), 0, 1);
	const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
	const pageProgress = maxScroll > 0 ? clamp(scrollY / maxScroll, 0, 1) : 0;
	const timelineTop = timelineSection
		? timelineSection.getBoundingClientRect().top + scrollY
		: heroHeight;
	const overlayTarget = Math.max(timelineTop, heroHeight);
	const overlayProgress = clamp(scrollY / overlayTarget, 0, 1);

	const overlayOpacity = 0.65 + overlayProgress * 0.2;
	const logoScale = 1 - progress * 0.45;
	const startTop = heroHeight * 0.5;
	const endTop = 28;
	const logoTop = startTop + (endTop - startTop) * progress;
	const letterSpace = 10 - progress * 6;
	const bannerPos = `${(pageProgress * 100).toFixed(1)}%`;

	rootStyle.setProperty("--overlay-opacity", overlayOpacity.toFixed(2));
	rootStyle.setProperty("--logo-scale", logoScale.toFixed(2));
	rootStyle.setProperty("--logo-top", `${logoTop.toFixed(1)}px`);
	rootStyle.setProperty("--logo-letterspace", `${letterSpace.toFixed(1)}px`);
	rootStyle.setProperty("--banner-pos", bannerPos);
	if (logo) {
		logo.classList.toggle("is-collapsed", progress > 0.92);
	}
};

const initScroll = () => {
	let ticking = false;

	const onScroll = () => {
		if (!ticking) {
			window.requestAnimationFrame(() => {
				updateHero();
				ticking = false;
			});
			ticking = true;
		}
	};

	window.addEventListener("scroll", onScroll, { passive: true });
	window.addEventListener("resize", updateHero);
	updateHero();
};

fetch("songs.json")
	.then((response) => response.json())
	.then((payload) => {
		const sorted = [...payload.songs].sort((a, b) => {
			const dateA = parseSongDate(a.date);
			const dateB = parseSongDate(b.date);
			if (dateA.year !== dateB.year) return dateB.year - dateA.year;
			if (dateA.month !== dateB.month) return dateB.month - dateA.month;
			return dateB.day - dateA.day;
		});

		renderTimeline(sorted);
		observeTimeline();
		attachDropdownHandlers();
		setFooterLinks(payload.links || []);
		initScroll();
	})
	.catch((error) => {
		console.error("Failed to load songs.json", error);
		setFooterLinks([]);
		initScroll();
	});
