const ticketComplete = document.querySelectorAll('.del')
const ticketReopen = document.querySelectorAll('.reopen')
const delTicket = document.querySelectorAll('.delete')
// const ticketComment = document.querySelectorAll('.comment')

Array.from(ticketComplete).forEach(el => {
  el.addEventListener('click', markClosed)
})
Array.from(ticketReopen).forEach(el => {
  el.addEventListener('click', markOpen)
})
Array.from(delTicket).forEach(el => {
  el.addEventListener('click', deleteTicket)
})

// Array.from(ticketComment).forEach((el)=>{
//   el.addEventListener('click', addComment)
// })

async function deleteTicket () {
  const ticketId = this.parentNode.dataset.id
  try {
    const response = await fetch('home/deleteTicket', {
      method: 'delete',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        publicJSFile: ticketId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markClosed () {
  const ticketId = this.parentNode.dataset.id
  try {
    const response = await fetch('tickets/markClosed', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        publicJSFile: ticketId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markOpen () {
  const ticketId = this.parentNode.dataset.id
  try {
    const response = await fetch('tickets/reopen', {
      method: 'put',
      headers: {'Content-type': 'application/json' },
      body: JSON.stringify({
        publicJSFile: ticketId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
   console.log(err) 
  }
}


// async function addComment () {
//   const ticketId = this.parentNode.dataset.id
//   try {
//     const response = await fetch('ticket/addComment',{
//       method: 'post',
//       headers: {'Content-type'}
//     })
//   } catch (err) {
    
//   }
// }