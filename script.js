const projects = [
  {
    title: "+1 Speed Hoverboard Escape",
    description: "Welcome to +1 Speed Hoverboard Escape! 🛹",
    url: "https://www.roblox.com/games/96429933667357/1-Speed-Hoverboard-Escape",
    image: "https://github.com/WeavyC/portfolio/blob/main/noFilter%20(7).png?raw=true"
  },
  {
    title: "City Of Vice",
    description: "🔥 CITY OF VICE – Build your rise from nothing and take over the streets.",
    url: "https://www.roblox.com/games/119963002291522/City-of-Vice",
    image: "https://github.com/WeavyC/portfolio/blob/main/noFilter%20(8).png?raw=true" 
  },
  {
    title: "Counter Blox: Reimagined Modded",
    description: "🗺 Take part in a team vs team based combat with maps spanning across the world!",
    url: "https://www.youtube.com/watch?v=BKBBsn9RI7M",
    image: "https://github.com/WeavyC/portfolio/blob/main/noFilter%20(9).png?raw=true" 
  }
];


const groups = [
  {
    name: "Spectre Core",
    role: "Owner",
    description: "Fun Games!",
    url: "https://www.roblox.com/communities/642962631/Spectre-Core#!/about",
  // image: "https://placehold.co/400x400/222/FFF?text=WS"
    image: "https://tr.rbxcdn.com/180DAY-a6f763576b800f0877fef35e07387265/150/150/Image/Webp/noFilter"
  },
  {
    name: "Devolve Community",
    role: "Owner",
    description: "FPS Games. Mostly known for Counter Blox: Reimagined & Modded",
    url : "https://www.roblox.com/communities/702299356/Devolve-Games#!/about",
    image: "https://tr.rbxcdn.com/180DAY-1839f51e2f9ad3156966f3b5e5ed8a21/150/150/Image/Webp/noFilter"
  },
  {
    name: "City Of Vice",
    role: "Scripter",
    description: "Known for City Of Vice.",
    url: "https://www.roblox.com/communities/918674343/CityOfVice#!/about",
    image: "https://tr.rbxcdn.com/180DAY-c3d2db22b92c137e52cf294174589ec1/150/150/Image/Webp/noFilter"
  }
];


const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  // Tailwind classes: Group for hover effects, relative positioning, dark background, rounded corners, etc.
  card.className = "group relative bg-dark-800 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl";
  
  const bgImage = project.image;
  
  card.innerHTML = `
    <div class="relative aspect-video overflow-hidden">
        <img src="${bgImage}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <a href="${project.url}" class="bg-white text-black px-6 py-2 rounded-full font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-200" target="_blank">PLAY</a>
        </div>
    </div>
    <div class="p-6">
        <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${project.description}</p>
    </div>
  `;
  projectList.appendChild(card);
});

const groupList = document.getElementById("group-list");

groups.forEach(group => {
  const card = document.createElement("div");
  card.className = "flex items-center gap-4 bg-dark-800 p-4 rounded-xl border border-white/5 hover:bg-dark-700 transition-colors";
  card.innerHTML = `
    <div class="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-dark-900">
        <img src="${group.image}" alt="${group.name}" class="w-full h-full object-cover">
    </div>
    <div class="flex-1 min-w-0">
        <h3 class="text-base font-bold text-white truncate">${group.name}</h3>
        <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">${group.role}</p>
        <p class="text-sm text-gray-400 truncate hidden sm:block">${group.description}</p>
        <a href="${group.url}" class="inline-flex items-center text-sm font-semibold text-white hover:text-gray-300 mt-1" target="_blank">
            View Group <span class="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </a>
    </div>
  `;
  groupList.appendChild(card);
});
