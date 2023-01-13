import { ValidatorFn } from "@angular/forms";

export class FormInputBase<T> {
  value: T | undefined;
  key!: string;
  label!: string;
  required!: boolean;
  order!: number;
  controlType!: string;
  type!: string;
  options!: { key: string; value: string }[];
  validators!: ValidatorFn[] | null;
  readonly!: boolean;
  placeholder!: string;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      options?: { key: string; value: string }[];
      validators?: ValidatorFn[] | null;
      readonly?: boolean;
      placeholder?: string;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = !!options.required;
    this.order = options.order ?? 1;
    this.controlType = options.controlType || "";
    this.type = options.type || "";
    this.options = options.options || [];
    this.validators = options.validators || [];
    this.readonly = !!options.readonly;
    this.placeholder = options.placeholder || "";
  }
}
