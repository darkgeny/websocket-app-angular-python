import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebsocketService } from './websocket.service';
import { PrettyJsonPipe } from './prettyjson.pipe';
//import { WsclientService } from './wsclient.service';

@NgModule({
  declarations: [
    AppComponent,
    PrettyJsonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
