import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadProductService } from "./upload-product.service";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.scss']
})
export class UploadProductComponent implements OnInit {
  
  // Global variables
  stock: boolean;
  filesArray: any = [];
  image;
  loading: boolean = false;
  error: string;
  enableUpload: boolean = true;
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

  constructor(
    private uploadProductService: UploadProductService,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  // Upload product
  uploadProduct(): void {
    let requestData = {
      productName: this.uploadForm.get('productname').value,
      productDescription: this.uploadForm.get('productdescription').value,
      productOfferPrice: this.uploadForm.get('productofferprice').value,
      productActualPrice: this.uploadForm.get('productactualprice').value,
      productStock: this.stock,
      category: this.uploadForm.get('category').value,
      productLocation: this.uploadForm.get('productlocation').value,
      productUrls: this.filesArray
    }
    
    this.uploadProductService.uploadProduct(requestData).subscribe((data) => {
      console.log("Upload product succesfull", data);
    });
  }

  // Stock option change
  changeStockOption(value) {
    (value === "outofstock") ? this.stock = false : this.stock = true;
  }

  // File handling method
  uploadFiles(event) {
    this.error = "";
    this.loading = true;
    this.filesArray = []; // Empty the files array
    if (event.target.files.length > 7) {
      this.error = "You can only select 7 files";
      this.loading = false;
    } else {
      Array.from(event.target.files).forEach(file => { // Iterating through each array and storage the file in the array
        this.uploadProductService.uploadPicture(file)
        .then((fileURL) => {
          this.filesArray.push(fileURL.replace("www.dropbox.com", "dl.dropboxusercontent.com"));
          this.loading = false;
        });
      });
      this.enableUpload = false;
    }
  }

  // On load method
  onLoad(event) {
    if (event.target.complete) {
      this.loading = false;
    } else {
      this.loading = true;
    }
  }
}
