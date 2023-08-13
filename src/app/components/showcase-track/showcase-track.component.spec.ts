import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseTrackComponent } from './showcase-track.component';

describe('ShowcaseTrackComponent', () => {
  let component: ShowcaseTrackComponent;
  let fixture: ComponentFixture<ShowcaseTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
