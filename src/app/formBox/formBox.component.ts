import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { CommonService } from '../service/commonService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formBox',
  templateUrl: './formBox.component.html',
  styleUrl: './formBox.component.css',
})
export class FormBoxComponent {
 
  myForm: FormGroup;
    updatedData:any;
    formData:any;
  constructor(private fb: FormBuilder, private  commonService:CommonService , private route:Router) {
    this.myForm = this.fb.group({
      name: [''],
      number: [''],
      email: [''],
    });
   }

   ngOnInit(){
     this.updatedData = history.state.data;
    this.myForm.get("name")?.setValue(this.updatedData.name);
    this.myForm.get("number")?.setValue(this.updatedData.phone);
    this.myForm.get("email")?.setValue(this.updatedData.email)
    console.log(this.updatedData, "gotIt");
   }


  

  onSubmit() {

    if(this.updatedData){
       this.formData = {
    id:this.updatedData.id,
      name:this.myForm.value.name,
      phone:this.myForm.value.number,
      email:this.myForm.value.email
      
    }

    }
    else{
      this.formData = {
      name:this.myForm.value.name,
      phone:this.myForm.value.number,
      email:this.myForm.value.email
      
    }
    }
   
    console.log(this.myForm.value);
    this.commonService.postEmp(this.formData).subscribe((res) => {
      console.log('dataposted',res);
      if(res){
    this.route.navigate(['/home'])
      }

    });

  }
}



