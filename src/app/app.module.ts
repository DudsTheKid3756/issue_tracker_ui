import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { IssuesComponent } from "./issues/issues.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { IssuesService } from "./services/issues.service";
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Storage } from "src/helpers/storage";
import { NgxContextModule } from "ngx-context";
import { ToastrModule } from "ngx-toastr";
import { ToastrHelper } from "../helpers/toastr";
import { NotificationComponent } from "./notification/notification.component";
import { CreateIssueComponent } from "./create-issue/create-issue.component";
import { UpdateIssueComponent } from "./update-issue/update-issue.component";
import { HttpHelper } from "../helpers/http";
import { FormComponent } from './form/form.component';

const routes = [
  { path: "", component: IssuesComponent },
  { path: "create", component: CreateIssueComponent },
  { path: "update/:id", component: UpdateIssueComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    NotificationComponent,
    CreateIssueComponent,
    UpdateIssueComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxContextModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      timeOut: 3000,
      autoDismiss: false,
      progressBar: true,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Storage, ToastrHelper, HttpHelper, IssuesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
