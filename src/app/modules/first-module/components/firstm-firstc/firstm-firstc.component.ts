import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-firstm-firstc',
  templateUrl: './firstm-firstc.component.html',
  styleUrls: ['./firstm-firstc.component.scss']
})
export class FirstmFirstcComponent implements OnInit {

  form: any;

  constructor(
    private formBuild: FormBuilder
  ) {
    this.form = formBuild.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, {
      validators: ConfirmedValidator('password', 'confirmPassword')
    })
  }

  ngOnInit(): void {
  }

  formSubmit(formData: any) {
    if(!this.form.valid) return;
    console.log(formData.value)
  }

}

export function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors?.['confirmedValidator']) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
