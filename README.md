# Markdown
## Project Overview
This Markdown Editor project provides a user-friendly interface for editing and previewing Markdown content in real-time. It includes features for live preview of Markdown text, syntax highlighting for code blocks, saving drafts locally, and exporting the content to both HTML and PDF formats. This project showcases essential web development skills, including HTML, CSS, and JavaScript, and leverages third-party libraries for enhanced functionality.

## Features
- Markdown Editing: Users can input Markdown text in a textarea. The editor supports basic Markdown syntax for formatting text, including headings, lists, links, and code blocks.

- Live Preview: As users type Markdown text, the content is instantly converted to HTML and displayed in a live preview pane. This feature uses the Marked.js library to parse Markdown into HTML.

- Syntax Highlighting: Code blocks within the Markdown text are highlighted using Prism.js. This library provides syntax highlighting for various programming languages, making code snippets more readable.

- Draft Saving: Users can save their current Markdown draft to the browser's local storage with a single click. The saved draft is automatically loaded when the page is revisited, allowing users to continue editing from where they left off.

- Export to HTML: The editor includes a button to export the Markdown content as an HTML file. The content is converted to HTML using Marked.js, and then a downloadable Blob is created for user download.

- Export to PDF: Users can export the Markdown content to a PDF file. The content is converted to HTML and then rendered into a PDF using jsPDF, providing a downloadable PDF file for users.

## Technologies Used
- HTML: Provides the structure and layout of the editor.
- CSS: Used for styling the editor's user interface, including the textarea, preview area, and buttons.
- JavaScript: Handles dynamic content updates, draft saving, and file exporting.
- Marked.js: Converts Markdown text to HTML for live preview and export.
- Prism.js: Adds syntax highlighting to code blocks within Markdown text.
- jsPDF: Generates PDF files from Markdown content.  

## Usage
To use the Markdown Editor:

1. Open the index.html file in a web browser.
2. Type Markdown content into the textarea. The live preview will update automatically.
3. Click the "Save Draft" button to save the current content to local storage.
4. Click the "Export to HTML" button to download the Markdown content as an HTML file.
5. Click the "Export to PDF" button to download the Markdown content as a PDF file.  
This project is designed to be easily extensible. Additional features such as more advanced Markdown parsing, customizable themes, or enhanced export options can be added as needed.
