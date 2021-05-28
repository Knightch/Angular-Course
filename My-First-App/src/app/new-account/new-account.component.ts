import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {


  constructor(private loggingService: LoggingService,
    private accountService: AccountService) {
    this.accountService.statusUpdate.subscribe(
      (status: String) => alert('new status: ' + status)
    );
  }

  ngOnInit(): void {
  }
  onCreatAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
