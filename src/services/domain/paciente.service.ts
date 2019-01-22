import { APP_CONFIG } from '../../config/api.config';

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import { PacienteDTO } from '../../models/paciente.dto';

@Injectable()
export class PacienteService{

    constructor(public http: HttpClient){

    }
    findAll() : Observable<PacienteDTO[]>{
        return this.http.get<PacienteDTO[]>(`${APP_CONFIG.baseUrl}/pacientes`);
    }
}