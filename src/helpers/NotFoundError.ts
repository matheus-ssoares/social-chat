class NotFoundError extends Error {
  statusCode: number;
  customMessage?: string;
  constructor() {
    super();
    this.statusCode = 404;
    this.message = 'Not found';
  }
}

export { NotFoundError };
