const hamburger = document.querySelector(".hamburger");
const bars = document.querySelectorAll(".hamburger span");
const topbar = document.querySelector(".topbar");
let active = false;
function toggleham() {
    if (!active) {
        topbar.style.display = "flex";
        bars[0].style.transform = "rotate(45deg)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(-45deg)";
        active = true;
    } else {
        topbar.style.display = "none";
        bars[0].style.transform = "rotate(0deg)";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "rotate(0deg)";
        active = false;
    }
}
hamburger.addEventListener("click", toggleham);

const commands = ["stats", "help"];
const terminal = document.querySelector(".terminal");
const defaultPrompt = document.getElementsByClassName("prompt")[0];
const prompts = document.getElementsByClassName("prompts")[0];
window.onload = () => {
    defaultPrompt.value = "";
}

const newLine = async (e) => {
    if (e.key === "Enter") {
        const promptArray = document.getElementsByClassName("prompt");
        const prompt = promptArray[promptArray.length - 1];
        const response = await parse(prompt.value);
        const pre = document.createElement("pre");
        if (response) {
            pre.classList.add("info");
            pre.innerHTML = response;
            terminal.append(pre);
        }
        const promptsClone = prompts.cloneNode(true);
        terminal.append(promptsClone);
        prompt.disabled = true;
        const newPromptInput = promptsClone.childNodes[5];
        newPromptInput.value = "";
        newPromptInput.disabled = false;
        newPromptInput.focus();
        newPromptInput.addEventListener("keypress", newLine);
        newPromptInput.oninput = linting;
    }
}

const linting = () => {
    const promptArray = document.getElementsByClassName("prompt");
    const prompt = promptArray[promptArray.length - 1];
    const currentCommand = prompt.value;
    if (!currentCommand) return;
    if (commands.includes(currentCommand)) {
        prompt.style.color = "green";
    } else {
        prompt.style.color = "red";
    }
}

defaultPrompt.addEventListener("keypress", newLine);

const parse = async (command) => {
    if (!command) return undefined;
    switch (command) {
        case "help":
            return "stats\nShow stats about me"
        case "stats":
            let stars = 0;
            let StarsData = await fetch(`https://api.github.com/users/night0721/repos?per-page=100`).then(res => res.json());
            for (const repo of StarsData) stars += repo.stargazers_count;
            let FollowersData = await fetch(`https://api.github.com/users/night0721`).then(res => res.json());
            return `Followers: ${FollowersData.followers}\nStars: ${stars}`;
        default:
            return `nsh: command not found: ${command.includes(" ") ? command.split(" ")[0] : command}`
    }
}
