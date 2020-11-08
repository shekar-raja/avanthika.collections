import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Dropbox, DropboxResponse, Error, files } from 'dropbox';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UploadProductService {

  constructor(private _http: HttpClient) { }

  public uploadProduct(requestData) {
    return this._http.post(environment.url + "api/uploadProduct", requestData);
  }

  public uploadPicture(file) {
    const dropbox = new Dropbox({ fetch: window.fetch.bind(window), accessToken: "090ZbVTHYzQAAAAAAAAAAeT9R_XzcaJSVv0LhOFQTVWh0ZwxBe4THXOaQw-V4AjX" });
    const contents = file;
    let randomFileName = (Math.floor(100000 + Math.random() * 900000)).toString();
    return new Promise<any>((resolve, reject) => {
      dropbox.filesUpload({ path: "/" + randomFileName, contents})
      .then((response: any) => {
        dropbox.sharingCreateSharedLinkWithSettings({ path: response.result.path_display})
          .then(data => {
            resolve(data.result.url);
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((error) => {
        console.log(error);
      });
    });
   

    
  }
}
