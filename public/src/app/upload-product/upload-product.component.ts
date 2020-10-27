import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.scss']
})
export class UploadProductComponent implements OnInit {

  // Global variables
  uploadForm: FormGroup = new FormGroup({
    productname: new FormControl('', Validators.required),
    productdescription: new FormControl('', Validators.required),
    productofferprice: new FormControl('', Validators.required),
    productactualprice: new FormControl('', Validators.required),
    productstock: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    productlocation: new FormControl('', Validators.required),
    pictures: new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit() {
  }

  // Upload product
  uploadProduct(): void {
    console.log('Upload product works!');
  }
}
