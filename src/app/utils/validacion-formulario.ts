import {EmpleadoService} from '../core';
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {map, Observable, tap} from 'rxjs';

export class ValidacionFormulario {

  static existeEmpleadoConCedula(empleadoService: EmpleadoService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> => {
      return empleadoService
        .findAllWithCriteria(control.value)
        .pipe(
          map((result) =>
            result.length > 0 ? {usernameAlreadyExists: true} : null,
          ),
        );
    };
  }

  static existeEmpleadoConCorreoElectronico(empleadoService: EmpleadoService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> => {
      return empleadoService
        .findAllWithCriteria(undefined, control.value)
        .pipe(
          map((result) =>
            result.length > 0 ? {usernameAlreadyExists: true} : null,
          ),
        );
    };
  }
}
