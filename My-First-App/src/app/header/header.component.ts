import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../Ingredient/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }
  
  ngOnInit() {
    
  }
  onSaveData() {
    this.dataStorageService.storageRecipes();
 }
  onFatchData() {
    this.dataStorageService.fetchRecipe();
  }

}