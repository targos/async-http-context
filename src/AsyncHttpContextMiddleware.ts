import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AsyncHttpContextMiddleware {
  constructor (protected $context: any) {
  }

  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    return this.$context.runSyncAndReturn(ctx, next)
  }
}
