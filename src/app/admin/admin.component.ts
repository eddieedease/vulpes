import {
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild,
  TemplateRef
} from '@angular/core';

import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from '@angular/platform-browser';

/* import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'; */

import {
  BsModalService
} from 'ngx-bootstrap/modal';
import {
  BsModalRef
} from 'ngx-bootstrap/modal/bs-modal-ref.service';


import {
  VulserService
} from '../vulser.service';
import {
  CalendarEvent,
  CalendarView
} from 'angular-calendar';

import {
  Router
} from '@angular/router';

import {
  WysigComponent
} from '../wysig/wysig.component';
import {
  ViewEncapsulation
} from '@angular/core';

import {
  WysigPipe
} from '../wysig-pipe.pipe';

import {
  UploadOutput,
  UploadInput,
  UploadFile,
  humanizeBytes,
  UploaderOptions
} from 'ngx-uploader';



@Component({
  selector: 'app-admin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {

  
  // shows loading overlay when set to true
  public loading = false;

  // current Modal Reference.
  modalRef: BsModalRef;

  // tinymce vars
  // tinymce vars
  @ViewChild(WysigComponent) public tinyComponent: WysigComponent;
  // storing the wysig blob var
  currentWysigHtml = '<p>Text</p>';
  compareString;
  wysigHasChanged = false;


  // Fileupload vars
  // Fileupload vars
  optionsUploader: UploaderOptions;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter < UploadInput > ;
  humanizeBytes: Function;
  dragOver: boolean;

  // calendar vars
  // calendar vars
  view: CalendarView = CalendarView.Month;

  // Date vars for callendar
  viewDate: Date = new Date();

  events: CalendarEvent[] = [{
      title: 'Editable event',
      start: new Date(),
      actions: [{
        label: '<button type="button" class="btn btn-sm btn-warning">EDIT</button>',
        onClick: ({
          event
        }: {
          event: CalendarEvent
        }): void => {
          console.log('Edit event', event);
        },
      }, ],
    },
    {
      title: 'Deletable event',
      start: new Date(),
      actions: [{
        label: '<button type="button" class="btn btn-sm btn-warning">DEL</button>',
        onClick: ({
          event
        }: {
          event: CalendarEvent
        }): void => {
          this.events = this.events.filter((iEvent) => iEvent !== event);
          console.log('Event deleted', event);
        },
      }, ],
    },
    {
      title: 'Non editable and deletable event',
      start: new Date(),
    },
  ];



  // CKEditor --> We do not use this anymore, use the tinymce editor instead
  /* public model = {
    editorData: '<p>Text</p>'
  };

  locale: string = 'nl';

  public Editor = ClassicEditor; */

  constructor(private VulserService: VulserService, private wysigpipe: WysigPipe, private router: Router, public sanitizer: DomSanitizer, private modalService: BsModalService) {
    // file uploading setup
    this.optionsUploader = {
      concurrency: 0,
      allowedContentTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/jpg']
    };
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter < UploadInput > (); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit(): void {}


  // uploading event
  // TODO: Implement on API and Service
  onFileChange(_event) {
    const files = _event.target.files || _event.srcElement.files;
    const file = files[0];

    if (file.size >= 2000000) {
      // this.serCred.debugLog('TO BIG OF A FILE, note user?');
    }
    this.startUpload(_event);
  }

  // Firing API Call for uploading
  startUpload(_event): void {
    this.loading = true;
    // TODO: IMplement below in service
    // this.VulserService.API_uploadToFileStorage(_event).subscribe(value => this.fileIsUploaded(value));
  }

  // Server response
  fileIsUploaded(_val) {
    this.VulserService.debugLog(_val);
    // now add the media into the wysig
    // Filename --> _val.filename
  }



  // TinyMCE WYSIG Handler

  saveWysig(){
    this.loading = true;
    const checkt = this.wysigpipe.transform(this.currentWysigHtml);
  }


  checkDataWysig() {
    this.VulserService.debugLog(this.currentWysigHtml);
  }


  keyupHandlerFunction(das) {
    this.currentWysigHtml = das;

    if (this.currentWysigHtml !== this.compareString){
      this.wysigHasChanged = true;
    }
    // this.tinyComponent.callFromParent(das);
  }

  /**
   * For future Use, give back current carrotposition in TinyMCE
   */
  giveRangeBack(_carPos) {

  }




  // Calendar functions
  viewCalendarKind(_kind) {
    
    switch (_kind) {
      case 'day':
        this.view = CalendarView.Day;
        break;
      case 'week':
        this.view = CalendarView.Week;
        break;
      case 'month':
        this.view = CalendarView.Month;
        break;

    }
  }



  buttonPostCallTest(){
    this.VulserService.API_testPostCall('POSTDATATEST').subscribe(value => this.postTestResponse(value));
  }


  postTestResponse(_response){
    this.VulserService.debugLog(_response);
  }


  // open modal
  openModal(template: TemplateRef < any > ) {
    this.modalRef = this.modalService.show(template);
  }
  // hide currentModal
  hideModal(){
    this.modalRef.hide();
  }

}
