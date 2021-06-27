import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { AuthService } from '../Auth/auth.service';
import { DataStorageService } from '../Ingredient/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthentication = false;
  private authSub: Subscription;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
    this.authSub = this.authService.user.subscribe((user => { 
      this.isAuthentication = !!user;
;
    }));
  }
  onSaveData() {
    this.dataStorageService.storageRecipes();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipe().subscribe();
  }
  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

  onLogout() {
    this.authService.logOut();
  }

}
