import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.onGet();
  }

  onSave() {
    this.dataStorageService.saveRecipes();
  }

  onGet() {
    this.dataStorageService.getRecipes();
  }
}
