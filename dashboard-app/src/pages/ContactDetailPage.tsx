import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import type { ContactDetail } from '../types/contact';
import { getContact } from '../services/contactsService';

function ContactDetailPage() {
  const { id } = useParams();
  const [contact, setContact] = useState<ContactDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    getContact(id)
      .then(setContact)
      .catch(() => setError('Contacto no encontrado'));
  }, [id]);

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!contact) return <p className="text-muted">Cargando...</p>;

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{contact.name}</h3>
        <p className="mb-1"><strong>Email:</strong> {contact.email}</p>
        <p className="mb-1"><strong>Teléfono:</strong> {contact.phone}</p>
        <p className="text-muted">
          <strong>Empresa:</strong> {contact.company?.name} | <strong>Sitio web:</strong> {contact.website}
        </p>
        <Link to="/contactos" className="btn btn-outline-primary">Volver</Link>
      </div>
    </div>
  );
}

export default ContactDetailPage;