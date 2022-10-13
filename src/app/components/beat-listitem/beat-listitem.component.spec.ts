import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatListitemComponent } from './beat-listitem.component';

describe('BeatListitemComponent', () => {
  let component: BeatListitemComponent;
  let fixture: ComponentFixture<BeatListitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatListitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
