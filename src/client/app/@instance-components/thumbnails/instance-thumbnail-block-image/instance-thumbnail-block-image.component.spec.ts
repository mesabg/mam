import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceThumbnailBlockImageComponent } from './instance-thumbnail-block-image.component';

describe('InstanceThumbnailBlockImageComponent', () => {
  let component: InstanceThumbnailBlockImageComponent;
  let fixture: ComponentFixture<InstanceThumbnailBlockImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceThumbnailBlockImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceThumbnailBlockImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
