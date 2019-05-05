import { Component, OnInit } from '@angular/core';
import { DsListService } from  './upload_file.service';  
import { GetAllAssets } from  './get_all_assets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [DsListService, GetAllAssets] 
})
export class AppComponent{
  title = 'front-end-code-challenge';
  apiEndPoint = "http://localhost:3000/upload_file";
  public show:boolean = false;
  public buttonName:any = 'Get All Assets Record';
  assets: string[];

  constructor(private _dsListService: DsListService,
  	          private _getAllAssets: GetAllAssets) { }  
  ngOnInit () {  }

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
   
	toggle() {
	    this.show = true;

	    // CHANGE THE NAME OF THE BUTTON.
	    if(this.show) {
	        this._getAllAssets.getAssetsRecord()
	           .subscribe(
				    response => { 
				      this.assets = response;
				      console.log(response);
				    },
				    error => {
				      console.log('error',error)
				    });
	    }
    }
}
