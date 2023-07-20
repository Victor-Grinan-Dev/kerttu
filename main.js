const tutorialsData = [
  {
    source: "https://www.youtube.com/embed/y3r33AZhUvw",
    caption: "Caption for tutorial 1",
  },
  {
    source: "https://www.youtube.com/embed/W6vx6dqCZXg",
    caption: "Caption for tutorial 2",
  },
  {
    source: "https://www.youtube.com/embed/A77Xi2pE7Lg",
    caption: "Caption for tutorial 3",
  },
  {
    source: "https://www.youtube.com/embed/5VRkIaAkG2k",
    caption: "Caption for tutorial 4",
  },
];
const tutorialsSection = document.querySelector(".tutorials");
const copyright = document.querySelector(".footer__copyright");

tutorialsData.forEach((tutorial) => {
  tutorialsSection.innerHTML += `
  <div>
  <iframe
    width="280"
    height="150"
    src=${tutorial.source}
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

/* copyrights */
const year = new Date();
copyright.innerHTML = `<p>CopyRights &copy; ${year.getFullYear()}</p>`;
