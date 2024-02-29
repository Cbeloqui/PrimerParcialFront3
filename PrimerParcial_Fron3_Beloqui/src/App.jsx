import { useState } from 'react'
import './App.css'
import Card from './Card'; 

function App() {
  const [animalName, setAnimalName] = useState('');
  const [animalDescription, setAnimalDescription] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false); // Nuevo estado para controlar la visibilidad de la tarjeta

  const handleSubmit = (e) => {
    e.preventDefault();

    if (animalName.trim().length < 3 || animalName.startsWith(' ')) {
      setError('Por favor, verifica que la información sea correcta.');
      setAnimalName('');
      setAnimalDescription('');
    } else if (animalDescription.length <= 6) {
      setError('La descripción debe tener al menos 6 caracteres.');
      setAnimalName('');
      setAnimalDescription('');
    } else {
      setError(''); 
      setShowCard(true); 

    }
  };

  return (
    <div className='Form'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del animal"
          value={animalName}
          onChange={(e) => setAnimalName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={animalDescription}
          onChange={(e) => setAnimalDescription(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <p className="error-message" >{error}</p>}
      {showCard && <Card animalName={animalName} animalDescription={animalDescription} />}
    </div>
  );
}

export default App;
