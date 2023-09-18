import React from 'react';
import { useParams } from 'react-router-dom';

const AnnonceDetail = () => {
  const { id } = useParams();
  console.log(id); 

  const annonce = {
    id: id,
    title: 'Sample Title',
    description: 'This is a sample description of the announcement.',
    name: 'Mohamed',
    email: 'mohamed17@gmail.com',
    phone: '55555555',
    address: 'La Soukra, Ariana',
  };

  return (
    <div>
      <h2>{annonce.title}</h2>
      <p>{annonce.description}</p>
      <p>Name: {annonce.name}</p>
      <p>Email: {annonce.email}</p>
      <p>Phone: {annonce.phone}</p>
      <p>Address: {annonce.address}</p>
    </div>
  );
};

export default AnnonceDetail;
