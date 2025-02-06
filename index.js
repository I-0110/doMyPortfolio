import inquirer from 'inquirer'
import fs from 'fs'

inquirer.prompt([
    {
        message:'What is your name?',
        name: 'name'
    },
    {
        message:'Where are you located?',
        name: 'location'
    },
    {
        message:'Please write a brief bio here:',
        name: 'bio'
    },
    {
        message:'What is your LinkedIn URL?',
        name: 'LinkedIn'
    },
    {
        message:'What is your GitHub URL?',
        name: 'GitHub'
    },
])

.then((response) => {
    fs.writeFile(`./${response.name.toLowerCase()}.html`, generateHTML(response), (err) => { 
        if(err) {
            console.error(err)
        } else {
            console.log("Success!")
    }})}
);

function generateHTML(response){
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>${response.name}</title>
</head>
<body>
    <h1>${response.name}</h1>
    <h2>${response.location}</h2>
    <article>
        <h2>${response.LinkedIn}</h2>
        <h2>${response.GitHub}</h2>
        <p>${response.bio}</p>
    </article>
    <script src="index.js"></script>
</body>
</html>`
};

