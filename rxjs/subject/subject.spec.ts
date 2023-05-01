import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component.component';
import { Subject } from 'rxjs';

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
    const subject = new Subject<number>();
    const testValues = [1, 2, 3];
    const expectedOutput = [1, 2, 3];

    const test$ = subject.asObservable();

    test$.subscribe(output => {
      expect(output).toEqual(expectedOutput);
    });

    testValues.forEach(value => {
      subject.next(value);
    });

    subject.complete();
  });
});
