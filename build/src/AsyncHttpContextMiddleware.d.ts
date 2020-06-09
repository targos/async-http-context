/// <reference types="@adonisjs/http-server/build/adonis-typings" />
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
export default class AsyncHttpContextMiddleware {
    protected $context: any;
    constructor($context: any);
    handle(ctx: HttpContextContract, next: () => Promise<void>): Promise<any>;
}
