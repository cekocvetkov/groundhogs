import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundhogsListComponent } from './groundhogs-list.component';

describe('GroundhogsListComponent', () => {
  let component: GroundhogsListComponent;
  let fixture: ComponentFixture<GroundhogsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundhogsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundhogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
