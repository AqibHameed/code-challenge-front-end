import { Component } from '@angular/core';
import { DsListService } from  './app.service';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [DsListService] 
})
export class AppComponent{
  title = 'front-end-code-challenge';
  apiEndPoint = "http://localhost:3000/upload_file";
  constructor(private _dsListService: DsListService) { }  
  uploadDatasource(fileInput: any) {

	let file = fileInput.target.files[0];
	let fileName = file.name;


	let payload = {
	  file,
	}

	let formData: FormData = new FormData();
	formData.append('file',file,file.name);

	this._dsListService.uploadDatasource(formData)
	  .subscribe(
	    response => { 
	      console.log('UPLOADING success');


	    },
	    error => {
	      console.log('error',error)
	    });

	}
}
