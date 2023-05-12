import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
})
export class BasicPagesComponent implements OnInit {
  private fb = inject(FormBuilder);

  ngOnInit() {}

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(''),
  //   storage: new FormControl(''),
  // });

  public myForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    storage: [0, [Validators.required, Validators.min(0)]],
  });

  onSave() {
    console.log(this.myForm.value);
  }
}
