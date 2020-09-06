interface Print {
  /**
   * Full lightshot id (`undefined` if not found)
   */
  id?: string;
  /**
   * Short lightshot id
   */
  shortId: string;
  /**
   * Original image address
   */
  link: string;
  /**
   * Right address of the lightshot image
   */
  shortLink: string;
  /**
   * Whether the image exists or not
   */
  isValid: boolean;
}

declare module 'mozuku' {
  /**
   * Function to validate whether the screen capture exists or not.
   *
   * @param id Small id of a screenshot
   */
  export function validate(id: string): Promise<Print>;

  /**
   * Function to generate valid screenshot
   */
  export function random(): Promise<Print>;

  /**
   * Function to generate totally random ids
   *
   * @param len Id size it will generate
   */
  export function genRandomId(len: number): string;
}
