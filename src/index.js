import Plugin from 'stc-plugin';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

/**
 * AutoprefixerPlugin Class
 */
export default class AutoprefixerPlugin extends Plugin {
  /**
   * run
   * @return {Object} content object
   */
  async run() {
    const content = await this.getContent('utf-8');
    const option = this.options;

    const prefixer = postcss([autoprefixer(option)]);

    let result = null;

    try {
      result = await prefixer.process(content);
    } catch (e) {
      this.fatal(`[${e.status}] ${e.message}`, e.line, e.column);
    }

    return {content: result.css};
  }

  /**
   * update
   * @param  {Object} options.content options
   * @return {undefined}
   */
  update({content}) {
    this.setContent(content);
  }

  /**
   * use cluster
   * @return {Boolean} use cluster
   */
  static cluster() {
    return true;
  }

  /**
   * use cache
   * @return {Boolean} use cache
   */
  static cache() {
    return true;
  }

  /**
   * return default include files
   * @return {RegExp} extname regexp
   */
  static include() {
    return /\.css$/;
  }
}
