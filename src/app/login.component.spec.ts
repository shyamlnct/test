import {AuthService} from '../service/auth.service'
import {LoginComponent} from './login.component'
class MockedAuthService extends AuthService {
    authenticated=false;
    isAuth(){
        return this.authenticated;
    }
}
describe('Test: Component with dependency',()=>{
    let authService:MockedAuthService;
    let loginComponent:LoginComponent;
    beforeEach(()=>{
        authService= new MockedAuthService();
         loginComponent= new LoginComponent(authService);     
    });
    afterEach(()=>{
        authService=null;
        loginComponent=null;
    });
    it('needsLogin method should return false if user is not authenticated',()=>{
        authService.authenticated=false;
        expect(loginComponent.needsLogin()).toBeTruthy();
    });
    it('needsLogin method should return true if user is authenticated',()=>{    
        authService.authenticated=true;
        expect(loginComponent.needsLogin()).toBeFalsy();
    });
});

// describe('Test: Component with dependency',()=>{
//     let authService:AuthService;
//     let loginComponent:LoginComponent;
//     beforeEach(()=>{
//         authService= new AuthService();
//          loginComponent= new LoginComponent(authService);     
//     });
//     afterEach(()=>{
//         localStorage.removeItem('token');
//         authService=null;
//         loginComponent=null;
//     });
//     it('needsLogin method should return false if user is not authenticated',()=>{
//         expect(loginComponent.needsLogin()).toBeTruthy();
//     });
//     it('needsLogin method should return true if user is authenticated',()=>{    
//         localStorage.setItem('token','12345');
//         expect(loginComponent.needsLogin()).toBeFalsy();
//     });
// });
