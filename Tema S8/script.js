
// Show and hide the individual grades container
let x = document.querySelector('#main_catalog');
let y = document.querySelector('#ins_catalog');

function showIns(s) {
  x.style.width = "50%";
  y.style.width = "50%";

  document.querySelector('#tabelNote').innerHTML = "";

  let idx = s.parentNode.parentNode.rowIndex;
  let nameIns = document.getElementById('tabelGeneral').rows[idx].cells[0].innerHTML;

  document.querySelector('#numeNota').innerHTML = "Nota student : " + nameIns;

}

function hideIns() {
  x.style.width = "100%";
  y.style.width = "0%";
}
// ---------------------------------------------


// Add student in the general catalog

let medie = "";


function addStudent() {

  if (document.getElementById('numeStudent').value === "") {
    alert("Ve rog introduceti numele studentului!");
  } else {
    let sName = document.getElementById('numeStudent').value;
    let x = document.getElementById('tabelGeneral').insertRow(-1);
    let y = x.insertCell(0);
    let z = x.insertCell(1);
    let t = x.insertCell(2);
    y.innerHTML = `${sName}`;
    z.innerHTML = `${medie}`;
    let idx = y.parentNode.rowIndex;
    t.innerHTML = `<button type="button" class="showMarksBtn" onclick="showIns(this);">Arata Notele</button>`

    document.getElementById('numeStudent').value = "";
  }
}

function addGrade() {
  if (document.getElementById('numeStudentIns').value === "") {
    alert("Ve rog introduceti nota studentului!");
  } else {
    let sNota = document.getElementById('numeStudentIns').value;
    let x = document.getElementById('tabelNote').insertRow(-1);
    let y = x.insertCell(0);
    y.innerHTML = `${sNota}`;

    document.getElementById('numeStudentIns').value = "";

    let table = document.getElementById("tabelNote");
    let rows = table.rows;
    let average = 0;
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      let cells = rows[i].cells;

      for (let x = 0; x < cells.length; x++) {
        let cell = cells[x];
        sum += parseInt(cell.innerHTML);
        average = sum / rows.length;
      }
      
    }
    console.log(average);
      
  }
}