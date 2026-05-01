import { createPage } from '../page/utils.js';

export function createShowsBySection(shows, section) {
  let html = '';

  html += `<h1 class="mb-4 text-center">${section.charAt(0).toUpperCase() + section.slice(1)}</h1>`;
  html += `<div class="row">`;


  shows.forEach((show) => {
    html += `

 <div class="col-md-4 mb-4">
        <div class="card h-100" style="background-color:#184F3C; color:white;">        
        <div class="card-body">
        <h2 class="card-title">${show.name}</h2>
        <img src="${show.img}" class="card-img-top" style="height:200px; object-fit:cover;">
            <p class="card-text mt-2">${show.description}</p>
            <p class="card-text mt-2">Género: ${show.genre}</p>
            <p class="card-text mt-2">Temporadas: ${show.seasons}</p>
          </div>
          <div class="card-footer text-center">
            <a href="${show.link}" target="_blank" class="btn btn-primary mt-2 mb-2">Ver más</a>
          </div>
        </div>
      </div>`
  });

  html += `</div>`;
  html += `<a href="/" class="btn btn-outline-light mt-3 mb-3">⬅ Volver</a>`;

  return createPage(html);
}

