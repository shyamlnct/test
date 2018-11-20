import {AuthService} from './auth.service'
describe('service:isAuth',()=>{
    let service: AuthService;
    beforeEach(()=>{
        service=new AuthService();
    });
    
    afterEach(()=>{
            service=null;
            localStorage.removeItem("token");
    });

    it('should authenticated means it should return true.',()=>{
            localStorage.setItem("token","12345");
            expect(service.isAuth()).toBeTruthy();
    });
    
    it('should not be authenticated means it should return false',()=>{
        expect(service.isAuth()).toBeFalsy();
    });

});