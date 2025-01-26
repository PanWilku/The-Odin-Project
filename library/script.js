document.querySelector('.form-wrapper').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));

});