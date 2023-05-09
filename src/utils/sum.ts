export function sum(values: number[]): number;
export function sum<T>(values: T[], project: (value: T) => number): number;
export function sum<T>(values: T[], project?: (value: T) => number): number {
  return values.reduce((total, value) => {
    const numberValue = typeof value === 'number' ? value : project?.(value);
    return total + (numberValue ?? 0);
  }, 0);
}