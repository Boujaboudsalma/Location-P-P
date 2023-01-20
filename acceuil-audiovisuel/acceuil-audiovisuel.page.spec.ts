import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceuilAudiovisuelPage } from './acceuil-audiovisuel.page';

describe('AcceuilAudiovisuelPage', () => {
  let component: AcceuilAudiovisuelPage;
  let fixture: ComponentFixture<AcceuilAudiovisuelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilAudiovisuelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceuilAudiovisuelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
