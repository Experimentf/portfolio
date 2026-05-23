export async function register() {
  // Node.js v22+ ships a built-in localStorage object, but without a valid
  // --localstorage-file path its methods are undefined. Next.js dev-overlay
  // code guards with `typeof localStorage !== 'undefined'` (which is true),
  // then calls localStorage.getItem() — causing the 500. Provide a no-op shim
  // so those accesses are safe on the server.
  if (
    typeof globalThis.localStorage !== "undefined" &&
    typeof globalThis.localStorage.getItem !== "function"
  ) {
    globalThis.localStorage = {
      length: 0,
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
    } as Storage;
  }
}
