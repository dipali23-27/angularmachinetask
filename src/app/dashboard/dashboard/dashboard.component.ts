import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  @ViewChild('drawer') sidenav: MatDrawer;

  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/auth']);
    localStorage.clear();
  }
}
