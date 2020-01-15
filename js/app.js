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
        let table;
        $(store).each(function (key, item) {
            table += `
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
                        <button class="btn-warning btn btn-edit"  data-item="${key}">
                            Edit
                        </button>
                        <button class="btn btn-danger btn-delete" data-item="${key}">
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        `
        });
        $('.table-info tbody').html(table);
    }

    GetListItem();

    function AddItems() {
        store.push(
            {
                title: $('.add-name').val(),
                count: $('.add-count').val(),
                price: $('.add-price').val()
            }
        );
        GetListItem();
    }

    function DeleteItem(el){
        delete store[el];
        GetListItem();
    }

    function EditItem(el, title, count, price){
        store[el]['title'] = title;
        store[el]['count'] = count;
        store[el]['price'] = price;
        console.log(store);
    }

    $('.btn-delete').on('click', (e) => {
       let id = parseInt(e.target.dataset.item);
       DeleteItem(id);
       GetListItem();
    });

    $('.btn-update').on('click', (e) => {
        let elem = parseInt(e.target.dataset.type);
        EditItem(elem, $('.add-name').val(), $('.add-count').val(), $('.add-price').val());
        GetListItem();
        $('.add-name').val('');
        $('.add-count').val('');
        $('.add-price').val('');
        $('#exampleModalCenter').modal('hide');
    });


    $('.btn-edit').on('click', (e) => {
       let id = parseInt(e.target.dataset.item);
       $('.add-name').val(store[id]['title']);
       $('.add-count').val(store[id]['count']);
       $('.add-price').val(store[id]['price']);
       $('#exampleModalCenter').modal('show');
    });




});