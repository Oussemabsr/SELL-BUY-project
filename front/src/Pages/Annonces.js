import React from 'react';
import { Link } from 'react-router-dom';

const fakeAnnouncements = [
  {
    id: 1,
    name: 'Mohamed',
    email: 'mohamed17@gmail.com',
    phone: '55555555',
    address: 'La Soukra, Ariana',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '12345678',
    address: 'New York, USA',
  },
  {
    id: 3,
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phone: '87654321',
    address: 'London, UK',
  },
];

const Annonces = () => {
  const annonces = fakeAnnouncements;

  return (
    <div>
      <div>
        {annonces.map((annonce) => (
          <div key={annonce.id} className="annonce">
            <h3>{annonce.name}</h3>
            <p>Email: {annonce.email}</p>
            <p>Phone: {annonce.phone}</p>
            <p>Address: {annonce.address}</p>
            <Link to={`/annonce/${annonce.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Annonces;
