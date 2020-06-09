/// <reference types="node" />
import { AsyncLocalStorage } from 'async_hooks';
export default class AsyncHttpContext {
    protected $context: AsyncLocalStorage<any>;
    constructor();
    $run(context: any, next: any): void;
    getStore(): any;
    enterWith(store: any): void;
    get ctx(): any;
}
