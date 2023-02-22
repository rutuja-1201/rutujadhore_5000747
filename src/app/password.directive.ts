import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class PasswordDirective {

 // constructor() { }//

 constructor(private el: ElementRef) { }

  @HostListener('input') onInput() {
    this.checkPasswordStrength(this.el.nativeElement.value);
  }

  checkPasswordStrength(password: string) {
    let strength = 0;

    if (password.length < 6) {
      this.setPasswordStrength('weak');
      return;
    }

    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@$!%*?&]+/)) {
      strength += 1;
    }

    switch (strength) {
      case 1:
        this.setPasswordStrength('weak');
        break;
      case 2:
        this.setPasswordStrength('strong');
        break;
      default:
        this.setPasswordStrength('weak');
        break;
    }
  }

  setPasswordStrength(strength: string) {
    this.el.nativeElement.setAttribute('password-strength', strength);
  }

}
