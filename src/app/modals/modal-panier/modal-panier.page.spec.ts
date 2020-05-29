import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPanierPage } from './modal-panier.page';

describe('ModalPanierPage', () => {
  let component: ModalPanierPage;
  let fixture: ComponentFixture<ModalPanierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPanierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPanierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
