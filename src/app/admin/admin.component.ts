import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import {
  VulserService
} from '../vulser.service';
import {
  CalendarEvent,
  CalendarView
} from 'angular-calendar';

@Component({
  selector: 'app-admin',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  locale: string = 'nl';


  // calendar
  view: CalendarView = CalendarView.Month;



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

  constructor(private VulserService: VulserService) {}

  ngOnInit(): void {}


  checkDataWysig() {
    this.VulserService.debugLog(this.model.editorData);
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

}
