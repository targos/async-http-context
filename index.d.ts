declare module '@ioc:Adonis/Core/AsyncHttpContext' {
  import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

  interface IAsyncHttpContext {
    /**
     * Returns the current AdonisJS HTTP context or throws if there is none.
     */
    readonly ctx: HttpContextContract

    /**
     * Returns the current AdonisJS HTTP context or `undefined`.
     */
    getStore(): HttpContextContract | undefined

    /**
     * Transition into the context for the remainder of the current synchronous
     * execution. This method can be used in tests to mock the AdonisJS context.
     */
    enterWith(context: Partial<HttpContextContract>): void
  }

  const AsyncHttpContext: HttpContextContract & IAsyncHttpContext
  export default AsyncHttpContext
}
