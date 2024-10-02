// src/components/SelectedContact.jsx
import React, { useEffect, useState } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null); // State for storing the contact data

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data); // Set the contact data from API
        console.log("Fetched Contact: ", data); // Log the contact data
      } catch (error) {
        console.error("Error fetching contact: ", error); // Error handling
      }
    }

    if (selectedContactId) {
      fetchContact(); // Fetch the contact only if selectedContactId is truthy
    }
  }, [selectedContactId]); // Dependency array includes selectedContactId

  if (!contact) return <div>Loading...</div>; // Loading state

  return (
    <div>
      <h2>Contact Details</h2>
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button> {/* Button to go back */}
    </div>
  );
}
