import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameGroundhogComponent } from './name-groundhog.component';

describe('NameGroundhogComponent', () => {
  let component: NameGroundhogComponent;
  let fixture: ComponentFixture<NameGroundhogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameGroundhogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameGroundhogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
