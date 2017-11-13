import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailBlockImageComponent } from './thumbnail-block-image.component';

describe('ThumbnailBlockImageComponent', () => {
  let component: ThumbnailBlockImageComponent;
  let fixture: ComponentFixture<ThumbnailBlockImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailBlockImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailBlockImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
