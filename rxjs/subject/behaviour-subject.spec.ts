import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component.component';
import { BehaviorSubject } from 'rxjs';

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

  it('should produce the correct output', () => {
    const behaviorSubject = new BehaviorSubject<number>(0);
    const testValues = [1, 2, 3];
    const expectedOutput = [0, 1, 2, 3];

    const test$ = behaviorSubject.asObservable();

    test$.subscribe(output => {
      expect(output).toEqual(expectedOutput.shift());
    });

    testValues.forEach(value => {
      behaviorSubject.next(value);
    });

    behaviorSubject.complete();
  });
});
