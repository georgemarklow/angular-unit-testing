import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MyDirective } from './my-directive.directive';

@Component({
  template: `
    <div myDirective>
      <span>Test</span>
    </div>
  `
})
class TestComponent {}

describe('MyDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, MyDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(MyDirective));
  });

  it('should create an instance', () => {
    const directive = debugElement.injector.get(MyDirective);
    expect(directive).toBeTruthy();
  });

  it('should set the background color to red', () => {
    fixture.detectChanges();
    const divElement = debugElement.nativeElement;
    expect(divElement.style.backgroundColor).toBe('red');
  });
});
