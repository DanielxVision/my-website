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
local Players = game:GetService("Players")

local GAMEPASS_ID = 12345678 - - - put your own gamepass ID

Players.PlayerAdded:Connect(function(player)

local success, ownsPass = pcall(function()
return MarketplaceService:UserOwnsGamePassAsync(player.UserId, GAMEPASS_ID)
end)

if ownsPass then
player.CharacterAdded:Connect(function(char)
local humanoid = char:WaitForChild("Humanoid")
humanoid.JumpPower = 100
end)
end

end)`,

script2: `-- Door Script
local door = script.Parent
local debounce = false

door.Touched:Connect(function(hit)

if debounce then return end

local character = hit.Parent
local humanoid = character:FindFirstChild("Humanoid")

if humanoid then

debounce = true

door.Transparency = 1
door.CanCollide = false

wait(3)

door.Transparency = 0
door.CanCollide = true

debounce = false

end

end)`,
  
script3: `-- Leaderboard Script
game.Players.PlayerAdded:Connect(function(player)

local leaderstats = Instance.new("Folder")
leaderstats.Name = "leaderstats"
leaderstats.Parent = player

local Coins = Instance.new("IntValue")
Coins.Name = "Coins"
Coins.Value = 0
Coins.Parent = leaderstats

local Level = Instance.new("IntValue")
Level.Name = "Level"
Level.Value = 1
Level.Parent = leaderstats

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

/* TITLE PARALLAX EFFECT */

const title = document.querySelector(".main-title");

document.addEventListener("mousemove", function(e){

let x = (window.innerWidth / 2 - e.pageX) / 40;
let y = (window.innerHeight / 2 - e.pageY) / 40;

title.style.transform = `translate(${x}px, ${y}px)`;

});

alert("Script copied!");

}
