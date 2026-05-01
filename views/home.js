import { createPage } from "../page/utils.js";

export function createHomePage(sections) {
   let html = "";

  html += `<h1 class="mb-4 text-center">🎬 Series</h1>`;
  html += `<div class="row">`;

  sections.forEach(section => {
    html += `
      <div class="col-md-3 mb-3">
        <a href="/section/${section}" class="btn btn-outline-light w-100">
          ${section.toUpperCase()}
        </a>
      </div>
    `;
  });

  html += `</div>`;
  return createPage(html);
}