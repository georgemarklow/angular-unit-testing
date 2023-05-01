import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component.component';
import { of } from 'rxjs';
import { concatAll } from 'rxjs/operators';

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
    const input$ = of([of(1), of(2), of(3)]);
    const expectedOutput = [1, 2, 3];

    input$.pipe(concatAll()).subscribe(output => {
      expect(output).toEqual(expectedOutput);
    });
  });
});
