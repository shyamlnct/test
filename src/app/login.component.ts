import {Component} from '@angular/core'
import {AuthService } from '../service/auth.service'
@Component({
    selector:'app-login',
    template:`<a [hidden]="needsLogin()">login</a>`
})
export class LoginComponent{
    constructor(private auth:AuthService){};
    needsLogin(){
        return !this.auth.isAuth();
    }
}
