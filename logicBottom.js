// Adicione funcionalidades aos botões (Edit, Show, Delete)
document.querySelectorAll('.btn-edit').forEach(button => {
     button.addEventListener('click', () => {
         alert('Edit button clicked');
     });
 });
 
 document.querySelectorAll('.btn-show').forEach(button => {
     button.addEventListener('click', () => {
         alert('Show button clicked');
     });
 });
 
 document.querySelectorAll('.btn-delete').forEach(button => {
     button.addEventListener('click', () => {
         alert('Delete button clicked');
     });
 });
 
 document.querySelector('.btn-create').addEventListener('click', () => {
     alert('Create New button clicked');
 });
 