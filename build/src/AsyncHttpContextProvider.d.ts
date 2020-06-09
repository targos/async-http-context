import { IocContract } from '@adonisjs/fold';
export default class AppProvider {
    protected $container: IocContract;
    constructor($container: IocContract);
    register(): void;
}
