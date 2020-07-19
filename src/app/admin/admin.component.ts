import {
  Component,
  OnInit
} from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  VulserService
} from '../vulser.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public Editor = ClassicEditor;
  // if component busy?
  public loading = false;

  public model = {
    editorData: '<p>Text</p>'
  };

  constructor(private VulserService : VulserService) {}

  ngOnInit(): void {}


  checkDataWysig (){
    this.VulserService.debugLog(this.model.editorData);
  }

}
