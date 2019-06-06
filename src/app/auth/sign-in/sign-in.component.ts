import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// Services
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  sign_in_form: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.sign_in_form = this.formBuilder.group({
      login: ['', [Validators.required]],
      currentPassword: ['', [Validators.required]]
    });
  }

  signIn() {
    const val = this.sign_in_form.value;
    if (val.email && val.currentPassword) {
      this.authService.obtainAccessToken(val.email, val.currentPassword)
        .subscribe(
          (data) => {
            this.router.navigate(['admin/stations/']);
          }
        );
    }
  }
}
