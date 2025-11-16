//your JS code here. If required.
// Function to remove selected color from dropdown
function removeColor() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedIndex = colorSelect.selectedIndex;
    
    // Check if a valid option is selected (not the default)
    if (selectedIndex !== -1) {
        // Remove the selected option
        colorSelect.remove(selectedIndex);
    }
}