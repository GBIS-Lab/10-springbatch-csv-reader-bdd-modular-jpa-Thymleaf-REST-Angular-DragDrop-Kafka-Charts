import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneReleasedateChartComponent } from './smartphone-releasedate-chart.component';

describe('SmartphoneReleasedateChartComponent', () => {
  let component: SmartphoneReleasedateChartComponent;
  let fixture: ComponentFixture<SmartphoneReleasedateChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartphoneReleasedateChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartphoneReleasedateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
