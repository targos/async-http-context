declare module '@ioc:Adonis/Core/AsyncHttpContext' {
  import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

  const AsyncHttpContext: HttpContextContract
  export default AsyncHttpContext
}
