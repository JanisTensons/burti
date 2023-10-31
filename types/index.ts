export interface VarietyOption {
  code: string;
  description: string;
}

export interface Variety {
  code: string;
  description: string;
  options: VarietyOption[];
}

export interface Product {
  code: string;
  description: string;
  varieties: string[];
}
