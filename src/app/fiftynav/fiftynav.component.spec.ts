import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftynavComponent } from './fiftynav.component';

describe('FiftynavComponent', () => {
  let component: FiftynavComponent;
  let fixture: ComponentFixture<FiftynavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiftynavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
