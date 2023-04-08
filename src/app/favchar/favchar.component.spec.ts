import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavcharComponent } from './favchar.component';

describe('FavcharComponent', () => {
  let component: FavcharComponent;
  let fixture: ComponentFixture<FavcharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavcharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavcharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
