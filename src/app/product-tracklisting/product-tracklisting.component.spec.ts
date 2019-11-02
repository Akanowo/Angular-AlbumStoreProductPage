import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { ProductTracklistingComponent } from './product-trackListing.component';

describe('TrackListingComponent', () => {
  let component: ProductTracklistingComponent;
  let fixture: ComponentFixture<ProductTracklistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTracklistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTracklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
