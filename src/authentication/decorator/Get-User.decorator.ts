import { createParamDecorator,ExecutionContext } from "@nestjs/common";
import { User } from "../entities/user.entites";


export const getUser = createParamDecorator(
    (_data,ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
})