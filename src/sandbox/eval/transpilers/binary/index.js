// @flow
import Transpiler from '../';
import { type LoaderContext } from '../../transpiled-module';

/**
 * Just fetches a file from the interwebs and converts it to a blob
 *
 * @class BinaryTranspiler
 * @extends {Transpiler}
 */
class BinaryTranspiler extends Transpiler {
  doTranspilation(code: string, loaderContext: LoaderContext) {
    return fetch(code)
      .then(res => res.blob())
      .then(blob => ({ transpiledCode: blob }));
  }
}

const transpiler = new BinaryTranspiler();

export { BinaryTranspiler };

export default transpiler;
