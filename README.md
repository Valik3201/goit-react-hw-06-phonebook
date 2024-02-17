# Phonebook

This project is a phonebook application where users can manage their contacts. It allows users to add new contacts, delete existing ones, and filter contacts by name. The application is built using React and Redux, with Redux Toolkit for state management. Data persistence between sessions is achieved using the Redux Persist library. Styling is implemented using the Next UI component library and the Tailwind CSS framework.

## Features

- Add new contacts: Users can add a new contact by providing their name and phone number.
- Delete contacts: Users can remove existing contacts from the phonebook.
- Filter contacts: Users can filter contacts by name to quickly find the desired contact.
- Data persistence: Contacts are saved locally, allowing users to access them between sessions.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Redux: State management library for managing application state.
- Redux Toolkit: Official Redux package for efficient Redux development.
- Redux Persist: Library for persisting Redux state to local storage.
- Next UI: Component library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for styling applications.

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository:
   ```
   git clone <repository-url>
   ```
3. Install dependencies:
   ```
   npm install
   ```
5. Run the development server:
   ```
   npm run start
   ```
7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

Once the application is running, you can perform the following actions:

- **Add a contact**: Click the "Add Contact" button and enter the name and phone number of the contact in the input fields. Then click the "Add" button to save the contact.
- **Delete a contact**: Click the "Delete" button next to the contact you want to remove from the phonebook.
- **Filter contacts**: Enter the name of the contact you want to filter in the search input field. The contact list will be filtered in real-time as you type.

## Contributing

Contributions are welcome! If you have any suggestions or found a bug, please open an issue or submit a pull request.

