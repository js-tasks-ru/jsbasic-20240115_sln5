function highlight(table) {

  for (let r = 0; r < table.rows.length; r++) {
    
    let age = table.rows[r].cells[1].textContent;
    let gender = table.rows[r].cells[2].textContent;
    let status = table.rows[r].cells[3].dataset.available;

    if (age < 18) table.rows[r].style.textDecoration = 'line-through';

    if (gender == 'm') {
      table.rows[r].classList.add('male');
    } else if (gender == 'f') {
      table.rows[r].classList.add('female');
    }

    if (status == 'true') {
      table.rows[r].classList.add('available');
    } else if (status == 'false') {
      table.rows[r].classList.add('unavailable');
    } else {
      table.rows[r].setAttribute('hidden',true);
    }

  }
  
}