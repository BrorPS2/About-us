const profiles = {
  a: {
    name: "Aaron",
    label: "PROFILE / 01",
    intro: "Hi i am Aaron. I like gaming and math.",
    bio: "I’m into computers, gaming, and MTB. I enjoy gaming in my free time, messing around with computers, and getting out on my bike.",
    into: "Mtb, Math, Gaming and Computers",
    now: "I'm currently in school and in my freetime i play videogames and i also do some mountainbiking",
    other: "Bror",
    accent: "a"
  },
  b: {
    name: "Bror",
    label: "PROFILE / 02",
    intro: "I'm Bror and i like linux and gaming.",
    bio: "Hi, I’m Bror, a teenager from Sweden. I’m currently not in school and spend my time exploring technology, customizing my computer, and experimenting with different projects and ideas. I don’t have professional programming experience yet, but I enjoy learning by trying things out and figuring out how they work.",
    into: "Gaming, messing with computers, and trying new tech",
    now: "I'm currently figuring things out, exploring technology, and working out what I want to do next.",
    other: "Aaron",
    accent: "b"
  }
};

const profileContent = document.querySelector("#profile-content");
if (profileContent) {
  const selected = new URLSearchParams(window.location.search).get("person")?.toLowerCase();
  const profile = profiles[selected] || profiles.a;
  document.title = `${profile.name} — A + B`;
  document.querySelector("#profile-name").firstChild.textContent = profile.name;
  document.querySelector("#profile-initial").textContent = profile.name;
  document.querySelector("#profile-label").innerHTML = `<span class="status-dot"></span> ${profile.label}`;
  document.querySelector("#profile-intro").textContent = profile.intro;
  document.querySelector("#profile-bio").textContent = profile.bio;
  document.querySelector("#profile-into").textContent = profile.into;
  document.querySelector("#profile-now").textContent = profile.now;
  document.querySelector("#other-profile").href = `profile.html?person=${profile.other.toLowerCase()}`;
  document.querySelector("#other-profile").innerHTML = `MEET ${profile.other} <span aria-hidden="true">↗</span>`;
  document.querySelector("#profile-visual").classList.add(`visual-${profile.accent}`);
}

document.querySelectorAll(".profile-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty("--pointer-x", `${x * 100}%`);
    card.style.setProperty("--pointer-y", `${y * 100}%`);
    card.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
    card.style.setProperty("--tilt-y", `${(x - 0.5) * 7}deg`);
  });
  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  });
});
