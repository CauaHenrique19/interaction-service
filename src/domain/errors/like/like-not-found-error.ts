export class LikeNotFoundError extends Error {
  constructor() {
    super('Like Not Found');
    this.name = 'LikeNotFoundError';
  }
}
