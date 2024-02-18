function validateForm() {
    let x = document.forms['myForm']['fname'].value;

    if (x.trim() === "") {
        alert("Please fill in the name field.");
        return false;
    }
}