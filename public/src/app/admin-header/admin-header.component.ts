import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  // Global variables
  @ViewChild('myTemplate') customTemplate: TemplateRef<any>;
  loading: boolean = false;
  constructor(
    @Inject(DOCUMENT) private document: any,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /* Open sign out dialog */
  openDialog(): void {
    document.body.classList.add('modal-open');
    const dialogRef = this.dialog.open(this.customTemplate, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      document.body.classList.remove('modal-open')
    });
  }

  // Logout admin
  logout() {
    this.loading = true;
    setTimeout(() => {
      localStorage.clear();
      this.router.navigateByUrl("/admin");
    }, 2000);
  }
}
