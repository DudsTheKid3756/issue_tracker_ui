import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormInputBase } from "../models/form-input-base";

@Component({
  selector: "app-form-input",
  templateUrl: "./form-input.component.html",
  styleUrls: ["./form-input.component.css"],
})
export class FormInputComponent {
  @Input() field!: FormInputBase<string | boolean>;
  @Input() form!: FormGroup;

  hasFieldError = (): boolean | undefined => {
    return (
      this.form.get(this.field.key)?.invalid &&
      (this.form.get(this.field.key)?.dirty ||
        this.form.get(this.field.key)?.touched)
    );
  };
}
