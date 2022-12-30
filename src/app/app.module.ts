import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { IssuesComponent } from "./issues/issues.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { IssuesService } from "./issues/issues.service";
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Storage } from "src/helpers/storageHelper";
import { NgxContextModule } from "ngx-context";
import { ToastrModule } from "ngx-toastr";
import { ToastrHelper } from '../helpers/toastrHelper';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [AppComponent, IssuesComponent, NotificationComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: "", component: IssuesComponent }]),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxContextModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      autoDismiss: false,
      progressBar: false,
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Storage, ToastrHelper, IssuesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
