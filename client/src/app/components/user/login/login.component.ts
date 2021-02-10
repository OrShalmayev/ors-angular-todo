import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../../../services/authentication.service'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  //Properties
  public form: FormGroup;
  public emailError:string;
  public passwordError:string;
  public isFormValid:boolean = false;
  public credentials: TokenPayload = {
    _id: '',
    email: '',
    password: ''
  }

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  /**
   * Life cycle
   */
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.minLength(6)]]
    })
    // watch for changes and validate.
    this.form.valueChanges.subscribe(data=>{
      let email = this.form.get('email');
      let password = this.form.get('password');
      this.emailError = '';
      this.passwordError = '';

      /**@Validations */

        // name validation
        if(password.dirty && password.errors){
          if(password.errors.required){
            this.passwordError = "password is required.";
          }
          if(password.errors.minlength){
            this.passwordError = `password must contain at least ${password.errors.minlength.requiredLength}, current length: ${password.errors.minlength.actualLength}`;
          }
        }

        // email validation
        if(email.dirty && email.errors){
          if(email.errors.required){
            this.emailError = "Email is required.";
          }
          if(email.errors.email){
            this.emailError = 'Email is not valid.';
          }
        }

        // check if form is valid
        if(this.emailError.length > 0 || this.passwordError.length > 0){
          this.isFormValid = false;
        } else {
          this.isFormValid = true;
        }
    });
  }

  public login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/')
      },
      err => {
        console.error(err)
      }
    )
  }

  public validateFields(field, fieldError){
    if(field.invalid && field.dirty){
      if(field.errors['required'])
        fieldError = `${field} is required!`;

      if(field.errors['minlength'])
        fieldError = `${field} must be at least 3 characters.`;
    }
  }
}
