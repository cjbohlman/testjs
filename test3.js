if (window.location.pathname === "/account") {
  const account_section = document.querySelector('.customer.account');
  var div = document.createElement('div');  //creating element
  div.textContent = "Hello, World";         //adding text on the element
  account_section.appendChild(div); 
}
