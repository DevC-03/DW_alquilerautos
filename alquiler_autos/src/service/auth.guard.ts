import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { AuthService } from "./auth.servcice";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{
    constructor(private router: Router, private route:ActivatedRoute, private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //const token = localStorage.getItem('token');
        if (this.authService.estaLogeado()){
            return true;
        }
        else {
            this.router.navigate(['/login'],{queryParams: {returnUrl: state.url}});
            return false;
        }
    }
}
