import { Component } from '@angular/core';
import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';
import { Issue } from '../../models/issue';

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
})
export class NotificationComponent extends Toast {
  
  constructor(private toast: ToastrService, override toastPackage: ToastPackage) {
    super(toast, toastPackage);
  }
  
  info: Issue = this.toastPackage.config.payload;
}
