import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { BookUserIcon } from 'lucide-react';

function App() {
  return (
    <div className="container mx-auto md:max-w-xl flex flex-col gap-4 p-8">
      <div className="flex flex-row gap-4 justify-center items-center md:pb-8">
        <BookUserIcon className="w-12 h-12 text-blue-600" />
        <h1 className="text-3xl md:text-6xl font-medium">
          Phone<span className="text-blue-600">Book</span>
        </h1>
      </div>

      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
