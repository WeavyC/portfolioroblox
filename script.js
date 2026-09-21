const projects = [
  {
    id: "defuse-division",
    title: "Defuse Division",
    universeId: 7072674902,
    category: "contributed",
    categoryLabel: "Past Contributor",
    role: "Former Scripter",
    status: "Live",
    playerCount: 331,
    visits: 40476110,
    description: "Search and destroy style FPS. Attackers plant the bomb at sites, defenders defuse or wipe the other team.",
    url: "https://www.roblox.com/games/112757576021097/Defuse-Division",
    image: "https://tr.rbxcdn.com/180DAY-74b795a4706ad9e384e4a732b8ceb168/768/432/Image/Webp/noFilter",
    tags: ["Luau", "Round System", "Bug Fixing", "Feature Rewrites"],
    highlights: [
      "Former scripter, no longer actively working on the game",
      "Maintained the game and shipped content updates",
      "Rewrote old features and fixed gameplay bugs",
      "Handled round loop, bomb timers, and spectator logic"
    ]
  },
  {
    id: "hover-brainrots",
    title: "Hover for Brainrots",
    universeId: 10004800804,
    category: "owned",
    categoryLabel: "Lead Scripter",
    role: "Lead Scripter",
    status: "Live",
    playerCount: 275,
    visits: 2211938,
    description: "Arcade hoverboard runner where players collect items across the map and upgrade speed and jump.",
    url: "https://www.roblox.com/games/130042225561510/Hover-For-Brainrots",
    image: "https://tr.rbxcdn.com/180DAY-367e9ac91cba7bba915c7fe8211fe358/768/432/Image/Webp/noFilter",
    tags: ["Luau", "Vehicle Movement", "DataStore", "New Features"],
    highlights: [
      "Integrated new gameplay systems and content updates",
      "Squashed bugs and improved physics stability",
      "Added player upgrades, save data, and board mechanics"
    ]
  },
  {
    id: "paint-albums",
    title: "Paint Albums!",
    universeId: 10345261565,
    category: "owned",
    categoryLabel: "Owner & Lead Dev",
    role: "Owner & Lead Programmer",
    status: "Live",
    playerCount: 63,
    visits: 1311041,
    description: "Search for music album covers, paint them pixel-by-pixel on canvas, unlock brushes, and show off your gallery.",
    url: "https://www.roblox.com/games/127392769658273/Paint-Albums",
    image: "https://tr.rbxcdn.com/180DAY-d17485ba9b6911616068818b830b732b/768/432/Image/Webp/noFilter",
    tags: ["Luau", "Canvas System", "Custom UI", "DataStores", "Music/Audio"],
    highlights: [
      "Built every single game system from scratch",
      "Wired and programmed every UI element and menu",
      "Saved albums, brush unlocks, cosmetics, and leaderboards"
    ]
  },
  {
    id: "stryke",
    title: "Stryke",
    universeId: 9628705910,
    category: "owned",
    categoryLabel: "Developer",
    role: "Front-End Scripter",
    status: "Alpha",
    playerCount: 0,
    visits: 363749,
    description: "One-tap deagle arena shooter with cases, weapon skins, quests, and quick respawns.",
    url: "https://www.roblox.com/games/135848237744289/Stryke",
    image: "https://tr.rbxcdn.com/180DAY-05e66aa9e2cd6397d6f6dece86538371/768/432/Image/Webp/noFilter",
    tags: ["Luau", "Front-End", "Weapon Skins", "UI Animations"],
    highlights: [
      "Made custom weapon skins and crate inspection setups",
      "Built front-end menus, HUD elements, and viewmodel effects",
      "Scripted aim-down-sights and weapon bobbing animations"
    ]
  },
  {
    id: "hoverboard-escape",
    title: "+1 Speed Hoverboard Escape",
    universeId: 9449428636,
    category: "contributed",
    categoryLabel: "Backend Contributor",
    role: "Backend Programmer",
    status: "Live",
    playerCount: 0,
    visits: 108862,
    description: "Speed-building hoverboard obby where every ride increases your speed to dodge obstacles and clear worlds.",
    url: "https://www.roblox.com/games/96429933667357/1-Speed-Hoverboard-Escape",
    image: "https://tr.rbxcdn.com/180DAY-f09493f9d92496482c99f1f2718fb49b/768/432/Image/Webp/noFilter",
    tags: ["Luau", "Backend Data", "Leaderboards", "Rebirth System"],
    highlights: [
      "Built backend data saving and player progression",
      "Handled speed calculations, wins, and rebirth logic",
      "Wired server validation for rewards and shop purchases"
    ]
  }
];

const groups = [
  {
    id: 1008568252,
    name: "Enyx Studios",
    role: "Co-Owner",
    members: 277450,
    description: "Studio working on simulator and arcade Roblox games including Hover for Brainrots and +1 Speed Hoverboard Escape.",
    url: "https://www.roblox.com/communities/1008568252/Enyx-Studios#!/about",
    image: "https://tr.rbxcdn.com/180DAY-8e13f5e3a6f3bceea452dbb3f13950d6/1440/456/Image/Png/noFilter",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  {
    id: 5628426,
    name: "Fourteam",
    role: "Former Scripter",
    members: 41381,
    description: "Dev group behind Defuse Division. Worked as an old scripter on the project (no longer on the team).",
    url: "https://www.roblox.com/communities/5628426/Fourtea#!/about",
    image: "https://tr.rbxcdn.com/180DAY-ffe8a915f012e24df83f8732dd76f304/150/150/Image/Webp/noFilter",
    badgeColor: "bg-zinc-800 text-zinc-300 border-white/10"
  },
  {
    id: 32843109,
    name: "VSøft (VS ft)",
    role: "Owner",
    members: 24734,
    description: "My personal group for creative games, including Paint Albums (1.3M+ visits).",
    url: "https://www.roblox.com/communities/32843109/VS-ft#!/about",
    image: "https://tr.rbxcdn.com/180DAY-4e5c7692c778f96a1938cc4fe617a0a1/150/150/Image/Webp/noFilter",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30"
  },
  {
    id: 918674343,
    name: "City Of Vice",
    role: "Scripter",
    members: 9859,
    description: "Community and dev group for open-world roleplay games.",
    url: "https://www.roblox.com/communities/918674343/CityOfVice#!/about",
    image: "https://tr.rbxcdn.com/180DAY-e7ca780693af677ee1e9058f296a9833/150/150/Image/Webp/noFilter",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
  }
];

let activeFilter = "all";
let currentSort = "players"; // "players" | "visits"

function formatCompact(num) {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M+";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K+";
  }
  return num.toLocaleString();
}

function updateHeroTotalVisits() {
  const totalVisitsEl = document.getElementById("hero-total-visits");
  if (!totalVisitsEl) return;
  const total = projects.reduce((acc, p) => acc + (p.visits || 0), 0);
  totalVisitsEl.textContent = formatCompact(total);
}

function updateHeroTotalMembers() {
  const totalMembersEl = document.getElementById("hero-total-members");
  if (!totalMembersEl) return;
  const total = groups.reduce((acc, g) => acc + (g.members || 0), 0);
  totalMembersEl.textContent = formatCompact(total);
}

function renderProjects() {
  const projectList = document.getElementById("project-list");
  if (!projectList) return;

  let filtered = activeFilter === "all"
    ? [...projects]
    : projects.filter(p => p.category === activeFilter);

  if (currentSort === "players") {
    filtered.sort((a, b) => (b.playerCount ?? 0) - (a.playerCount ?? 0));
  } else if (currentSort === "visits") {
    filtered.sort((a, b) => (b.visits ?? 0) - (a.visits ?? 0));
  }

  projectList.innerHTML = "";

  if (filtered.length === 0) {
    projectList.innerHTML = `
      <div class="col-span-full py-12 text-center text-zinc-500">
        No games in this section.
      </div>
    `;
    return;
  }

  filtered.forEach(project => {
    const isOwned = project.category === "owned";
    const categoryBadge = isOwned
      ? `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5"></span>
          ${project.categoryLabel}
        </span>`
      : `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5"></span>
          ${project.categoryLabel}
        </span>`;

    const statusBadge = project.status === "Alpha"
      ? `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">Alpha</span>`
      : `<span class="px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-800 text-zinc-300 border border-white/10">Live</span>`;

    const isLiveActive = project.playerCount > 0;
    const playerCountBadge = isLiveActive
      ? `<div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md shadow-lg">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>${project.playerCount.toLocaleString()} Playing</span>
        </div>`
      : `<div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-400 text-xs font-medium backdrop-blur-md">
          <span class="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
          <span>Offline</span>
        </div>`;

    const card = document.createElement("article");
    card.className = "group relative glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between";

    card.innerHTML = `
      <div>
        <div class="relative aspect-video overflow-hidden bg-zinc-950">
          <img 
            src="${project.image}" 
            alt="${project.title}" 
            loading="lazy" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          <div class="absolute top-3 left-3 flex gap-2">
            ${categoryBadge}
          </div>

          <div class="absolute top-3 right-3">
            ${playerCountBadge}
          </div>

          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <a 
              href="${project.url}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-2 bg-white text-zinc-950 px-5 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-zinc-200 transition-all transform translate-y-3 group-hover:translate-y-0"
            >
              <span>PLAY ON ROBLOX</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
        </div>

        <div class="p-6">
          <div class="flex items-start justify-between gap-2 mb-1.5">
            <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">${project.title}</h3>
            ${statusBadge}
          </div>
          
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              ${project.role}
            </span>
            <span class="text-xs font-mono text-zinc-400 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              <span>${formatCompact(project.visits)} visits</span>
            </span>
          </div>

          <p class="text-zinc-400 text-sm leading-relaxed mb-5">
            ${project.description}
          </p>

          <div class="mb-5 p-3.5 rounded-xl bg-zinc-900/70 border border-white/5">
            <div class="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              What I Did:
            </div>
            <ul class="space-y-1.5 text-xs text-zinc-300">
              ${project.highlights.map(h => `<li class="flex items-start gap-2"><span class="text-emerald-400 mt-0.5">•</span><span>${h}</span></li>`).join("")}
            </ul>
          </div>
        </div>
      </div>

      <div class="px-6 pb-6 pt-0">
        <div class="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
          ${project.tags.map(t => `<span class="px-2.5 py-1 text-[11px] font-medium bg-zinc-800/80 text-zinc-300 rounded-md border border-white/5">${t}</span>`).join("")}
        </div>
      </div>
    `;

    projectList.appendChild(card);
  });
}

function renderGroups() {
  const groupList = document.getElementById("group-list");
  if (!groupList) return;

  const sortedGroups = [...groups].sort((a, b) => (b.members || 0) - (a.members || 0));

  groupList.innerHTML = "";

  sortedGroups.forEach(group => {
    const card = document.createElement("div");
    card.className = "group glass-panel p-5 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between";

    card.innerHTML = `
      <div class="flex items-start gap-4 mb-4">
        <div class="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-950 border border-white/10 shadow-inner">
          <img src="${group.image}" alt="${group.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <h3 class="text-base font-bold text-white truncate">${group.name}</h3>
            <span class="text-[11px] font-bold px-2 py-0.5 rounded-full border ${group.badgeColor}">${group.role}</span>
          </div>
          <div class="text-xs font-mono text-emerald-400 font-semibold mb-1.5">
            ${formatCompact(group.members)} members
          </div>
          <p class="text-xs text-zinc-400 leading-relaxed">${group.description}</p>
        </div>
      </div>
      
      <div class="pt-3 border-t border-white/5 flex items-center justify-between">
        <span class="text-xs text-zinc-500 font-mono">${group.members.toLocaleString()} members</span>
        <a 
          href="${group.url}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <span>View Group</span>
          <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
    `;

    groupList.appendChild(card);
  });
}

function updateFilterCounts() {
  const allCount = projects.length;
  const ownedCount = projects.filter(p => p.category === "owned").length;
  const contributedCount = projects.filter(p => p.category === "contributed").length;

  const countAllEl = document.getElementById("count-all");
  const countOwnedEl = document.getElementById("count-owned");
  const countContributedEl = document.getElementById("count-contributed");

  if (countAllEl) countAllEl.textContent = allCount;
  if (countOwnedEl) countOwnedEl.textContent = ownedCount;
  if (countContributedEl) countContributedEl.textContent = contributedCount;
}

function setupFilterButtons() {
  const filterBtns = document.querySelectorAll("[data-filter]");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-filter");
      activeFilter = target;

      filterBtns.forEach(b => {
        b.classList.remove("bg-white", "text-zinc-950", "shadow-sm");
        b.classList.add("text-zinc-400", "hover:text-white");
      });

      btn.classList.add("bg-white", "text-zinc-950", "shadow-sm");
      btn.classList.remove("text-zinc-400", "hover:text-white");

      renderProjects();
    });
  });
}

function setupSortSelector() {
  const sortSelect = document.getElementById("sort-select");
  if (!sortSelect) return;

  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProjects();
  });
}

// Live Roblox API fetcher (via RoProxy with CORS headers)
async function fetchLiveStats() {
  let updated = false;

  // 1. Fetch Game Stats (Players + Visits)
  try {
    const universeIds = projects.map(p => p.universeId).filter(Boolean);
    if (universeIds.length > 0) {
      const res = await fetch(`https://games.roproxy.com/v1/games?universeIds=${universeIds.join(",")}`);
      if (res.ok) {
        const json = await res.json();
        if (json && Array.isArray(json.data)) {
          json.data.forEach(item => {
            const match = projects.find(p => p.universeId === item.id);
            if (match) {
              match.playerCount = typeof item.playing === "number" ? item.playing : match.playerCount;
              match.visits = typeof item.visits === "number" ? item.visits : match.visits;
              updated = true;
            }
          });
        }
      }
    }
  } catch (err) {
    console.debug("Live games stats fetch skipped/failed, using cached values:", err);
  }

  // 2. Fetch Group Member Counts
  try {
    const groupPromises = groups.map(async (group) => {
      if (!group.id) return;
      try {
        const res = await fetch(`https://groups.roproxy.com/v1/groups/${group.id}`);
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.memberCount === "number") {
            group.members = data.memberCount;
            updated = true;
          }
        }
      } catch (e) {
        // Ignore individual group fetch failure
      }
    });
    await Promise.allSettled(groupPromises);
  } catch (err) {
    console.debug("Live group stats fetch skipped/failed, using cached values:", err);
  }

  if (updated) {
    renderProjects();
    renderGroups();
    updateHeroTotalVisits();
    updateHeroTotalMembers();
  }
}

// Toast helper
function showToast(message) {
  const existing = document.getElementById("toast-notification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast-notification";
  toast.className = "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 border border-emerald-500/30 text-white shadow-2xl backdrop-blur-md toast-enter";
  toast.innerHTML = `
    <span class="flex h-2.5 w-2.5 relative">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
    </span>
    <span class="text-sm font-medium">${message}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("toast-enter");
    toast.classList.add("toast-leave");
    setTimeout(() => toast.remove(), 250);
  }, 2500);
}

// Discord copy button
function setupCopyDiscord() {
  const copyButtons = document.querySelectorAll(".copy-discord-btn");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const discordTag = "ll1ff";
      try {
        await navigator.clipboard.writeText(discordTag);
        showToast("Discord username copied: " + discordTag);
      } catch (err) {
        window.prompt("Copy Discord handle:", discordTag);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateFilterCounts();
  setupFilterButtons();
  setupSortSelector();
  renderProjects();
  renderGroups();
  setupCopyDiscord();
  updateHeroTotalVisits();
  updateHeroTotalMembers();

  // Fetch real-time live numbers
  fetchLiveStats();

  // Refresh live numbers every 60 seconds
  setInterval(fetchLiveStats, 60000);
});
