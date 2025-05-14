import { ObjectId } from 'mongodb';

export function esValidoElId(id: string): boolean {
  return typeof id === 'string' && ObjectId.isValid(id) && (new ObjectId(id)).toString() === id;
}