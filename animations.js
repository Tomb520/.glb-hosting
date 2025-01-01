// animations.js

// Function to set up animations
function setupAnimations(scene) {
    const animationGroups = scene.animationGroups;

    // Stop all animations initially
    animationGroups.forEach(animation => animation.stop());

    // Play animations in sequence
    if (animationGroups.length > 0) {
        let currentIndex = 0;

        const playNextAnimation = () => {
            if (currentIndex < animationGroups.length) {
                const currentAnimation = animationGroups[currentIndex];
                currentAnimation.play(false); // Play once

                // Play the next animation when the current one ends
                currentAnimation.onAnimationEndObservable.addOnce(() => {
                    currentIndex++;
                    playNextAnimation();
                });
            }
        };

        // Start the first animation
        playNextAnimation();
    } else {
        console.log('No animation groups found.');
    }
}
