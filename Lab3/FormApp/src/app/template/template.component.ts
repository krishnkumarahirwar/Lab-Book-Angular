import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  username="";
  productCategory = ['Grocery','Mobile','Electonics','Cloths'];

  ngOnInit(): void {
  }


  register(myform:NgForm){   
    console.log(myform.value);
    console.log("myform="+myform.value.productName);
    this.username=myform.value.productName;
  }

}
