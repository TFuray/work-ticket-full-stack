const deleteText = document.querySelector('.delete')


Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteTicket)
})

// async function deleteTicket(){
//     const title = this.parentNode.parentNode.parentNode.childNodes[5]
//     const desc = this.parentNode.parentNode.parentNode.childNodes[7]
//     try{
//         const response = await fetch('deleteTicket', {
//             method: 'delete',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//                 ''
//             })
//         })
//     }
// }