// script.js

// Example: Show "loading" while page initializes
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('app');

    // You can add your 3D product initialization here
    console.log("Elixir Cosmetics site loaded.");
    console.log("Ready for 3D product viewer...");

    // Example placeholder: Insert message
    app.innerHTML = `
        <h1 style="text-align:center; margin-top: 50px;">Welcome to Elixir Cosmetics</h1>
        <p style="text-align:center;">3D product experience coming soon...</p>
    `;

    // Optional: If you want to control a loading screen
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }
});
