// Augments the global Express.Request interface from @types/express via
// declaration merging. TypeScript loads this .d.ts automatically (it's under
// rootDir), merges the fields below into the existing Request type, and the
// `export {}` makes the file a module so `declare global` is valid.
declare global {
  namespace Express {
    interface Request {
      signature?: string;
    }
  }
}

export {};
