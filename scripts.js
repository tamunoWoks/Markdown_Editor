// Get references to DOM elements
const editor = document.getElementById('editor'); // Markdown input area
const preview = document.getElementById('preview'); // Live preview area
const saveButton = document.getElementById('save'); // Save draft button
const exportHtmlButton = document.getElementById('export-html'); // Export to HTML button
const exportPdfButton = document.getElementById('export-pdf'); // Export to PDF button

// Function to update the preview area with formatted HTML
function updatePreview() {
    const markdownText = editor.value; // Get Markdown text from editor
    preview.innerHTML = marked(markdownText); // Convert Markdown to HTML
    Prism.highlightAll(); // Apply syntax highlighting to code blocks
}

// Event listener for input changes in the editor
editor.addEventListener('input', updatePreview);
// Initial call to update preview when the page loads
document.addEventListener('DOMContentLoaded', updatePreview);
