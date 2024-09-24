async function addItem(userCart, item){
    userCart.push(item);
}

async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}


async function deleteItem(userCart, name){

}

async function removeitem(userCart, index){

}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeitem,
}
