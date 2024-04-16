export function formatter(n: number): string {
  const standardFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 5,
  });

  return standardFormatter.format(n);
}

export function formatterNum(n: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    notation: "standard",
  });

  return formatter.format(n);
}