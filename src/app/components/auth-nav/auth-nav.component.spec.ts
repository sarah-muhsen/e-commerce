import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthNavComponent } from './auth-nav.component';

describe('AuthNavComponent', () => {
  let component: AuthNavComponent;
  let fixture: ComponentFixture<AuthNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthNavComponent]
    });
    fixture = TestBed.createComponent(AuthNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
