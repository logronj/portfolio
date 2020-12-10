import { ErrorHandler, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export class AppErrorHandler implements ErrorHandler{

    toastrService : ToastrService;

    handleError(error: any):void{
        this.toastrService.error('Unexpected Error');
    }
    
}


export class AppError{
    constructor(public originalError: any){}
}