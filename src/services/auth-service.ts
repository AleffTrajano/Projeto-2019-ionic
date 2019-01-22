import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { APP_CONFIG } from "../config/api.config";


@Injectable()
export class AuthService {

    constructor(public http: HttpClient) {
    }

    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${APP_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }
}