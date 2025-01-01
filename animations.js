// animations.js

// Function to set up animations
function setupAnimations(scene) {
    const animationGroups = scene.animationGroups;

    // Check if animation groups are available
    if (animationGroups.length === 0) {
        console.error("No animation groups found in the scene.");
        return;
    }

    // Stop all animations initially
    animationGroups.forEach(animation => animation.stop());
    console.log("Animation groups found:", animationGroups.map(a => a.name));

    // Play animations in sequence
    let currentIndex = 0;

    const playNextAnimation = () => {
        if (currentIndex < animationGroups.length) {
            const currentAnimation = animationGroups[currentIndex];
            console.log(`Playing animation: ${currentAnimation.name}`);
            currentAnimation.play(false); // Play once

            // Trigger next animation on end
            currentAnimation.onAnimationEndObservable.addOnce(() => {
                currentIndex++;
                playNextAnimation();
            });
        } else {
            console.log("All animations have played.");
        }
    };

    // Start the first animation
    playNextAnimation();
}

