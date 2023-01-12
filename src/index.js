// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let sub = product.querySelector('.subtotal span');
  sub.textContent = price.textContent * quantity.value;
}

function calculateAll() {
  const singleProduct = document.getElementsByClassName('product');
  const total = document.getElementById('total-value');
  for(let i = 0 ; i < singleProduct.length ; i++)
  {
    updateSubtotal(singleProduct[i]);
  }
  let totalValue = total.querySelector('span');
  const subtotal = document.getElementsByClassName('product');
  let v = 0;
  for(let x = 0 ; x < subtotal.length ; x++)
  {
   
    v += +(subtotal[x].querySelector('.subtotal span').textContent);
  }
  totalValue.textContent = v;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.closest('.product').remove();
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProduct = document.getElementsByClassName('create-product');
  let name = newProduct[0].querySelector('[type="text"]').value;
  let price= newProduct[0].querySelector('[type="number"]').value;
  const products = document.getElementById('cart');
  let body = products.querySelector('tbody');

  let p = document.createElement('tr');
  p.classList.add('product');

  p.innerHTML = `
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${parseFloat(price).toFixed(2)}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove" >Remove</button>
          </td>
  `
  body.appendChild(p);
  p.querySelector('button').addEventListener('click', removeProduct);
calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('product');
 for(let i = 0; i <removeBtn.length; i++)
  {
    removeBtn[i].querySelector('button').addEventListener('click', removeProduct);
  } 

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
  //... your code goes here
});
