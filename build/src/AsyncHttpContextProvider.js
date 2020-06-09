"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AsyncHttpContext_1 = __importDefault(require("./AsyncHttpContext"));
const AsyncHttpContextMiddleware_1 = __importDefault(require("./AsyncHttpContextMiddleware"));
class AppProvider {
    constructor($container) {
        this.$container = $container;
    }
    register() {
        this.$container.singleton('Adonis/Core/AsyncHttpContext', () => {
            return new AsyncHttpContext_1.default();
        });
        this.$container.bind('Adonis/Core/AsyncHttpContextMiddleware', () => {
            const asyncContext = this.$container.use('Adonis/Core/AsyncHttpContext');
            return new AsyncHttpContextMiddleware_1.default(asyncContext);
        });
    }
}
exports.default = AppProvider;
