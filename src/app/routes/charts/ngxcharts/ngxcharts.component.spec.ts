import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { NgxChartsComponent } from './ngxcharts.component';

describe('Component: NgxCharts', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [RouterTestingModule, SharedModule.forRoot()],
            declarations: [NgxChartsComponent]
        });
    });

    it('should create an instance', async(() => {
        const fixture = TestBed.createComponent(NgxChartsComponent);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    }));
});
