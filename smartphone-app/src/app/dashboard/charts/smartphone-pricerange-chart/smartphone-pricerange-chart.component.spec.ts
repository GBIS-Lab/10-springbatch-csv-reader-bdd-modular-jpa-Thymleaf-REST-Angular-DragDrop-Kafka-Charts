import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonePricerangeChartComponent } from './smartphone-pricerange-chart.component';

describe('SmartphonePricerangeChartComponent', () => {
  let component: SmartphonePricerangeChartComponent;
  let fixture: ComponentFixture<SmartphonePricerangeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartphonePricerangeChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartphonePricerangeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
