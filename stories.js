// Toggle the visibility of story details
function expandStory(storyId) {
    const moreContent = document.getElementById(`more-content-${storyId}`);
    const readMoreButton = document.querySelector(`#story${storyId} .read-more`);
    
    if (moreContent.style.display === "block") {
        moreContent.style.display = "none";
        readMoreButton.textContent = "Read More";
    } else {
        moreContent.style.display = "block";
        readMoreButton.textContent = "Read Less";
    }
}

// Alternative: You can also make the title clickable to toggle the story
function toggleStory(storyId) {
    expandStory(storyId);
}
