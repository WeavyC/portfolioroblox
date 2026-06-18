const projects = [
  {
    title: "Defuse Division",
    description: "Defuse Division is a team-based objective mode where one side must plant a bomb at a designated site while the other must prevent it or defuse it if planted. The attacking team wins by successfully detonating the bomb or eliminating all opponents, while the defending team wins by stopping the plant, defusing the bomb, or eliminating the attackers before they can complete their objective.
",
    url: "https://www.roblox.com/games/112757576021097/Defuse-Division",
    image: "https://tr.rbxcdn.com/180DAY-4ebbefede6541c78fb3b33701a17680d/768/432/Image/Webp/noFilter"
  },
  {
    title: "Hover for Brainrots",
    description: "Welcome to Hover for Brainrots! 🛹
",
    url: "https://www.roblox.com/games/130042225561510/Hover-For-Brainrots",
    image: "https://tr.rbxcdn.com/180DAY-367e9ac91cba7bba915c7fe8211fe358/768/432/Image/Webp/noFilter" 
  },
  {
    title: "Stryke",
    description: "🗺 Welcome to Stryke, a game where everyone has a one-tap deagle",
    url: "https://www.roblox.com/games/135848237744289/Stryke",
    image: "https://tr.rbxcdn.com/180DAY-05e66aa9e2cd6397d6f6dece86538371/768/432/Image/Webp/noFilter" 
  }
];


const groups = [
  {
    name: "Fourteam",
    role: "Developer",
    description: "Developers behind the Defuse Division project.",
    url: "https://www.roblox.com/communities/5628426/Fourtea#!/about",
  // image: "https://placehold.co/400x400/222/FFF?text=WS"
    image: "https://tr.rbxcdn.com/180DAY-ffe8a915f012e24df83f8732dd76f304/150/150/Image/Webp/noFilter"
  },
  {
    name: "Enyx Studios",
    role: "Co-Owner",
    description: "Enyx Studios — A futuristic game studio focused on immersive worlds, sharp design, and high-quality gameplay experiences.
",
    url : "https://www.roblox.com/communities/1008568252/Enyx-Studios#!/about",
    image: "https://tr.rbxcdn.com/180DAY-8e13f5e3a6f3bceea452dbb3f13950d6/1440/456/Image/Png/noFilter"
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
