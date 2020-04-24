import { AsyncLocalStorage } from 'async_hooks'

const proxyHandler: ProxyHandler<AsyncHttpContext> = {
  get (target, name, receiver) {
    /**
     * if value exists on target, return that
     */
    if (target[name] !== undefined) {
      return Reflect.get(target, name, receiver)
    }

    return Reflect.get(target.context, name, receiver)
  },

  set (target, name, value, receiver) {
    return Reflect.set(target.context, name, value, receiver)
  },
}

export default class AsyncHttpContext {
  protected $context: AsyncLocalStorage<any>

  constructor () {
    this.$context = new AsyncLocalStorage()

    return new Proxy(this, proxyHandler)
  }

  public run (context, next) {
    return this.$context.run(context, next)
  }

  public get context () {
    const store = this.$context.getStore()
    if (store === undefined) {
      throw new Error('AsyncHttpContext cannot be used outside of a request context')
    }
    return store;
  }
}

