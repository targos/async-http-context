"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncHttpContextMiddleware {
    constructor($context) {
        this.$context = $context;
    }
    async handle(ctx, next) {
        return this.$context.$run(ctx, next);
    }
}
exports.default = AsyncHttpContextMiddleware;
