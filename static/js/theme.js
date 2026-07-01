let $themeButtons;


const THEME_MEDIA_QUERY = window.matchMedia('(prefers-color-scheme: dark)');
$(THEME_MEDIA_QUERY).on('change', function() {
    if (localStorage.getItem('theme') === 'auto') {
        setTheme('auto');
    }
});


const THEME_LABELS = {
    auto: `
        <svg class="size-6" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0.15">
            <use href="#icon-auto"></use>
        </svg>
    `,
    light: `
        <svg class="size-6" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0.15">
            <use href="#icon-sun"></use>
        </svg>
    `,
    dark: `
        <svg class="size-6" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0.15">
            <use href="#icon-moon"></use>
        </svg>
    `,
};


function updateButtons(theme) {
    if ($themeButtons) {
        const TEXT = `Change theme: ${theme}`;

        $themeButtons.each(function () {
            $(this).html(THEME_LABELS[theme]);
            $(this).attr('aria-label', TEXT);
            $(this).attr('title', TEXT);
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

    const PREFERS_DARK = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle(
        'dark',
        mode === 'dark' || (mode === 'auto' && PREFERS_DARK)
    );

    updateButtons(mode);
}


function cycleTheme() {
    const CURRENT_THEME = localStorage.getItem('theme') || 'auto';
    const PREFERS_DARK = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const ORDER = PREFERS_DARK ? ['auto', 'light', 'dark'] : ['auto', 'dark', 'light'];

    const nextTheme = ORDER[(ORDER.indexOf(CURRENT_THEME) + 1) % ORDER.length];

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