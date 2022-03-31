import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiConectService } from '../api-conect.service';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css'],
})
export class GetListComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiConectService: ApiConectService
  ) {
    this.form = fb.group({
      Id: [],
      nome: [],
    });
  }
  Buscar() {
    const id = this.form.controls['Id'].value;

    this.apiConectService.GetPessoa(id).subscribe((data) => {
      this.form.controls['nome'].setValue(data.value), console.log(data);
    });
  }
  ngOnInit(): void {}
}
