// QR-Code Generator
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'urlName',
            message: 'Enter Name of URL:',
        },
        {
            type: 'input',
            name: 'url',
            message: 'Enter URL here:',
        },
    ])

    .then((answers) => {
        console.log(`You entered: ${answers.url}`);
        const folderName = 'qr-code-images';

        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }

        const qr_svg = qr.image(answers.url, { type: 'png' });
        qr_svg.pipe(fs.createWriteStream(`${folderName}/${answers.urlName}.png`));


        fs.appendFile('urls.txt', `${answers.urlName}: ${answers.url}\n`, (err) => {
            if (err) throw err;
            console.log('The URL has been saved!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment.");
        } else {
            console.error('Something else went wrong:', error);
        }
    });


