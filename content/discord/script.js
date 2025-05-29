const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
	images[i].setAttribute("loading", "lazy");
}

const config = {
	status: "dnd",
	displayName: "Night",
	username: "night0721.xyz",
	pronoun: "nky",
	tag: "NBLA",
	customStatus: "Hello",
	customStatusEmoji: "./public/ngx.jpg",
}

const elements = {
	statusBox: document.querySelector(".status"),
	statusIcon: document.querySelector(".status-icon"),
	displayName: document.querySelector(".display-name"),
	username: document.querySelector(".username"),
	customStatus: document.querySelector(".custom-status"),
	customStatusText: document.querySelector(".custom-status-text"),
	customStatusEmoji: document.getElementById("custom-status-emoji"),
};

elements.displayName.innerHTML = config.displayName;
elements.username.innerHTML = config.username;
let imagePath;
let label;
switch (config.status) {
	case "online":
		imagePath = "./public/status/online.svg";
		label = "Online";
		break;
	case "idle":
		imagePath = "./public/status/idle.svg";
		label = "Idle / AFK";
		break;
	case "dnd":
		imagePath = "./public/status/dnd.svg";
		label = "Do Not Disturb";
		break;
	case "offline":
		imagePath = "./public/status/offline.svg";
		label = "Offline";
		break;
	default:
		imagePath = "./public/status/offline.svg";
		label = "Unknown";
		break;
}

elements.statusIcon.src = imagePath;
elements.statusBox.setAttribute("aria-label", label);

if (config.customStatus) {
	elements.customStatusText.innerHTML = config.customStatus;
	elements.customStatus.style.display = "flex";
} else {
	elements.customStatus.style.display = "none";
}
if (config.customStatusEmoji) {
	elements.customStatusEmoji.src = config.customStatusEmoji;
} else {
	elements.customStatusEmoji.style.display = "none";
}