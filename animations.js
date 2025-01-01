// animations.js
function setupAnimations(scene) {
    const animations = scene.animationGroups; // Get all animation groups
    animations.forEach(animation => animation.stop()); // Stop all animations

    // Example: Play a specific animation by name
    const desiredAnimation = animations.find(a => a.name === "YourActionName");
    if (desiredAnimation) {
        desiredAnimation.start(true); // true for loop, false for one-time play
    } else {
        console.error("Desired animation not found");
    }

    console.log("Available Animations:", animations.map(a => a.name));
}
