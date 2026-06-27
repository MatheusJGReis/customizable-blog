$(document).ready(function () {
    let timer;

    $('#search-input').on('input', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            const Q = $('#search-input').val().trim();
            const params = new URLSearchParams();
            if (Q) params.set('q', Q);
            $.get(PARTIAL_URL + '?' + params.toString(), function (html) {
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