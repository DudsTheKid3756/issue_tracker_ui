import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Issue } from "../../models/issue";
import { FormInputBase } from "../form/models/form-input-base";
import { FormInputTextbox } from "../form/models/form-input-textbox";
import { FormInputMultiline } from "../form/models/form-input-multiline";
import { FormInputCheckbox } from '../form/models/form-input-checkbox';

@Component({
  selector: "app-create-issue",
  templateUrl: "./create-issue.component.html",
  styleUrls: ["./create-issue.component.css"],
})
export class CreateIssueComponent {
  issue!: Issue;

  constructor(private router: Router) {}

  handleCancel = () => this.router.navigate(["/"]);

  issueTextInputs: FormInputBase<string | boolean>[] = [
    new FormInputTextbox({
      key: "title",
      label: "Title",
      type: "text",
      required: true,
      placeholder: "New Issue",
    }),
    new FormInputMultiline({
      key: "comment",
      label: "Comment",
      type: "text",
      required: true,
    }),
  ];

  issueCheckboxInput: FormInputBase<string | boolean>[] = [
    new FormInputCheckbox({
      key: "hasReminder",
      label: "Reminder",
    }),
  ];
}
