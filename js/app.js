$(document).ready(() => {

    let store = [
        {
            "title": "Товар 1",
            "count": "5",
            "price": "1.200.200.00"
        },
        {
            "title": "Товар 2",
            "count": "4",
            "price": "1.404.200.00"
        },
        {
            "title": "Товар 3",
            "count": "6",
            "price": "1.800.450.00"
        }
    ];

    function GetListItem(){
        let html;
        $(store).each(function (key, item) {
            html += `
            <tr id="${key}">
                <td>
                    <div class="product-info w-100 d-flex justify-content-between">
                        <div class="product-info__title">
                            <a href="#" class="text-white">${item.title}</a>
                        </div>
                        <div class="product-info__count">
                            <span class="badge badge-light">${item.count}</span>
                        </div>
                    </div>
                </td>
                <td>$ ${item.price}</td>
                <td>
                    <div class="product-action">
                        <button class="btn-warning btn" data-item="${key}">
                            Edit
                        </button>
                        <button class="btn btn-danger" data-item="${key}">
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        `
        });
        $('.table-info tbody').html(html);
    }

    GetListItem();

    function AddItems() {
        let name = $('.add-name').val(),
            size = $('.add-count').val(),
            num = $('.add-price').val();

        $(store).push({title: name, count: size, price: num});
        GetListItem();
    }

    $('.add-submit').on('click', (e) => {
        e.preventDefault();
        AddItems();
    })

});