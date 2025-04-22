function swapImage(projectId, beforeImage, afterImage) {
    const imgElement = document.getElementById(projectId);
    
    if (imgElement.src.includes(beforeImage)) {
        imgElement.src = afterImage;
    } else {
        imgElement.src = beforeImage;
    }
}