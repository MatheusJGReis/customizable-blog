$(document).ready(function () {
    let timer;

    $('#search-input').on('input', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            const Q = $('#search-input').val().trim();
            const PARAMS = new URLSearchParams();
            if (Q) PARAMS.set('q', Q);
            $.get(PARTIAL_URL + '?' + PARAMS.toString(), function (html) {
                $('#posts-container').html(html);
            });
        }, 400);
    });

    $(document).on('click', '._pagination-link', function (e) {
        e.preventDefault();
        const QS = $(this).attr('href').replace(/^[^?]*/, '');
        $.get(PARTIAL_URL + QS, function (html) {
            $('#posts-container').html(html);
            $('html, body').animate({ scrollTop: $('#posts-container').offset().top - 24 }, 300);
        });
    });
});