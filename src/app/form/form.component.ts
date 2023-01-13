import { Component, Input, OnInit } from "@angular/core";
import { FormInputBase } from "./models/form-input-base";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  @Input() formFields: FormInputBase<string | boolean>[] | null = [];

  form!: FormGroup;

  ngOnInit(): void {
    this.toFormGroup();
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
  }

  private toFormGroup(): void {
    const group: { [key: string]: any } = {};

    this.formFields?.forEach((field: any) => {
      group[field.key] = field.required
        ? new FormControl(field.value || "", [
            ...field.validators,
            Validators.required,
          ])
        : new FormControl(field.value || "", field.validators);
    });
    this.form = new FormGroup(group);
  }
}
