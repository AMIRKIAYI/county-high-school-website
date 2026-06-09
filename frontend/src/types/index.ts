export interface SchoolInfo {
  name: string;
  type: string;
  category: string;
  level: string;
  knecCode: string;
  ownership: string;
  phone: string;
  postalAddress: string;
  email: string;
  motto: string;
  established: number;
  location: string;
  sponsorship: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface HistoryData {
  briefHistory: string;
  fullHistory: string;
}