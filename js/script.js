
console.log('script initial call');
//interpretVerbes();
//writeInFile();
fillAll();

function cleanMainDiv() {
	var targetElem = document.getElementById("mainDiv");
	div.targetElem.removeChild(targetElem);
  //targetElem.innerHTML += "";
}

 function insertHtml(selector, html) {
 	console.log("insertHTML")
 	console.log(html)
  var targetElem = document.getElementById("mainDiv");
  targetElem.innerHTML += html;
};

function createLines(vals){
	console.log("createLines")
	console.log(vals)
	var vale = ""
	for(const elt of vals){
  vale += '<tr><td>'+elt[0]+'</td><td>'+elt[1]+'</td></tr>';
}
return vale
}

function injectTableau(title,id,values0) {
	console.log("injectTableau")
	console.log(values0)
	//insertHtml("custom","<p>mon texte</p>")

insertHtml("custom",'<section class=\"row font\">  \
  <div class=\"recipe col-lg-2 col-md-6 col-sd-12\">\
    <head class=\"contour\">' + title +'</head>\
    <table border=1 id='+id+'\">\
       <tr>\
        <th>Français</td>\
        <th>Pinyin</th>\
    </tr>\
    '+ createLines(values0) + 
'</tr>\
</table>\
</div>\
</section>');
}


function fillAll(){
	//injectTableau("MyTableau","myTableau",getAdjectifs());
	injectTableau("Expressions","expressions",getIdioms());
	injectTableau("Sujets","sujets",getSujets());
	injectTableau("Verbes","verbes",getVerbes());
	injectTableau("Politesses","politesse",getPolitesses());
	injectTableau("Noms","noms",getNoms());
	injectTableau("Ajectifs","ajectifs",getAdjectifs());
	injectTableau("Prepositions","prepositions",getPrepositions());
	injectTableau("Couleurs","couleurs",getCouleurs());
	injectTableau("Corps","corps",getCorps());

}

function cleanAndFill(){
	cleanMainDiv();
	fillAll();
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
	console.log(addRow2);
	console.log(tableId,col1,col2);
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