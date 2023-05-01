import { of } from 'rxjs';

describe('Observable', () => {
  it('should emit a value', () => {
    const observable$ = of('Hello, world!');
    observable$.subscribe(value => {
      expect(value).toEqual('Hello, world!');
    });
  });
});
