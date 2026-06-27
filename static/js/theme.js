let $themeButtons;


const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
$(themeMediaQuery).on('change', function() {
    if (localStorage.getItem('theme') === 'auto') {
        setTheme('auto');
    }
});


const THEME_LABELS = {
    auto: `
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0.15" class="size-6">
            <use href="#icon-auto"></use>
        </svg>
    `,
    light: `
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0.15" class="size-6">
            <use href="#icon-sun"></use>
        </svg>
    `,
    dark: `
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0.15" class="size-6">
            <use href="#icon-moon"></use>
        </svg>
    `,
};


function updateButtons(theme) {
    if ($themeButtons) {
        const text = `Current theme: ${theme}`;

        $themeButtons.each(function () {
            $(this).html(THEME_LABELS[theme]);
            $(this).attr('aria-label', theme);
            $(this).attr('title', theme);
        });
    }
}


function setTheme(mode) {
    if (!['light', 'dark', 'auto'].includes(mode)) {
        console.error(`Got invalid theme mode: ${mode}. Resetting to auto.`);
        mode = 'auto';
    }

    document.documentElement.dataset.theme = mode;
    localStorage.setItem('theme', mode);

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle(
        'dark',
        mode === 'dark' || (mode === 'auto' && prefersDark)
    );

    updateButtons(mode);
}


function cycleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'auto';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const order = prefersDark ? ['auto', 'light', 'dark'] : ['auto', 'dark', 'light'];

    const nextTheme = order[(order.indexOf(currentTheme) + 1) % order.length];

    setTheme(nextTheme);
}


function initTheme() {
    setTheme(localStorage.getItem('theme') || 'auto');
}


$(document).ready(function () {
    $themeButtons = $('._theme-toggle');
    $themeButtons.on('click', cycleTheme);
    updateButtons(localStorage.getItem('theme') || 'auto');
});


initTheme();