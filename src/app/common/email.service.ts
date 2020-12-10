import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NotFoundError } from './notfound.error';
import { AppError } from './app.error.handler';

@Injectable({
    providedIn: 'root'
  })
export class EmailService{

    constructor(private httpClient: HttpClient){}

    sendEmail(url,contactForm,headers){
        return this.httpClient.post(url,contactForm,headers).pipe(this.handleError());
    }

   private handleError(){
       return catchError((err:Response)=>{
           if(err.status==404)
               return throwError(new NotFoundError(err));
           else
               return throwError(new AppError(err));
       })
    }

}
