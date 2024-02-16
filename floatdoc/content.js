let isDragging = false;
let startX, startY;

// Create floating icon
const icon = document.createElement('div');
icon.id = 'floatingIcon';
icon.innerHTML = '<img src="icon48.png">';
document.body.appendChild(icon);

// Handle click on floating icon
icon.addEventListener('click', function() {
chrome.runtime.sendMessage({ action: 'openNotepad' });
});

// Handle mouse down on floating icon to start dragging
icon.addEventListener('mousedown', function(e) {
isDragging = true;
startX = e.clientX;
startY = e.clientY;
});

// Handle mouse move to update icon position during dragging
document.addEventListener('mousemove', function(e) {
if (isDragging) {
    const offsetX = e.clientX - startX;
    const offsetY = e.clientY - startY;
    icon.style.right = `calc(20px - ${offsetX}px)`;
    icon.style.bottom = `calc(20px - ${offsetY}px)`;
    startX = e.clientX;
    startY = e.clientY;
}
});

// Handle mouse up to stop dragging
document.addEventListener('mouseup', function() {
isDragging = false;
});
