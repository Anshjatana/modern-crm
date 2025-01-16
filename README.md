# Topbar Component

This is a simple Topbar component built using React and Material UI (MUI). It allows users to edit the file name, toggle auto-save, and display a user profile dropdown.

## Features

- **File Name Editing:** The file name can be edited by clicking on it. It switches to a text field, allowing the user to update the name. The new file name is saved to `localStorage` and persists across page reloads.
- **Auto Save Toggle:** The component includes a switch to toggle auto-save functionality. (Implementation can be added in the future.)
- **User Profile Dropdown:** A user avatar is shown in the top-right corner. When clicked, a dropdown menu appears with options for the user profile, settings, and log out.

## Installation

To use this component in your project, follow these steps:

### 1. Clone the Repository

Clone this repository to your local machine:
/Users/anshjatana/Documents/README.md
```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### 2. Install Dependencies

Install the necessary dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

To run the project in development mode, use:

```bash
npm start
# or
yarn start
```

## Usage

You can import and use the `Topbar` component in your React project like so:

```tsx
import { Topbar } from './path/to/Topbar';

function App() {
  return (
    <div>
      <Topbar />
      {/* Other components */}
    </div>
  );
}
```

### Component Breakdown

#### `Topbar`
- **State:**
  - `fileName`: The name of the file, which can be edited by the user.
  - `isEditing`: Determines whether the file name is being edited.
  - `autoSave`: Tracks the state of the auto-save toggle.
  - `anchorEl`: Controls the state of the profile dropdown menu.
  
- **Effect:**
  - The file name is saved to `localStorage` every time it changes, ensuring persistence across page reloads.

- **Functions:**
  - `handleFileNameChange`: Updates the `fileName` state when the input changes.
  - `toggleEditMode`: Toggles between edit and view modes for the file name.
  - `handleAutoSaveToggle`: Handles the state change of the auto-save switch.
  - `handleMenuOpen` and `handleMenuClose`: Manage the opening and closing of the user profile dropdown.

## License

MIT License. See the [LICENSE](LICENSE) file for more details.
