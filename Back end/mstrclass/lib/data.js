/*
*
* Library for toring and editing data
*
*
*/

// dependecies
var fs = require('fs');
var path = require('path');

// Container for the module to be exported 

var lib = {};

// Base directory of the data folder 

lib.baseDir = path.join(__dirname,'/../.data/');

// Write data to a file 

lib.create = function (dir,file,data,callback) {
    
    // Open file for writing 
    fs.open(lib.baseDir+dir+'/'+file+'.json','wx',function (err,fileDescriptor) {
        if(!err && fileDescriptor)
        {
            // convert data to a string 
            var stringData = JSON.stringify(data);

            // Write to file and close it 

            fs.writeFile(fileDescriptor, stringData, function (err) {
                if (!err) {
                    fs.close(fileDescriptor,function (err) {
                        if (!err) {
                            callback('file created succefully');
                        }else
                        {
                            callback('error while closing the file');
                        }
                    })
                }else{
                    callback('error in writing in the file ');
                }
            })
            }else
        {
            callback('could not create the new file , may already exist');
        }
    })
};
lib.read = function (dir,file,callback) {
    //Oppen the file for reading 
    fs.readFile(lib.baseDir+dir+'/'+file+'.json','utf-8',function (err,data) {
        callback(err,data);
    });
    
}
lib.update = function(dir,file,data,callback){

    // Open the file for writing
    fs.open(lib.baseDir+dir+'/'+file+'.json', 'r+', function(err, fileDescriptor){
      if(!err && fileDescriptor){
        // Convert data to string
        var stringData = JSON.stringify(data);
  
        // Truncate the file
        fs.truncate(fileDescriptor,function(err){
          if(!err){
            // Write to file and close it
            fs.writeFile(fileDescriptor, stringData,function(err){
              if(!err){
                fs.close(fileDescriptor,function(err){
                  if(!err){
                    callback(false);
                  } else {
                    callback('Error closing existing file');
                  }
                });
              } else {
                callback('Error writing to existing file');
              }
            });
          } else {
            callback('Error truncating file');
          }
        });
      } else {
        callback('Could not open file for updating, it may not exist yet');
      }
    });
  
  };
// Delete a file
lib.delete = function(dir,file,callback){

    // Unlink the file from the filesystem
    fs.unlink(lib.baseDir+dir+'/'+file+'.json', function(err){
      callback(err);
    });
  
  };
  
// Export the module 

module.exports = lib ; 
