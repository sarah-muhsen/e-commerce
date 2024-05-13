import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router)
  if(localStorage.getItem('etoken')!=null){
    return true;
    //mawgooood
  }
  else{
    _Router.navigate(['/login'])
    return false;
    //ma4 mawgoood 
    

  }

};
