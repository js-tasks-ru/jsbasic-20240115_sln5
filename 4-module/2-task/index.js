function makeDiagonalRed(table) {

  for(let r = 0; r < table.rows.length; r++) {
    table.rows[r].cells[r].style.backgroundColor = 'red';
  }

}