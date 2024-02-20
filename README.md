# Notes App

This is a simple yet powerful Notes application built with MongoDB, Express, EJS, and Node.js. It provides CRUD (Create, Read, Update, Delete) functionality, allowing users to seamlessly create, view, edit, and delete notes.

## Features

- **User-friendly Interface**: The app offers a sleek and intuitive interface for easy note management.
- **CRUD Operations**: Users can perform all basic CRUD operations on their notes - Create, Read, Update, and Delete.
- **Responsive Design**: The app is designed to be responsive, ensuring a seamless experience across devices.
- **Secure Authentication**: Authentication functionality ensures that only authorized users can access and manage their notes.
- **Scalable Architecture**: Built using modern technologies, the app's architecture is scalable and robust.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/anantsingh4/Notes---A-notes-app-that-supports-CRUD-functionality.git
```

2. Navigate to the project directory:

```bash
cd Notes---A-notes-app-that-supports-CRUD-functionality
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables by creating a `.env` file in the root directory:

```plaintext
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID = Your credentials
GOOGLE_CLIENT_SECRET= your credentials
GOOGLE_CALLBACK_URL="http://localhost:5000/google/callback"
```


5. Run the application:

```bash
npm run start
```

6. Open your web browser and visit `http://localhost:3000` to access the app.

## Usage

- To create a new note, click on the "New Note" button and enter the note details.
- To view, edit, or delete an existing note, click on the respective note in the list.
- Use the navigation bar to easily switch between different sections of the app.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve this project.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy note-taking! 📝
