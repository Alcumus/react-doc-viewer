// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Polyfill Promise.withResolvers for pdfjs-dist v4 (requires Node 22+)
if (typeof Promise.withResolvers === 'undefined') {
  Promise.withResolvers = function<T>() {
    let resolve!: (value: T | PromiseLike<T>) => void;
    let reject!: (reason?: any) => void;
    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

// Prevent real network calls and suppress AbortErrors during test teardown
beforeEach(() => {
  jest.spyOn(global as any, 'fetch').mockImplementation(() =>
    Promise.resolve({
      headers: { get: () => null },
      blob: () => Promise.resolve(new Blob()),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});
