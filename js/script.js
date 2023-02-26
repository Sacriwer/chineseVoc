
console.log('script initial call');
fillTable();

function displayHello(){
	console.log('hello');
}

function addRow(tableId,col1,col2){
	var targetElem = document.getElementById(tableId);
	let newRow = targetElem.insertRow(-1);
	let newCell = newRow.insertCell(0);
	let newText = document.createTextNode(col1);
	newCell.appendChild(newText);
	let newCell2 = newRow.insertCell(1);
	let newText2 = document.createTextNode(col2);
	newCell.appendChild(newText2);
}

function addRow2(tableId,col1,col2){
	var targetElem = document.getElementById(tableId);
	let newRow = targetElem.insertRow(-1);
 // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

  // Append a text node to the cell
  let newText = document.createTextNode(col1);
  //let newText = document.createDocument('<tr><td>aaaa</td><td>bb</td></tr>');
  newCell.appendChild(newText);

  let newCell2 = newRow.insertCell(0);
let newText2 = document.createTextNode(col2);
newCell2.appendChild(newText2);


  console.log(targetElem)


}

function fillTable(){
	console.log('fillTable');
	var myHtmlContent = "<tr><td>aaaa</td><td>bb</td></tr>";
	var targetElem = document.getElementById('subject');

	addRow2('subject','Ta','Il/Elle');
	addRow2('subject','Wômen','Nous');
	addRow2('subject','Nîmen','Vous');
	addRow2('subject','Tamen','Ils/Elles')

	console.log('fillTable end');

}