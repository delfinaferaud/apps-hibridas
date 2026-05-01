export function createPage(content) {
  return `
    <html>
      <head>
        <title>Series App</title>

        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

      </head>

      <body class="bg-dark text-light">

        <nav class="navbar navbar-dark bg-black px-3">
          <a class="navbar-brand" href="/">🎬 Series App</a>
        </nav>

        <div class="container mt-4">
          ${content}
        </div>

      </body>
    </html>
  `;
}