import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

function App() {
  return (
    <div className="container mx-auto flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">
        Phone<span className="text-blue-600">Book</span>
      </h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
