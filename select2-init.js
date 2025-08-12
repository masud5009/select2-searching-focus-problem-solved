/**
 * you need to add "dropdownParent: $('#createModal')" , here createModal is parent modal
 */

$countrySelect.select2({
    dropdownParent: $('#createModal'),
    placeholder: 'Select Country',
    allowClear: true,
    minimumInputLength: 0,
    ajax: {
        url: countryUrl,
        dataType: 'json',
        delay: 250,
        data: function (params) {
            return {
                search: params.term || '',
                page: params.page || 1,
                lang: $('select[name="language_id"]').val() || ''
            };
        },
        processResults: function (data) {
            return {
                results: data.results.map(function (item) {
                    return {
                        text: item.name,
                        id: item.id
                    };
                }),
                pagination: { more: data.more }
            };
        },
        cache: true
    }
});

