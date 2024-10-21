const projectsSection = document.querySelector("#projects-section");
let projects;

async function getProjects() {
  const response = await fetch("/Protfolio/projects.json");
  const data = await response.json();
  projects = data;
  buildProjects(projects);
}
getProjects();
function buildProjects(arr) {
  console.log("HIII");
  projectsSection.innerHTML = "";
  arr.forEach((project) => {
    projectsSection.innerHTML += `
        <div class="group relative w-72 m-2 border-2 border-orange-400 rounded-md">
            <img loading="lazy"
                src="${project.Image}"
                style="width: 100%; height: 200px"
                alt="${project.Name}"
                class="rounded-md"
            />
            
            <div class="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-400 via-slate-200 to-orange-700	 opacity-0 group-hover:opacity-75 z-1 p-3 ">
                
                <a href="${project.GitHubLink}" target="blank">
                  <p class="text-3xl text-black m-3 text-magic">${project.Name}</p>
                  <div class="m-3">
                    ${project.lang
                    .map((lang) => `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${lang}</span>`)
                    .join("")}
                  </div>
                </a>
            </div>
        </div>
          `;
  });
}
