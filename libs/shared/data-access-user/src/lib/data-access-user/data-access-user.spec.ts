import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataAccessUser } from './data-access-user';

describe('DataAccessUser', () => {
  let component: DataAccessUser;
  let fixture: ComponentFixture<DataAccessUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessUser],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAccessUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
