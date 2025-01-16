
# Modern CRM - Next.js Project

## Overview
The Modern CRM project is a Customer Relationship Management system built with Next.js 14. It features a clean, responsive user interface with mobile support, using Tailwind CSS for styling and MUI components for certain UI elements. This application allows users to manage tasks, view CRM details, and perform other related activities.

## Features
- **Responsive Design**: The application is fully responsive, using Tailwind CSS classes to adjust the layout across various screen sizes.
- **Task Management**: Users can filter, sort, and manage tasks based on status, priority, and other criteria.
- **Editable Tables**: The project includes editable tables for managing data, with inline editing for rows and headers.
- **User Profile & Settings**: Users can manage their profile, settings, and preferences, with an avatar-based dropdown for user actions.

## Project Structure

The project is built using a modular approach, separating components into reusable elements:

1. **RootLayout**: This component wraps the entire layout and contains the sidebar, topbar, and main content.
2. **Sidebar**: A navigation component that includes buttons for layout control, user settings, and theme toggling.
3. **Topbar**: Contains controls for file management, including the current file name, auto-save toggle, and user profile dropdown.
4. **Header**: Manages the search functionality and other toolbar items such as filter, sort, and view options.
5. **TableComponent**: Displays data in a table format with editable cells and headers. It supports search, filter, and sorting functionality.
6. **UI Components**: The project uses several custom UI components like `Input`, `Button`, `Avatar`, etc., to maintain consistent styling across the app.

## Setup and Installation

### Prerequisites
Ensure that you have the following installed:
- Node.js (v16+)
- npm or yarn

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/modern-crm.git
   ```

2. Navigate into the project directory:

   ```bash
   cd modern-crm
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:3000`.

## Technologies Used
- **Next.js 14**: The React-based framework for building the application.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive, modern designs.
- **MUI (Material-UI)**: For certain UI components like dropdowns and buttons.
- **Lucide Icons**: For displaying icons throughout the interface.
- **TypeScript**: For type safety and improved developer experience.

## License

This project is licensed under the MIT License.
