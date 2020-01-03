import { FillStyle } from '../../types/FillStyle'
import { StrokeStyle } from '../../types/StrokeStyle'
import { FontOptions } from '../../types/FontOptions'

/*
 * Renderer interface.
 */
export interface RendererInterface {
  /**
   * Fill rectangle.
   *
   * @param x
   * @param y
   * @param w
   * @param h
   * @param style
   */
  fillRect(x: number, y: number, w: number, h: number, style?: FillStyle): void

  /**
   * Stroke rectanble.
   *
   * @param x
   * @param y
   * @param w
   * @param h
   * @param style
   */
  strokeRect(
    x: number,
    y: number,
    w: number,
    h: number,
    style?: StrokeStyle
  ): void

  /**
   * Fill circle.
   *
   * @param x
   * @param y
   * @param radius
   * @param style
   */
  fillCircle(x: number, y: number, radius: number, style?: FillStyle): void

  /**
   * Stroke circle.
   *
   * @param x
   * @param y
   * @param radius
   * @param style
   */
  strokeCircle(x: number, y: number, radius: number, style?: StrokeStyle): void

  /**
   * Line.
   *
   * @param x0
   * @param y0
   * @param x1
   * @param y1
   * @param style
   */
  line(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    style?: StrokeStyle
  ): void

  /**
   * Fill text.
   *
   * @param text
   * @param x
   * @param y
   * @param options
   */
  fillText(text: string, x: number, y: number, options?: FontOptions): void
}
