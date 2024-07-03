import fetch from 'node-fetch';
import { Headers } from 'node-fetch';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

(global as any).Headers = Headers;
(global as any).fetch = fetch;
