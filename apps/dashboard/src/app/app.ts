import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserAuth } from '@ng-mf/data-access-user';
import { distinctUntilChanged } from 'rxjs';

@Component({
  imports: [RouterModule, CommonModule, RouterLink],
  selector: 'ng-mf-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'dashboard';

  private router = inject(Router);
  private userAuth = inject(UserAuth);
  isLoggedIn$ = this.userAuth.isUserLoggedIn$;

  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        console.log('login:->', loggedIn);

        // setTimeout(() => {
        //   if (!loggedIn) {
        //     this.router.navigateByUrl('login');
        //   } else {
        //     this.router.navigateByUrl('');
        //   }
        // });
      });
  }

  sumar(a: number, b: number): number {
    return a + b;
  }
}
