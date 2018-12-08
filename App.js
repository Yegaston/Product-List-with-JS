class Product {

    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
    
}

class UI {
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        
            <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product: </strong>${product.name}
                <strong>Price: </strong>${product.price}
                <strong>Year: </strong>${product.year}
                <a href="#" name="delete" class="btn btn-danger">Delete</a>
            </div>
            </div>
        `;

        productList.appendChild(element)
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();

        }
    }
    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-5`
        div.appendChild(document.createTextNode(message))

        // Showing in dom

        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout( () => {
            document.querySelector('.alert').remove();
        }, 3000)
    }
}

// DOM Events

document.getElementById('product-form')
    .addEventListener('submit', (e) =>{
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        const product = new Product(name, price, year)
        const ui = new UI();

        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage('Add successfully', 'success');
        e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', (e) => {
    const ui = new UI();
    ui.deleteProduct(e.target);
    ui.showMessage('Delete Succesfully', 'warning');
})
