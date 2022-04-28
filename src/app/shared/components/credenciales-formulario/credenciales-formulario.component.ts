import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginInterface} from '../../../utils';

@Component({
  selector: 'app-credenciales-formulario',
  templateUrl: './credenciales-formulario.component.html',
  styleUrls: ['./credenciales-formulario.component.scss'],
})
export class CredencialesFormularioComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  @Output() emitCredenciales: EventEmitter<LoginInterface> = new EventEmitter<LoginInterface>();
  @Input() esCrear = true;

  constructor(private readonly _formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  register(event: Event) {
    event.preventDefault();
    if (this.form?.valid) {
      this.emitCredenciales.emit(this.form?.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  // validators: MyValidators.matchPasswords

  private buildForm() {
    this.form = this._formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(16)]],
    });
  }
}
