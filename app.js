let sideNavBtn = document.querySelector(".NavigationBtn")
const toggleBtn = document.getElementById('navToggleBtn');
const sidebar = document.getElementById('sidebarMenu');
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');

  // Remove focus from any active button
  if (!sidebar.classList.contains('active')) {
    document.activeElement.blur();
  }
});

const buttons = document.querySelectorAll('.menu li button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('selected')); // remove from all
    button.classList.add('selected'); // add to clicked one
  });
});


