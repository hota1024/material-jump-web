import { ColorInterface } from '../../interfaces/Color'
import { LineCap } from '../LineCap'
import { LineJoin } from '../LineJoin'

/*
 * Stroke style.
 */
export type StrokeStyle = {
  /**
   * Color.
   */
  color?: ColorInterface

  /**
   * Line width.
   */
  width?: number

  /**
   * Line cap.
   */
  cap?: LineCap

  /**
   * Line join.
   */
  join?: LineJoin

  /**
   * Miter limit.
   */
  miterLimit: number
}
