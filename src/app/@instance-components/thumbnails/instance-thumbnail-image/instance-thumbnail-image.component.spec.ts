import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaceThumbnailImageComponent } from './instace-thumbnail-image.component';

describe('InstaceThumbnailImageComponent', () => {
  let component: InstaceThumbnailImageComponent;
  let fixture: ComponentFixture<InstaceThumbnailImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaceThumbnailImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaceThumbnailImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
