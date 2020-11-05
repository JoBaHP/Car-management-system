import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from '../../models/user';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user: User;
  userSubmitted: boolean;

  constructor(
    private userService: UserServiceService,
    private alertify: AlertifyService,
    private fb: FormBuilder,) {

  }

  ngOnInit() {
    this.crateRegistrationForm();
    /*     this.registerationForm = new FormGroup({
          userName: new FormControl(null, Validators.required),
          email: new FormControl(null, [Validators.required, Validators.email]),
          password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
          confirmPassword: new FormControl(null, [Validators.required]),
          mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
        }, this.passwordMatchingValidatior
        ); */
  }
  passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
      { notmatched: true };
  }

  crateRegistrationForm() {
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, { validators: this.passwordMatchingValidatior })
  }

  onSubmit() {
    console.log(this.registerationForm.value);
    this.userSubmitted = true;

    if (this.registerationForm.valid) {
      // this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userDate());
      this.registerationForm.reset();
      this.userSubmitted = false;
      this.alertify.success('Congratulations, you are successfully registered');
    } else {
      this.alertify.error('Please, provide the required fields');
    }
  }

  userDate() {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }



  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }
  // ------------------------

}
