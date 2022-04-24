class InternalServerError extends Error {
  statusCode: number;
  constructor() {
    super();
    this.statusCode = 500;
    this.message = 'Internal Server Error';
  }
}

export { InternalServerError };
