// error-capture.ts — simplified for browser-only (no SSR).
// consumeLastCapturedError was used by server.ts; kept as no-op for compatibility.
export function consumeLastCapturedError(): unknown {
  return undefined;
}
