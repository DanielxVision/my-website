particlesJS("particles-js", {
particles: {
number: { value: 80 },
color: { value: "#ffffff" },
shape: { type: "circle" },
opacity: { value: 0.2 },
size: { value: 3 },
move: {
enable: true,
speed: 1
}
},
interactivity: {
events: {
onhover: {
enable: true,
mode: "repulse"
}
}
}
});

function scrollToTutorials(){
document.getElementById("tutorials").scrollIntoView({
behavior:"smooth"
});
}

let scripts = {

script1: `-- Gamepass Script
local MarketplaceService = game:GetService("MarketplaceService")

print("Gamepass system loaded")`,

script2: `-- Door Script
script.Parent.Touched:Connect(function(hit)
script.Parent.Transparency = 1
end)`,

script3: `-- Leaderboard Script
game.Players.PlayerAdded:Connect(function(player)

local stats = Instance.new("Folder")
stats.Name = "leaderstats"
stats.Parent = player

end)`

};

function openScript(id){

document.getElementById("scriptViewer").style.display = "flex";

document.getElementById("scriptCode").innerText = scripts[id];

}

function closeScript(){

document.getElementById("scriptViewer").style.display = "none";

}

function copyScript(){

let text = document.getElementById("scriptCode").innerText;

navigator.clipboard.writeText(text);

alert("Script copied!");

}
