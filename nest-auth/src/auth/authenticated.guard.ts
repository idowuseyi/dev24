import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";


export class AuthenticatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        return request.isAuthenticated; // comes from passport, check if the session for the user exist and if yes keeps the user going.
    }
}