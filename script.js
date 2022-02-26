const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));
// Hide Modal on X button
close.addEventListener('click', () => modal.classList.remove('show-modal'));
// Hide Modal on click-outside
window.addEventListener('click', (e) =>
    e.target == modal ? modal.classList.remove('show-modal') : false
);
// Toggle Nav
toggle.addEventListener('click', () =>
    document.body.classList.toggle('show-nav')
);
