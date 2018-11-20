export class AuthService{
    isAuth(): boolean {
        return !!localStorage.getItem("token");
    }
}