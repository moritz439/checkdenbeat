import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatselectorComponent } from './beatselector.component';

describe('BeatselectorComponent', () => {
  let component: BeatselectorComponent;
  let fixture: ComponentFixture<BeatselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatselectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
