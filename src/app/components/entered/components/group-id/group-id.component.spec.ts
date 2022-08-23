import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIdComponent } from './group-id.component';

describe('GroupIdComponent', () => {
  let component: GroupIdComponent;
  let fixture: ComponentFixture<GroupIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
