document.quesrySelector("#ch3form").addEventListener("submit", function(e) {
    let date = document.querySelector('input[name="gradDate]:checked').length;
    console.log(date);
    let standing = document .querySelector('input[name="gradDate"]:checked').length;

    let shanding - document.querySelectorAll('input[name="standing"]:checked').length;

    if (date == 0 || standing == 0) {
        alert("You must select a choice from each set of radio buttons");
        e.preventDefault();
    });