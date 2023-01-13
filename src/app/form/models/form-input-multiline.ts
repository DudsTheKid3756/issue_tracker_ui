import { FormInputBase } from "./form-input-base";
export class FormInputMultiline extends FormInputBase<string> {
  override controlType = "multiline";
}
