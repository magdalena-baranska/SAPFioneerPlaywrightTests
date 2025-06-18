export class ColorHelper {
  static convertRgbToHex(rgb: string): string {
    const result = rgb
      .replace(/rgba?\(/, '')
      .replace(/\)/, '')
      .split(',')
      .map((v) => parseInt(v.trim(), 10));

    const [r, g, b] = result;
    return `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
  }
}
