import { Cursor,CursorOptions } from './cursor';

export default function createCursor(options: CursorOptions): string {
  const cursor = new Cursor(options);
  return cursor.getCursor();
}