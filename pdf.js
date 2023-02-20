const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a new PDF document
const doc = new PDFDocument();

// Add image to the first page
doc.image('C:/Users/konya/Downloads/page4.png', { width: 550 });

// Add a new page to the PDF document
doc.addPage();

// Add image to the second page
doc.image('C:/Users/konya/Downloads/page5.png', { width: 500 });

// Add a new page to the PDF document
doc.addPage();

// Add image to the third page
doc.image('C:/Users/konya/Downloads/page6.png', { width: 550 });

// Add a new page to the PDF document
doc.addPage();

// Add image to the fourth page
doc.image('C:/Users/konya/Downloads/page7.png', { width: 550 });

// Add a new page to the PDF document
doc.addPage();

// Add image to the fifth page
doc.image('C:/Users/konya/Downloads/page8.png', { width: 550 });

// Add a new page to the PDF document
doc.addPage();

// Add image to the sixth page
doc.image('C:/Users/konya/Downloads/page9.png', { width: 550 });

doc.addPage();

// Add image to the sixth page
doc.image('C:/Users/konya/Downloads/page10.png', { width: 550 });

// Save the PDF file to disk
doc.pipe(fs.createWriteStream('output.pdf'));
console.log("pdf downloaded successfully");
doc.end();
