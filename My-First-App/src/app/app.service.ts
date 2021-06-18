import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({providedIn:'root'})
export class AppService{
    //activatedEvent = new EventEmitter<boolean>();
    activatedEvent = new Subject<boolean>();
}