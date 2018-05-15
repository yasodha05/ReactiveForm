import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Customer} from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer = new Customer();

  constructor(private fb: FormBuilder) { }

  /*ngOnInit(): void {
    this.customerForm = new FormGroup(
      {
        firstName: new FormControl(),
        lastName : new FormControl(),
        email : new FormControl(),
        sendCatalog : new FormControl(true)
      }
    );
  }*/
  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      sendCatalog: true
    });
  }


  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      sendCatalog: false
    });
  }

  save() {
    console.log(this.customerForm);
    console.log(this.customerForm.value);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

}
