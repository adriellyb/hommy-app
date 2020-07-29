import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterRepPage } from './register-rep.page';

describe('RegisterRepPage', () => {
  let component: RegisterRepPage;
  let fixture: ComponentFixture<RegisterRepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterRepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterRepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
