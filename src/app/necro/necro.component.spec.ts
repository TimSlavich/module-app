import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecroComponent } from './necro.component';

describe('NecroComponent', () => {
  let component: NecroComponent;
  let fixture: ComponentFixture<NecroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NecroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NecroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
