import { MyPipe } from './my-pipe.pipe';

describe('MyPipe', () => {
  let pipe: MyPipe;

  beforeEach(() => {
    pipe = new MyPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform value to uppercase', () => {
    const input = 'hello';
    const expectedOutput = 'HELLO';
    expect(pipe.transform(input)).toEqual(expectedOutput);
  });

  it('should return empty string if value is null', () => {
    const input = null;
    const expectedOutput = '';
    expect(pipe.transform(input)).toEqual(expectedOutput);
  });

  it('should return empty string if value is undefined', () => {
    const input = undefined;
    const expectedOutput = '';
    expect(pipe.transform(input)).toEqual(expectedOutput);
  });
});
