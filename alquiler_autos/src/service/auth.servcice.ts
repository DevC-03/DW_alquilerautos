import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router,ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { errorContext } from "rxjs/internal/util/errorContext";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    private token = new BehaviorSubject<string | null>(null);
    private apiUrl = "http://127.0.0.1:8000/api"

    constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute){}

    login(username: string, password: string) {
        const headers = { 'x-api-key': 'ValorAPIKey'}
        this.http.post<{token:string}>(this.apiUrl + 'obetener_token/', {username, password}, {headers}).subscribe(x => {
            this.token.next(x.token);
            localStorage.setItem('token',x.token)
            
            const urlRetorno = this.route.snapshot.queryParamMap.get('return') || '/';
            this.router.navigateByUrl(urlRetorno);
        }, error => {
            console.error('Error login', error)
        }); 
    }

    estaLogeado(){
        return this.token.value !== null;
    }
}