import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EncrdecrService } from 'src/app/shared/common/encrdecr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  spinner = false;
  hide = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private encrDecrService: EncrdecrService,
  ) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      UserName: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
    });
  }

  // for hide show password
  showPassword() {
    this.hide = !this.hide;
  }

  // for loginuser
  loginuser() {
    this.spinner = true;
    const Obj = {
      username: this.loginForm.value.UserName,
      password: this.loginForm.value.Password,
    }
    if (this.loginForm.valid) {
      localStorage.setItem('LoginCredintials', this.encrDecrService.encrypt(Obj));
      this.router.navigate(['/home']);
      this.loginForm.reset()
    } else {
      setTimeout(() => {
        this.spinner = false
      }, 200);
    }
  }
}

