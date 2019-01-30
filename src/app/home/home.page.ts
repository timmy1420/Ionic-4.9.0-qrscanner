import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ngOnInit() {
    // console.log(window.screen.height);
  }

  constructor(
    private router: Router
  ) {}

  goToScan() {
    this.router.navigate(['/qr-page']);
  }
}
