import { Component, OnInit } from '@angular/core';
import { ApplicationState } from 'src/app/store/application-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {
  constructor(private store: Store<ApplicationState>) {
    store.subscribe(state =>
      console.log(
        'Message section received the new version of the state',
        state
      )
    );
  }

  ngOnInit() {}
}
