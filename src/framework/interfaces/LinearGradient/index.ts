import { Point } from '../../types/Point'
import { ColorInterface } from '../Color'

/*
 * Liner gradient interface.
 */
export interface LinerGradientInterface {
  /**
   * Start point.
   */
  start: Point

  /**
   * End point.
   */
  end: Point

  /**
   * Add color stop.
   *
   * @param position
   * @param color
   */
  addColorStop(position: number, color: ColorInterface): this
}
