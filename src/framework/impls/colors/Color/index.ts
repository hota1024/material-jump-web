import { ColorInterface } from '@/src/framework/interfaces/Color'

/*
 * Color interface.
 */
export class Color implements ColorInterface {
  /**
   * Red.
   */
  r: number

  /**
   * Green.
   */
  g: number

  /**
   * Blue.
   */
  b: number

  /**
   * Constructor.
   *
   * @param r
   * @param g
   * @param b
   */
  constructor(r: number, g: number, b: number) {
    this.r = r
    this.g = g
    this.b = b
  }

  /**
   * To hex code.
   */
  toHexCode() {
    const r = this.r.toString(2).padStart(2, '0')
    const g = this.g.toString(2).padStart(2, '0')
    const b = this.b.toString(2).padStart(2, '0')

    return `#${r + g + b}`
  }
}
