import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatSelectorComponent } from './beat-selector.component';

describe('BodyComponent', () => {
  let component: BeatSelectorComponent;
  let fixture: ComponentFixture<BeatSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
