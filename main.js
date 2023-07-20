const tutorialsData = [
  "https://www.youtube.com/embed/y3r33AZhUvw",
  "https://www.youtube.com/embed/W6vx6dqCZXg",
  "https://www.youtube.com/embed/A77Xi2pE7Lg",
  "https://www.youtube.com/embed/5VRkIaAkG2k",
];
const tutorialsSection = document.querySelector(".tutorials");
const copyright = document.querySelector(".footer__copyright");

tutorialsData.forEach((tutorial) => {
  tutorialsSection.innerHTML += `
    <iframe
    width="280"
    height="150"
    src=${tutorial}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    class="video"
  ></iframe>`;
});

/* copyrights */
const year = new Date();
copyright.innerHTML = `<p>CopyRights &copy; ${year.getFullYear()}</p>`;
