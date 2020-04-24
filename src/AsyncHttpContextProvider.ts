import { IocContract } from '@adonisjs/fold'
import AsyncHttpContext from './AsyncHttpContext'
import AsyncHttpContextMiddleware from './AsyncHttpContextMiddleware'

export default class AppProvider {
  constructor (protected $container: IocContract) {
  }

  public register () {
    this.$container.singleton('Adonis/Core/AsyncHttpContext', () => {
      return new AsyncHttpContext()
    })

    this.$container.bind('Adonis/Core/AsyncHttpContextMiddleware', () => {
      const asyncContext = this.$container.use('Adonis/Core/AsyncHttpContext')

      return new AsyncHttpContextMiddleware(asyncContext)
    })
  }
}
