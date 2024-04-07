import React from "react";
import Card from "./Card.jsx"
import contacts from "../contacts.js"

function CreateCard(contact){
  return (
    <Card
    key={contact.id}
    id={contact.id}    
    name={contact.name} 
    img={contact.imgURL} 
    phone={contact.phone}
    email={contact.email}
    />); 
}


function App() {
  return (
    <div>
      <h1 className="heading">List of Contacts</h1>
      {contacts.map(contact => CreateCard(contact))}
    </div>
  );
}

export default App;