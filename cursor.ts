import fs from 'fs';
import path from 'path';

export interface CursorOptions {
  imagePath: string;
  hotspotX?: number;
  hotspotY?: number;
}

export class Cursor {
  private imagePath: string;
  private hotspotX: number;
  private hotspotY: number;

  constructor(options: CursorOptions) {
    this.imagePath = options.imagePath;
    this.hotspotX = options.hotspotX ?? 0;
    this.hotspotY = options.hotspotY ?? 0;
  }

  public getCursor(): string {
    const cursorData = fs.readFileSync(this.imagePath);
    const cursorDataURL = `data:image/png;base64,${cursorData.toString('base64')}`;
    return `url(${cursorDataURL}) ${this.hotspotX} ${this.hotspotY}, pointer`;
  }
}