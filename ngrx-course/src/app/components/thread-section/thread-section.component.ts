import { Component, OnInit } from '@angular/core';
import { ThreadsService } from 'src/app/services/threads.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/store/application-state';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {
  constructor(
    private threadsService: ThreadsService,
    private store: Store<ApplicationState>
  ) {
    store.subscribe(console.log);
  }

  ngOnInit() {
    this.threadsService
      .loadUserThreads()
      .subscribe(allUserData => this.store.dispatch());
  }
}
