export class ReviewNotFoundError extends Error {
  constructor() {
    super('Review Not Found');
    this.name = 'ReviewNotFoundError';
  }
}
