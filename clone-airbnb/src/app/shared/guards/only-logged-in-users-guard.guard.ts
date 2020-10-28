import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from 'src/app/services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuardGuard implements CanActivate {
constructor(private route: Router, private usersService: UserService){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.usersService.isLoggedUser()){
        this.route.navigate (['/signin']);
        return false;
      }
      return true;
  }
  
}
