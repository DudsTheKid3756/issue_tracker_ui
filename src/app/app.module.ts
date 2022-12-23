import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { IssuesComponent } from "./issues/issues.component";

@NgModule({
  declarations: [AppComponent, IssuesComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: "", component: IssuesComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
