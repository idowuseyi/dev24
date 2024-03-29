 import { PassportSerializer } from "@nestjs/passport";
 import { Injectable } from "@nestjs/common";

 @Injectable()
 export class SessionSerializer extends PassportSerializer {
    serializeUser(user: any, done: (err: Error, user: any) => void): any {
        //done(null, {id: user.id})
        done(null, user);        
    }
    deserializeUser(payload: any, done: (err: Error, payload: string) => void) {
        //const user = this.usersService.findById(payload)
        done(null, payload);        
    }
 }