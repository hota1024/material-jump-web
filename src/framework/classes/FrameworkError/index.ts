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
   * Constructor.
   *
   * @param message
   */
  constructor(message: string) {
    super()
    this.message = `[${this.framework}${this.demiliter}${this.name}] ${message}`
  }
}
