export interface Contact {
  id: number;
  name: string;
  email: string;
}

// Extendemos la interfaz para la pantalla de detalle
export interface ContactDetail extends Contact {
  phone: string;
  website: string;
  company: {
    name: string;
  };
}