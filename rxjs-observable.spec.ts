import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component.component';
import { of } from 'rxjs';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit the correct values', () => {
    const expectedValues = [1, 2, 3];
    spyOn(component.myService, 'myObservable').and.returnValue(of(...expectedValues));

    component.ngOnInit();

    component.myService.myObservable().subscribe(
      value => expect(value).toEqual(expectedValues.shift()),
      error => fail(error),
      () => expect(expectedValues.length).toBe(0)
    );
  });
});
