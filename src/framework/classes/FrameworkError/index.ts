/**
 * FrameworkError.
 */
export class FrameworkError extends Error {
  /**
   * Name.
   */
  public name = 'FrameworkError'

  /**
   * Framework string.
   */
  private framework = 'Framework'

  /**
   * Demiliter.
   */
  private demiliter = '.'

  /**
   * To string.
   */
  toString() {
    return `[${this.framework}${this.demiliter}${this.name}] ${this.message}`
  }
}
