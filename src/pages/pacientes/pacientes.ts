import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PacienteService } from '../../services/domain/paciente.service';
import { PacienteDTO } from '../../models/paciente.dto';
import { APP_CONFIG } from '../../config/api.config';

/**
 * Generated class for the PacientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pacientes',
  templateUrl: 'pacientes.html',
})
export class PacientesPage {

  bucketUrl: string = APP_CONFIG.bucketBaseUrl;

  items: PacienteDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public pacienteService:PacienteService ) {
  }

  ionViewDidLoad() {
    this.pacienteService.findAll()
    .subscribe(response =>{
      this.items = response;
    },
    
    error => {});
  
  }
}
