document.addEventListener('DOMContentLoaded', () =>{

    ///  Store
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

    // Get Items table
    function GetList() {
        let table;
        store.forEach(function(item, i, arr) {
            table += `
            <tr id="row-${i}">
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
                        <button class="btn-warning btn btn-edit" data-edit="${i}">
                            Edit
                        </button>
                        <button class="btn btn-danger btn-delete" data-edit="${i}">
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        `;
        });
        $('.table-info > tbody').html(table);
    }

    function Init() {
        GetList();
        GetBtnEdit();
        GetBtnDelete();
    }

    Init();

    function GetBtnEdit(){
        // BtnEdit
        let BtnEdit = document.querySelectorAll('.btn-edit');
        for (let i = 0; i < BtnEdit.length; i++){
            BtnEdit[i].addEventListener('click', (e) => {
                let id = parseInt(e.target.dataset.edit);
                document.querySelector('.add-name').value = store[id]['title'];
                document.querySelector('.add-count').value = store[id]['count'];
                document.querySelector('.add-price').value = store[id]['price'];
                document.querySelector('.add-key').value = id;
                $('#exampleModalCenter').modal('show');
            });
        }
    }

    function GetBtnDelete(){
        // BtnEdit
        let BtnDelete = document.querySelectorAll('.btn-delete');
        for (let i = 0; i < BtnDelete.length; i++){
            BtnDelete[i].addEventListener('click', (e) => {
                let id = parseInt(e.target.dataset.edit);
                delete store[id];
                Init();
            });
        }
    }

    // Update info
    document.querySelector('.btn-update').addEventListener('click', () => {
        let key = parseInt(document.querySelector('.add-key').value);
        let title = document.querySelector('.add-name').value;
        let count = document.querySelector('.add-count').value;
        let price = document.querySelector('.add-price').value;
        store[key]['title'] = title;
        store[key]['count'] = count;
        store[key]['price'] = price;
        Init();
        $('#exampleModalCenter').modal('hide');
    })


});