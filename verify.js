/* This relatively simple script loads the JSONP file
 * from disk and attempts to verify the JSON. */

var fs = require('fs');

// Read the file's contents and attempt to extract the JSON from it.
fs.readFile('comments.jsonp', 'utf8', function(err, data) {
    
    // First make sure the file exists.
    if(err) throw err;
    
    // Extract the JSON from it.
    var json = data.match(/^callback\(([\S\s]*)\)\s*$/);
    if(json === null) throw 'JSONP is malformed - unable to extract JSON data';
    json = JSON.parse(json[1]);
    
    // Verify the JSON data.
    for(var i=0;i<json.length;++i) {
        if(!'name'        in json[i]) throw '"name" is missing from element';
        if(!'description' in json[i]) throw '"description" is missing from element';
    }
});