const fs = require('fs');
const folderName = 'my_new_folder';

if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log('Folder created successfully');
} else {
    console.log('Folder already exists');
}
