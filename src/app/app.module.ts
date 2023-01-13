import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NgxContextModule } from "ngx-context";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { Storage } from "src/helpers/storage";
import { HttpHelper } from "../helpers/http";
import { ToastrHelper } from "../helpers/toastr";
import { AppComponent } from "./app.component";
import { CreateIssueComponent } from "./create-issue/create-issue.component";
import { FormInputComponent } from "./form/form-input/form-input.component";
import { FormComponent } from "./form/form.component";
import { IssuesComponent } from "./issues/issues.component";
import { NotificationComponent } from "./notification/notification.component";
import { IssuesService } from "./services/issues.service";
import { UpdateIssueComponent } from "./update-issue/update-issue.component";
import { ReactiveFormsModule } from "@angular/forms";

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
    FormInputComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
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
