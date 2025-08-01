export class CommentNotFoundError extends Error {
  constructor() {
    super('Comment Not Found');
    this.name = 'CommentNotFoundError';
  }
}
