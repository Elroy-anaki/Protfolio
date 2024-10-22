const projectsSection = document.querySelector("#projects-section");
const belivesSection = document.querySelector("#belives-section");
const projectsPath = "/Protfolio/core/projects.json"
const belivesPath = "/Protfolio/core/my-belives.json"
let projects;
let belives;


async function getProjects(data, path, placeId, func) {
  const response = await fetch(path);
  const resData = await response.json();
  data = resData;
  func(data, placeId);
}
function buildProjects(arr, placeId) {
  console.log("HIII");
  placeId.innerHTML = "";
  arr.forEach((project) => {
    placeId.innerHTML += `
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

function buildBelives(arr, placeId) {
  placeId.innerHTML = "";
  arr.forEach((belive) => {
    placeId.innerHTML += `
    <div class="relative m-3 pb-2">
          <div class="absolute inset-x-1 bottom-0 h-1 bg-gradient-to-r from-white to-gray-400 mb-4"></div>
          <div class="m-5">
            <img
              src=${belive.icon}
              alt=""
              class="w-full h-32 object-contain rounded-full bg-gradient-to-t from-slate-300 to-slate-600 border-2 border-x-white"
            />
            <p class="text-gray-100 p-4 text-xl">${belive.title}</p>
          </div>
        </div>
    `
  })
}
getProjects(projects, projectsPath, projectsSection, buildProjects);
getProjects(belives, belivesPath, belivesSection, buildBelives);
