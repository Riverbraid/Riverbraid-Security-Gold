export const PETAL = "Security-Gold";
export const INVARIANT = "SECURITY_STATIONARY";
export function verify(input) {
  if (!input || typeof input !== "object") {
    return {
      pass: false,
      stationary: false,
      signal: "security-gold:INVALID_INPUT",
      reason: "input must be an object"
    };
  }
  const stationary =
    input.repo === "Riverbraid-Security-Gold" &&
    input.petal === "Security-Gold" &&
    input.ring === 1 &&
    input.invariant === "SECURITY_STATIONARY";
  return {
    pass: true,
    stationary,
    signal: stationary ? "security-gold:STATIONARY" : "security-gold:DRIFT",
    reason: stationary
      ? "Stationary fields match declared petal identity"
      : "One or more stationary fields drift from declaration"
  };
}
