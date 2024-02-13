# Contact Management App

This React application serves as a straightforward contact management system,
offering essential features for adding, searching, and deleting contacts.

> [!NOTE]\
> The code has been refactored using React hooks.

## Features

1. **Add Contacts:** Use the provided form to easily add new contacts, including
   names and phone numbers.

2. **Search Functionality:** Effortlessly search through your contact list by
   entering names in the search field.

3. **Contact Deletion:** Conveniently delete contacts that are no longer needed,
   enhancing the user's control over their contact list.

## Usage

- **Adding New Contacts:**

  - Look for the "Add Contact" section or a similar button.
  - Fill in the required information, including the contact's name and phone
    number, in the provided form.
  - Submit the form to add the new contact to your list.

- **Searching for Contacts:**

  - Locate the search bar or input field on the page.
  - Enter the name of the contact you are looking for.
  - The application will dynamically filter and display matching contacts as you
    type.

- **Deleting Contacts:**

  - Find the list of contacts displayed on the page.
  - Look for a delete or remove option associated with each contact.
  - Click on the delete option to remove unwanted contacts from your list.

## Project Structure

The project structure follows a modular approach with the following components:

- **ContactForm Component:**

  - Manages the form for adding new contacts.

- **ContactList Component:**

  - Displays the list of contacts.

- **ContactItem Component:**

  - Represents an individual contact in the list.

- **Filter Component:**

  - Implements the search functionality.

- **App Component:**
  - Root component managing the state for contacts and filter.
