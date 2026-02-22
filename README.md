# Simple KnockoutJS Example

This is a simple KnockoutJS application demonstrating basic MVVM (Model-View-ViewModel) patterns.

## Features

- **Two-way data binding**: First name and last name inputs are bound to observables
- **Computed properties**: Full name is automatically computed from first and last name
- **Observable arrays**: Dynamic list of items that can be added and removed
- **Event handling**: Click handlers and keyboard events

## How to Run

### Using Python 3 (recommended)

1. Open a terminal and go to the project folder:
   ```bash
   cd path/to/knockoutjs
   ```
2. Start the built-in HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open a browser and visit:
   ```
   http://localhost:8000
   ```
4. To stop the server, press `Ctrl+C` in the terminal.

You can use a different port if 8000 is in use (e.g. `python3 -m http.server 3000`, then visit `http://localhost:3000`).

### Without a server

You can also open `index.html` directly in a browser (double-click or drag into the browser). The app uses inline script, so it will run; for development, using the Python server above is recommended.

## What's Demonstrated

1. **Observables**: `firstName`, `lastName`, `newItemText` - reactive properties that update the UI when changed
2. **Computed Values**: `fullName` - automatically recalculates when dependencies change
3. **Observable Arrays**: `items` - reactive array that updates the UI when items are added/removed
4. **Data Binding**: 
   - `data-bind="value: ..."` - two-way binding for inputs
   - `data-bind="text: ..."` - one-way binding for text display
   - `data-bind="click: ..."` - event binding for buttons
   - `data-bind="foreach: ..."` - loop through arrays
5. **Conditional Rendering**: `<!-- ko if: ... -->` - conditional comments for showing/hiding elements

## Try It Out

1. Type in the first name and last name fields - watch the full name update automatically
2. Add items to the list using the input field and button (or press Enter)
3. Delete items by clicking the Delete button
4. Notice how the item count updates automatically
