import { Component, OnInit } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from '../common/email.service';
import { NotFoundError } from '../common/notfound.error';

import * as AOS from 'aos';



@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
  export class ContactComponent implements OnInit {
 
    model: any = {};
  
    constructor(private emailService: EmailService, private toastr: ToastrService){
    }
  
    ngOnInit() {
      AOS.init();
       }
       
    submit(f) {

          if(f.valid){
            const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            const formData = { name: name, subject: f.value.subject, replyto: f.value.email, message: f.value.message };
            const url = 'https://formspree.io/f/xgepnyoq';
            this.sendEmail(url, formData,headers);
          }else{
            this.toastr.error('Please fillup required fields')
          }
    }  

    private sendEmail(url,formData,headers){

      this.emailService.sendEmail(url,formData,{ 'headers': headers })
        .subscribe(
          () => {
            this.toastr.success('Email Sent!');
          },
          err=>{
            if(err instanceof NotFoundError)
              this.toastr.error('404 Not Found')
            else  
              this.toastr.error('Internal Server error')
          }
        );
    }


}
