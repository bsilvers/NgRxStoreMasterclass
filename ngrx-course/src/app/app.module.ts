import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSelectionComponent } from './components/user-selection/user-selection.component';
import { ThreadSectionComponent } from './components/thread-section/thread-section.component';
import { MessageSectionComponent } from './components/message-section/message-section.component';
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { ThreadsService } from './services/threads.service';
import { HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient,
    StoreModule.forRoot({})
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
