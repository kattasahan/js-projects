import { list } from "./project-details/project-list.js";

const navBar = document.querySelector < HTMLDivElement > "#nav-bar";
const projectsContainer = document.getElementById("project-container");
const projectTemplate = document.getElementById("project");

export function getNavBar() {
  return navBar;
}
list.forEach((project) => {
  const tile = projectTemplate.content.cloneNode(true);
  const tileLink = tile.querySelector(".project-card");
  const tileImg = tile.querySelector(".project-img");
  const tileName = tile.querySelector(".project-name");

  tileLink.href = project.href;
  tileImg.src = project.imgSrc;
  tileName.innerText = project.name;

  projectsContainer.appendChild(tileLink);
});
