import { Component, OnInit } from '@angular/core';
import {FileUploadService} from '../../shared/services/file-upload.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  imageUrl = 'assets/img/userimg.png';
  fileUploadResult = {
    files: []
  };
  isFileUpload = false;

  constructor(
    private fileUploadService: FileUploadService,

  ) { }

  ngOnInit(): void {
  }

  onFileChange(event) {
    this.fileUploadResult = this.fileUploadService.getFilesInfo(event);
    event = event.target.files;
    const filetoupload = event.item(0);
    const reader = new FileReader();
    reader.onload = (event1: any) => {
      this.imageUrl = event1.target.result;
    };
    reader.readAsDataURL(filetoupload);
    // this.updatePic();
  }

  updatePic() {

  }

}
