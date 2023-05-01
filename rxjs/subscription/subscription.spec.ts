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

  it('should unsubscribe on destroy', () => {
    const spy = jasmine.createSpyObj('Subscription', ['unsubscribe']);
    const subscription = of().subscribe(spy);

    component.ngOnDestroy();

    expect(spy.unsubscribe).toHaveBeenCalled();
  });
});
