export function Navbar() {
    const navbar = document.createElement("nav");
    navbar.className = "bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow";

    navbar.innerHTML = `


<nav class="nav-bar">
    <div class="nav-bar-left">

        <div class="logo">

        </div>

        <div class="nav-bar-button-divider"></div>

        <div class="search-bar-container">
            <input type="text" id="searchInput" placeholder="Search..." class="search-bar-input">
            <button onclick="search()" class="search-bar-button">Search</button>
        </div>

        <div class="nav-bar-button-container">
            <div class="nav-bar-button-divider"></div>

            <a href="pailians.html" class="nav-bar-button">Pailians</a>
            
            <div class="nav-bar-button-divider"></div>

            <a href="abilities.html" class="nav-bar-button">Abilities</a>

            <div class="nav-bar-button-divider"></div>

            <a href="items" class="nav-bar-button">Items</a>

            <div class="nav-bar-button-divider"></div>

            <a href="map" class="nav-bar-button">Map</a>

            <div class="nav-bar-button-divider"></div>

        </div>

    </div>
    <div class="nav-bar-right">

        <div class="nav-bar-button-container">

            <div class="nav-bar-button-divider"></div>

            <div class="theme-toggle-container">
                <label class="theme-toggle-label">Night Mode</label>
                <label class="switch">
                    <input type="checkbox" id="theme-checkbox">
                    <span class="slider"></span>
                </label>
            </div>

            <div class="nav-bar-button-divider"></div>

            <a href="/settings" class="nav-bar-button">Settings</a>

        </div>

    </div>
</nav>`;

    return navbar;
}