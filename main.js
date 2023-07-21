const urlStart = "https://www.youtube.com/embed/";
const tutorialsData = [
  {
    source: "mjiJZlHQZEs",
    caption: "Meikkaamisen alkeet - Miia Ezen",
  },
  {
    source: "IGPZae203vA",
    caption: "Meikkaamisen alkeet 2 - Miia Ezen",
  },
  {
    source: "mj7kd8rW2Wg",
    caption: "SYKSYN 22 ARKIMEIKKI TUTORIAALI 🤎",
  },
  {
    source: "Sr2twSsPEDA",
    caption: "Mun uudistettu arkimeikki",
  },
  {
    source: "i8soat1tHS8",
    caption: "ÄLÄ MEIKKAA NÄIN",
  },
];
const tiktokLinks = [
  {
    url: "https://www.tiktok.com/@pinja.potasev?_t=8e9aIT1aG4J&_r=1",
    title: "@pinja.potasev",
  },
  {
    url: "https://www.tiktok.com/@aino.riipinen?_t=8e9aPMl6MQt&_r=1",
    title: "@aino.riipinen",
  },
  {
    url: "https://www.tiktok.com/@iammariaalexandra?_t=8e9aY0Pu3FT&_r=1",
    title: "@iammariaalexandra",
  },
];
const tutorialsSection = document.querySelector(".tutorials");
const copyright = document.querySelector(".footer__copyright");

tutorialsData.forEach((tutorial) => {
  tutorialsSection.innerHTML += `
  <div class="tutorialCard">
  <iframe
    width="280"
    height="150"
    src=${urlStart + tutorial.source}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    class="video"
  ></iframe>
  <p>${tutorial.caption}</p>
  </div>
  `;
});
const tikTokSection = document.querySelector(".tiktokLinks");
tiktokLinks.forEach((link) => {
  tikTokSection.innerHTML += `
  <li>
    <a href=${link.url}> ${link.title} </a>
  </li>`;
});

/* copyrights */
const year = new Date();
copyright.innerHTML = `<p>CopyRights &copy; Kerttu Pirskanen ${year.getFullYear()}</p>`;
