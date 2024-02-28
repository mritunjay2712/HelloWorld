document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.display = "flex";
    overlay.style.flexDirection = "column";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.backgroundColor = "rgba(255, 255, 255, 1)"; // White background with 50% opacity
    overlay.style.zIndex = 9999;
    overlay.style.transition = "opacity 0.5s"; // Added transition effect

    const logo = document.createElement("img");
    logo.src = "logo.ico"; // Replace with the path to your logo
    logo.style.width = "100px"; // Adjust the width of the logo
    logo.style.height = "100px"; // Adjust the height of the logo
    logo.style.borderRadius = "50%"; // Create a circular effect for the logo

    const boldText = document.createElement("h2");
    boldText.textContent = "Welcome to our Community";
    boldText.style.textAlign = "center";
    boldText.style.color = "#000000"; // Adjusted text color to black
    boldText.style.opacity = 1;
    boldText.style.transition = "opacity 0.5s";
    boldText.style.marginTop = "20px"; // Add some top margin to the text

    overlay.appendChild(logo);
    overlay.appendChild(boldText);
    document.body.appendChild(overlay);

    setTimeout(function() {
        boldText.style.opacity = 0;
        setTimeout(function() {
            overlay.style.opacity = 0; // Fading out the overlay
            setTimeout(function() {
                document.body.removeChild(overlay);
            }, 500);
        }, 1000);
    }, 500);
    const projectsLink = document.querySelector('nav ul li:nth-child(3) a'); // Select the Projects link

    // Add an event listener for the click event on the Projects link
    projectsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        window.location.href = "team_profiles.html"; // Replace with the path to your team profiles page
    });
});
