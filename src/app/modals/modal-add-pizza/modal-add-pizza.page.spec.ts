import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAddPizzaPage } from './modal-add-pizza.page';

describe('ModalAddPizzaPage', () => {
  let component: ModalAddPizzaPage;
  let fixture: ComponentFixture<ModalAddPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddPizzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAddPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
