import { ToastrService } from "ngx-toastr";
import { Injectable } from "@angular/core";
import { NotificationComponent } from "src/app/notification/notification.component";
import { jsonObj } from "src/@types/jsonObj";

@Injectable()
export class ToastrHelper {
  constructor(private toastr: ToastrService) {}

  toaster = (text: string, type: string) => {
    //@ts-ignore
    this.toastr[type]("", text, {
      positionClass: "toast-top-right",
    });
  };

  notificationToast = (info: jsonObj) => {
    this.toastr.info("", "", {
      positionClass: "toast-bottom-right",
      toastComponent: NotificationComponent,
      payload: info,
    });
  };
}
