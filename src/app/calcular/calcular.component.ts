import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Calculo } from 'src/Models/Calculo.model';
import { ApiConectService } from '../api-conect.service';
@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css'],
})
export class CalcularComponent implements OnInit {
  public form: FormGroup;
  public calculo!: Calculo;

  constructor(
    private fb: FormBuilder,
    private apiConectService: ApiConectService
  ) {
    this.form = fb.group({
      valor: [],
      parc: [],
      total: [],
    });
  }
  Calcular() {
    this.calculo = {
      Parcelas: this.form.controls['parc'].value,
      Valor: this.form.controls['valor'].value,
      
    };

    this.apiConectService.Calcular(this.calculo).subscribe((data) => {
      this.form.controls['total'].setValue(data);
    });
  }

  ngOnInit(): void {}
}
