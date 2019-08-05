import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'n4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() fireconfig: any;
  @Output() invite = new EventEmitter<any>();
  @Output() login = new EventEmitter<firebase.User>();
  @Output() guest = new EventEmitter<any>();
}
