// INTERFACE -MODEL ,, similar to a Class - This is needed specifically for TypeScript
export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
