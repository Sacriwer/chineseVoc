
console.log('script initial call');
//fillTable();
//interpretVerbes();
//writeInFile();
fillAll();

function displayHello(){
	console.log('hello');
}

function fillSujets(){
	fillTableGeneric("subject",getSujets());
}


function fillVerbes(){
	fillTableGeneric("verbes",getVerbes());
}

function fillNoms(){
	fillTableGeneric("noms",getNoms());
}

function fillAdjectifs(){
	fillTableGeneric("adjectifs",getAdjectifs());
}

function fillPrepositions(){
	fillTableGeneric("prepositions",getPrepositions());
}

function fillAll(){
	fillSujets()
	fillVerbes();
	fillNoms();
	fillAdjectifs();
	fillPrepositions();
}

function readMyFile(){
	console.log("readFile");
	var fr=new FileReader();
	console.log("file reader created");
	fr.readAsDataURL("../doc/verbes.json");

console.log("readFile end");

}

function readMyFile2(){
	console.log("readMyFile2");
}

/*function getVerbes(){
	const vb = [];
	vb.push(["a","b"]);
	vb.push(["c","d"]);
	return vb;
}*/

function interpretVerbes(){
	console.log("interpretVerbes");
	const vb = getVerbes();
	//vb.push(["a","b"]);
	//vb.push(["c","d"]);
	for (const element of vb) {
  console.log(element[0]);
}
	console.log(vb);

	//readMyFile();
}

function writeInFile(){
	// Requiring fs module in which
    // writeFile function is defined.
    const fs = require('fs');
      
    // Data which will write in a file.
    let data = "Learning how to write in a file."
      
    // Write data in 'Output.txt' .
    fs.writeFile('Output.txt', data, (err) => {
          
        // In case of a error throw err.
        if (err) throw err;
    })
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

addRow2('subject','Wô','Je');
	addRow2('subject','Nî/Nin','Tu');
	addRow2('subject','Ta','Il/Elle');
	addRow2('subject','Wômen','Nous');
	addRow2('subject','Nîmen','Vous');
	addRow2('subject','Tamen','Ils/Elles')

	console.log('fillTable end');

}

function fillTableGeneric(tableName, values0){
	console.log('fillTableGeneric');
	console.log(values0)
	//var targetElem = document.getElementById(tableName);
for(const elt of values0){
	console.log(elt[0]);
  addRow2(tableName,elt[1],elt[0]);
}
	console.log('fillTable end');
}