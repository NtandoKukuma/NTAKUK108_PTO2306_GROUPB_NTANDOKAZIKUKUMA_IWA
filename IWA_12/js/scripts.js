// scripts.js

const STATUS_MAP = {
    shelf: {
      color: 'green',
      canReserve: true,
      canCheckout: true,
      canCheckIn: false,
    },
    reserved: {
      color: 'blue',
      canReserve: false,
      canCheckout: true,
      canCheckIn: false,
    },
    overdue: {
      color: 'red',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    },
    checkedOut: {
      color: 'orange',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    }
  }

  
  const book1 = document.getElementById('book1')
  const book2 = document.getElementById('book2')
  const book3 = document.getElementById('book3')
  
  const books = [book1, book2, book3]
  

  // the selector() function was not defined anywhere
  books.forEach(book => {
    /*we get the current status text of each book from the textContent property of the status element,
     and use it to look up the relevant properties in the STATUS_MAP object.*/
    const status = book.querySelector('.status')
    const reserve = book.querySelector('.reserve')
    const checkout = book.querySelector('.checkout') // made use querySelector()  to select the HTML elements that correspond to the book status
    const checkin = book.querySelector('.checkin')
    
    const statusText = status.textContent.trim()
    const statusProps = STATUS_MAP[statusText]
   
    // set the color of the status text using the color property from STATUS_MAP
    status.style.color = statusProps.color 

   /*the syntax for disabling buttons was incorrect,
    instead of setting the value to 'disabled' I used the disabled attribute . */ 

    reserve.disabled = !statusProps.canReserve  
    checkout.disabled = !statusProps.canCheckout
    checkin.disabled = !statusProps.canCheckIn
  })
  