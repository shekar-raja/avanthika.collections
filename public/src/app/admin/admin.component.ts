import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from "./admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // Global variables
  loading: boolean = false;
  enableLogin: boolean = false;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  @Input() error: string | null;
  
  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
  }

  // login method
  login() {
    this.loading = true;
    
    // API call to get admin details
    this.adminService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe((result) => {
      setTimeout(() => {
        this.loading = false;
        this.error = "";
        if (result['result']) {
          if (result['data'].length > 0) {
            localStorage.setItem('admin', result['data'][0]['_id']);
          } else {
            this.error = "User not found";
          }
        } else {
          this.error = "Login error";
        }
      }, 2000);
    });
  }

  enableLoginButton() {
    if ((this.loginForm.controls.username.value !== "") && (this.loginForm.controls.password.value !== "")) {
      console.log("Got data");
      this.enableLogin = true;
    } else {
      console.log("did not get data");
      this.enableLogin = false;
    }
  }

}
