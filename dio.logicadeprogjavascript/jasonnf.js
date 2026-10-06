

let invoice = {
    name: "Rita",
    age: 29,
    products: {
        0: ["mouse", 39.00],
        1: ["notebook", 5000]

    }

}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`Os produtos são ${invoice.products}`)


}