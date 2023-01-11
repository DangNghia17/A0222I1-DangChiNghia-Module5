import {Teacher} from "./teacher";

export interface Student {
  id?: number;
  name?: string;
  group?: string;
  topic?: string;
  email?: string;
  phone?: string;
  teacher?: Teacher;
}
