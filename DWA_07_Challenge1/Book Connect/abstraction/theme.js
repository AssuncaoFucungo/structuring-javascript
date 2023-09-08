/**
 * Sets up the initial theme based on user preferences.
 * If the user prefers dark mode, sets the theme to night;
 * otherwise, sets it to day. Also updates the theme color scheme.
 */
function setupTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector('[data-settings-theme]').value = 'night';
        setThemeColors('255, 255, 255', '10, 10, 20');
    } else {
        document.querySelector('[data-settings-theme]').value = 'day';
        setThemeColors('10, 10, 20', '255, 255, 255');
    }
}

/**
 * Updating color variables to match the selected theme.
 * @param {string} darkColor  
 * @param {string} lightColor 
 */
function setThemeColors(darkColor, lightColor) {
    document.documentElement.style.setProperty('--color-dark', darkColor);
    document.documentElement.style.setProperty('--color-light', lightColor);
}

/**
 * Theme change event and updating colors
 * Closes settings overlay after selecting theme.
 * @param {string} theme - The selected theme ('night' or 'day').
 */
function handleThemeChange(theme) {
    if (theme === 'night') {
        setThemeColors('255, 255, 255', '10, 10, 20');
    } else {
        setThemeColors('10, 10, 20', '255, 255, 255');
    }
    document.querySelector('[data-settings-overlay]').open = false;
}

// Export the functions to be used in other files.
export { setupTheme, handleThemeChange };
