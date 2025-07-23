import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneScreensizeChartComponent } from './smartphone-screensize-chart.component';

describe('SmartphoneScreensizeChartComponent', () => {
  let component: SmartphoneScreensizeChartComponent;
  let fixture: ComponentFixture<SmartphoneScreensizeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartphoneScreensizeChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartphoneScreensizeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
