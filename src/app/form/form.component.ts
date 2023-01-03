import { Component } from '@angular/core';
import { jsonObj } from '../../@types/jsonObj';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  field!: string;
  label!: string;
  type!: string;
  placeholder!: string;
  values!: jsonObj;
  isMultiline!: boolean;
  min!: number;
  errors!: jsonObj;
  errLength!: number;
}
