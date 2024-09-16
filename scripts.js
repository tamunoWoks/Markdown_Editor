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

// Save the current draft to local storage
saveButton.addEventListener('click', () => {
    const markdownText = editor.value; // Get Markdown text from editor
    localStorage.setItem('markdownDraft', markdownText); // Save draft to local storage
    alert('Draft saved!'); // Notify the user
});

// Load saved draft from local storage if available
document.addEventListener('DOMContentLoaded', () => {
    const savedDraft = localStorage.getItem('markdownDraft'); // Retrieve draft from local storage
    if (savedDraft) {
        editor.value = savedDraft; // Set editor content to saved draft
        updatePreview(); // Update preview with saved draft
    }
});

// Export the Markdown content as an HTML file
exportHtmlButton.addEventListener('click', () => {
    const markdownText = editor.value; // Get Markdown text from editor
    const htmlContent = marked(markdownText); // Convert Markdown to HTML
    const blob = new Blob([htmlContent], { type: 'text/html' }); // Create a Blob object with HTML content
    const url = URL.createObjectURL(blob); // Create an object URL for the Blob
    const a = document.createElement('a'); // Create a temporary anchor element
    a.href = url; // Set the href to the Blob URL
    a.download = 'document.html'; // Set the default file name
    a.click(); // Trigger the download
    URL.revokeObjectURL(url); // Release the object URL
});
