async function addItem(userCart, item){
    userCart.push(item);
}

async function calculateTotal(userCart){
    console.log(" \nShopee Cart TOTAL IS:");

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\n🎁Total: ${result}`);
}


async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== - 1){
        userCart.splice(index, 1);
    }
}

async function removeitem(userCart, index){

    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound == -1) {
    console.log("item não encontrado");
    return;
    }

    if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
    }

    if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
    }
}

async function displaycart(userCart){
    console.log("Shopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeitem,
    displaycart, 
}