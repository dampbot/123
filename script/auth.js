function checkAuth() {
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
    }
}

// Detect if page was reloaded
if (performance.getEntriesByType("navigation")[0].type === "reload") {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

// Run authentication check
checkAuth();

function logout() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}