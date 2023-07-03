import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      oldpassword: ['', [Validators.required]],
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmnewpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit(newPassword: HTMLInputElement, reNewPassword: HTMLInputElement) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // this.loading = true;
    // this.accountService.register(this.form.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.alertService.success('Registration successful', { keepAfterRouteChange: true });
    //       this.router.navigate(['../login'], { relativeTo: this.route });
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     });
    if (newPassword.value == reNewPassword.value) {
      alert('Password has been reset successfully !!!')
    }
    else {
      alert('Input fileds mismatched');
    }
  }
}
