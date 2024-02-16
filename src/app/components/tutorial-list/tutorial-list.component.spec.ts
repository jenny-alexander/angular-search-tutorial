import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialListComponent } from './tutorial-list.component';

describe('TutorialListComponent', () => {
  let component: TutorialListComponent;
  let fixture: ComponentFixture<TutorialListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialListComponent]
    });
    fixture = TestBed.createComponent(TutorialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
