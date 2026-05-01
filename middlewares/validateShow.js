const validSections = ['drama', 'comedia', 'acción', 'misterio', 'crimen', 'infantil', 'animación', 'documental'];

const validateCreateShow = (req, res, next) => {
  const data = req.body;
  const errors = [];

  if (!data.name || data.name.trim() === '') {
    errors.push('El nombre es obligatorio');
  }

  if (!data.description) {
    errors.push('La descripción es obligatoria');
  }

  if (!data.link || !data.link.startsWith('http')) {
    errors.push('El link es inválido');
  }

  if (!data.img) {
    errors.push('La imagen es obligatoria');
  }

  if (!data.genre) {
    errors.push('El género es obligatorio');
  }

  if (!data.seasons || isNaN(data.seasons)) {
    errors.push('Las temporadas deben ser un número');
  }

  if (!data.section || !validSections.includes(data.section)) {
    errors.push('Sección inválida');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

const validateUpdateShow = (req, res, next) => {
  const data = req.body;
  const errors = [];

  if ('name' in data && data.name.trim() === '') {
    errors.push('El nombre no puede estar vacío');
  }

  if ('description' in data && data.description.trim() === '') {
    errors.push('La descripción no puede estar vacía');
  }

  if ('link' in data && !data.link.startsWith('http')) {
    errors.push('El link es inválido');
  }

  if ('img' in data && data.img.trim() === '') {
    errors.push('La imagen no puede estar vacía');
  }

  if ('genre' in data && data.genre.trim() === '') {
    errors.push('El género no puede estar vacío');
  }

  if (
    'seasons' in data &&
    (isNaN(data.seasons) || typeof data.seasons === 'string')
  ) {
    errors.push('Las temporadas deben ser un número');
  }

  if ('section' in data && !validSections.includes(data.section)) {
    errors.push('Sección inválida');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

export {
  validateCreateShow,
  validateUpdateShow,
};