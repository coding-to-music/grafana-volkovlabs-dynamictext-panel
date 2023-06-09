import { CodeLanguage, Format } from '../constants';

/**
 * Editor Options
 */
export interface EditorOptions {
  /**
   * Height
   *
   * @type {number}
   */
  height: number;

  /**
   * Format
   *
   * @type {Format}
   */
  format: Format;

  /**
   * Language
   *
   * @type {CodeLanguage}
   */
  language: CodeLanguage;
}
