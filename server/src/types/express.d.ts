import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      id?: string | number; // Add `id` property to `Request`
    }
  }
}