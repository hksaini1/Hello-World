import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AbcComponent } from './ABC/abc/abc.component';
import { IfscComponent } from './ifsc/ifsc.component';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    IfscComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
