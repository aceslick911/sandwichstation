/// <reference path="../types.d.ts" />

const parse = require("csv-parse");

const fs = require('fs');

function convertCSVToJSON(domain:string, version:string, inFile:string, outfile:string){
	var parser = parse({delimiter: ','}, function(err, data){
		var header=[];
		var jsonData=[];
		for(var row of data){
			if(header.length==0){
				for(var col of row){
					header.push(col);
				}
			} else {
				var i=0;
				var rowData={
					domain,
					version
				};
				for(var col of row){
					rowData[header[i]] = col;
					i++;
				}
				jsonData.push(rowData);
			}

		}
	  fs.writeFile(outfile, JSON.stringify(jsonData,null, 4));
	});

	fs.createReadStream(inFile).pipe(parser);
}

convertCSVToJSON("item","1",'./purchaseEvents.csv',"./purchaseEvents.json" );
convertCSVToJSON("item","1",'./consumeEvents.csv',"./consumeEvents.json" );
