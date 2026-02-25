
/* ========= AUTO LOGOUT IF TAB CHANGES ========= */

// Logout function
// //function forceLogout(reason) {
//     sessionStorage.removeItem('isLoggedIn');
//     alert(reason);
//     window.location.href = "login.html";
// //}

// If user switches tab
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        window.location.href = 'login.html';
    }
});

// If window loses focus (alt+tab, minimize, etc.)
window.addEventListener("blur", function () {
        window.location.href = 'login.html';
});


/* ========= DEVTOOLS DETECTION ========= */

let devtoolsOpen = false;

setInterval(function () {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;

    if (widthThreshold || heightThreshold) {
        if (!devtoolsOpen) {
            devtoolsOpen = true;
            alert("DevTools is open! You will be logged out.");
            window.location.href = 'login.html';
        }
    } else {
        devtoolsOpen = false;
    }
}, 1000);


/* ========= EXTRA: BLOCK COMMON SHORTCUTS ========= */

document.addEventListener("keydown", function (e) {

    // F12
    if (e.key === "F12") {
        e.preventDefault();
        alert("F12 is disabled!");
        window.location.href = 'login.html';
    }

    // Ctrl+Shift+I / J / C
    if (e.ctrlKey && e.shiftKey &&
        ["i", "j", "c"].includes(e.key.toLowerCase())) {
        e.preventDefault();
        alert("DevTools shortcuts are disabled!");
        window.location.href = 'login.html';
    }

    // Ctrl+U (view source)
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        alert("Viewing source is not allowed!");
        window.location.href = 'login.html';
    }
});
