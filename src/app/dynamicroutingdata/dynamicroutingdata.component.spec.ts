import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicroutingdataComponent } from './dynamicroutingdata.component';

describe('DynamicroutingdataComponent', () => {
  let component: DynamicroutingdataComponent;
  let fixture: ComponentFixture<DynamicroutingdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicroutingdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicroutingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
