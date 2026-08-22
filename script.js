console.log("loaded script.js");

const teams = {
  knights: {
    name: "TRX Knights",
    label: "MAIN ROSTER",
    description: "The flagship Turbo Reign X lineup — our primary competitive roster.",
    coach: { name: "Eclipse", tracker: "" },
    players: [
      { name: "Lyfix", role: "DUELIST", tracker: "https://tracker.gg/valorant" },
      { name: "Yonko Tyx", role: "INITIATOR", tracker: "https://tracker.gg/valorant" },
      { name: "EgyTurtle", role: "CONTROLLER / IGL", tracker: "https://tracker.gg/valorant" },
      { name: "Layz", role: "SENTINEL", tracker: "https://tracker.gg/valorant" },
      { name: "Glizzy Peek", role: "FLEX", tracker: "https://tracker.gg/valorant/profile/riot/glizzy%20peek%232428/overview?platform=pc&playlist=competitive&season=4f0864e2-40af-28a4-de2c-0e9e64e75f23" }
    ]
  },

  power: {
    name: "TRX Power",
    label: "ROSTER 02",
    description: "TRX Power brings aggressive pacing, confidence and mechanical strength.",
    coach: { name: "", tracker: "" },
    players: [
      { name: "Player One", role: "DUELIST", tracker: "https://tracker.gg/valorant" },
      { name: "Player Two", role: "INITIATOR", tracker: "https://tracker.gg/valorant" },
      { name: "Player Three", role: "CONTROLLER", tracker: "https://tracker.gg/valorant" },
      { name: "Player Four", role: "SENTINEL", tracker: "https://tracker.gg/valorant" },
      { name: "Player Five", role: "FLEX", tracker: "https://tracker.gg/valorant" }
    ]
  },

  mura: {
    name: "TRX Mura",
    label: "ROSTER 03",
    description: "TRX Mura is built around smart reads, coordinated executes and steady growth.",
    coach: { name: "", tracker: "" },
    players: [
      { name: "Player One", role: "DUELIST", tracker: "https://tracker.gg/valorant" },
      { name: "Player Two", role: "INITIATOR", tracker: "https://tracker.gg/valorant" },
      { name: "Player Three", role: "CONTROLLER", tracker: "https://tracker.gg/valorant" },
      { name: "Player Four", role: "SENTINEL", tracker: "https://tracker.gg/valorant" },
      { name: "Player Five", role: "FLEX", tracker: "https://tracker.gg/valorant" }
    ]
  },

  bind: {
    name: "TRX Bandits",
    label: "ROSTER 04",
    description: "TRX Bind combines flexibility, teamwork and a fearless competitive mindset.",
    coach: { name: "", tracker: "" },
    players: [
      { name: "Player One", role: "DUELIST", tracker: "https://tracker.gg/valorant" },
      { name: "Player Two", role: "INITIATOR", tracker: "https://tracker.gg/valorant" },
      { name: "Player Three", role: "CONTROLLER", tracker: "https://tracker.gg/valorant" },
      { name: "Player Four", role: "SENTINEL", tracker: "https://tracker.gg/valorant" },
      { name: "Player Five", role: "FLEX", tracker: "https://tracker.gg/valorant" }
    ]
  }
};

// ==========================================
// Roster rendering
// ==========================================
const tabs = document.querySelectorAll(".team-tab");
const playersGrid = document.getElementById("playersGrid");
const rosterTitle = document.getElementById("rosterTitle");
const rosterLabel = document.getElementById("rosterLabel");
const rosterDescription = document.getElementById("rosterDescription");
const coachWrap = document.getElementById("coachWrap");

function renderTeam(teamKey) {
  const team = teams[teamKey];
  if (!team) return;

  rosterTitle.textContent = team.name;
  rosterLabel.textContent = team.label;
  rosterDescription.textContent = team.description;

  playersGrid.innerHTML = team.players
    .map((player, index) => `
      <article class="player-card" data-number="0${index + 1}">
        <div class="player-avatar">PLAYER ${index + 1}</div>
        <span class="player-role">${player.role}</span>
        <h4 class="player-name">${player.name}</h4>
        <a
          class="player-tracker"
          href="${player.tracker}"
          target="_blank"
          rel="noreferrer"
          aria-label="Open ${player.name}'s Tracker profile"
        >
          View Tracker ↗
        </a>
      </article>
    `)
    .join("");

  // Coach is completely optional.
  // If coach.name is empty, nothing is shown on the website.
  if (team.coach && team.coach.name.trim()) {
    const trackerLink = team.coach.tracker && team.coach.tracker.trim()
      ? `<a class="coach-tracker" href="${team.coach.tracker}" target="_blank" rel="noreferrer">View Tracker ↗</a>`
      : "";

    coachWrap.innerHTML = `
      <article class="coach-card">
        <div>
          <span class="coach-label">COACH</span>
          <h4>${team.coach.name}</h4>
        </div>
        ${trackerLink}
      </article>
    `;
  } else {
    coachWrap.innerHTML = "";
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderTeam(tab.dataset.team);
  });
});

// Load main team first
renderTeam("knights");

// ==========================================
// Mobile menu
// ==========================================
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// ==========================================
// Small reveal animation
// ==========================================
const revealTargets = document.querySelectorAll(
  ".section-heading, .team-tabs, .roster-panel, .trophy-card, .about-card, .mini-card, .contact-card"
);

revealTargets.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealTargets.forEach((item) => observer.observe(item));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
