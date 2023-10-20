const { count, time } = require('console');
const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();
const port = 5000;

//connect to database
const config = require("./src/config/config.json")
const {Sequelize, QueryTypes} = require("sequelize")
const sequelize = new Sequelize(config.development)
// console.log(config.development);

//connect to hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/view'));


//set stastic file server
app.use(express.static('src/assets'));

// parsing data from client
app.use(express.urlencoded({ extended: false }));

//routing
app.get('/home', home);
app.get('/upload-project', project);
app.post('/upload-project', submit);
app.get('/delete-project/:id', hapus);
app.get('/testimonial', testi);
app.get('/contact', contact);
app.get('/detail-post/:id', post);

//local server
app.listen(port, () => {
    console.log('server running on port 5000');
});

//data dummy
// const projects = [
//     {
//         id: 0,
//         title: 'Bahasa pemograman terebaru , yang akan bumming di masa depan',
//         startDate: '2023-11-17',
//         enddate: '2026-08-26',
//         author: 'Arkanul Adelis',
//         Description:
//             "Some quick example text to build on the card title and make up the bulk of the card's content",
//         Technologies: ['node-js', 'golang', 'react', 'java'],
//     },
//     {
//         id: 1,
//         title: 'Bahasa pemograman terebaru , yang akan bumming di masa depan',
//         startDate: '2023-11-17',
//         enddate: '2026-08-26',
//         author: 'Arkanul Adelis',
//         Description:
//             "Some quick example text to build on the card title and make up the bulk of the card's content",
//         Technologies: ['node-js', 'golang', 'react', 'java'],
//     },
//     {
//         id: 1,
//         title: 'Bahasa pemograman terebaru , yang akan bumming di masa depan',
//         startDate: '2023-11-17',
//         enddate: '2026-08-26',
//         author: 'Arkanul Adelis',
//         Description:
//             "Some quick example text to build on the card title and make up the bulk of the card's content",
//         Technologies: ['node-js', 'golang', 'react', 'java'],
//     },
//     {
//         id: 1,
//         title: 'Bahasa pemograman terebaru , yang akan bumming di masa depan',
//         startDate: '2023-11-17',
//         enddate: '2026-08-26',
//         author: 'Arkanul Adelis',
//         Description:
//             "Some quick example text to build on the card title and make up the bulk of the card's content",
//         Technologies: ['node-js', 'golang', 'react', 'java'],
//     },
//     {
//         id: 1,
//         title: 'Bahasa pemograman terebaru , yang akan bumming di masa depan',
//         startDate: '2023-11-17',
//         enddate: '2026-08-26',
//         author: 'Arkanul Adelis',
//         Description:
//             "Some quick example text to build on the card title and make up the bulk of the card's content",
//         Technologies: ['node-js', 'golang', 'react', 'java'],
//     },
//     {
//         id: 1,
//         title: 'Bahasa pemograman terebaru , yang akan bumming di masa depan',
//         startDate: '2023-11-17',
//         enddate: '2026-08-26',
//         author: 'Arkanul Adelis',
//         Description:
//             "Some quick example text to build on the card title and make up the bulk of the card's content",
//         Technologies: ['node-js', 'golang', 'react', 'java'],
//     },
//     {
//         id: 1,
//         title: 'Bahasa pemograman terebaru , yang akan bumming di masa depan',
//         startDate: '2023-11-17',
//         enddate: '2026-08-26',
//         author: 'Arkanul Adelis',
//         Description:
//             "Some quick example text to build on the card title and make up the bulk of the card's content",
//         Technologies: ['node-js', 'golang', 'react', 'java'],
//     },
//     {
//         id: 1,
//         title: 'Bahasa pemograman terebaru , yang akan bumming di masa depan',
//         startDate: '2023-11-17',
//         enddate: '2026-08-26',
//         author: 'Arkanul Adelis',
//         Description:
//             "Some quick example text to build on the card title and make up the bulk of the card's content",
//         Technologies: ['node-js', 'golang', 'react', 'java'],
//     },
// ];
async function home(req, res) { 
    try{
        const query = `SELECT id, title, start_date, end_date, description, technologies, image, author "createdAt" FROM Projects`
        let obj = await sequelize.query(query, { type: QueryTypes.SELECT})

        console.log(obj);
        res.render('index', { projects });
    }catch(err) {
        console.log(err);
    }
    
}


function project(req, res) {
    res.render('upload-project');
}
function testi(req, res) {
    res.render('testimonial');
}
function contact(req, res) {
    res.render('kontak');
}
function post(req, res) {
    const { id } = req.params;
    let project = projects[id]
    console.log(id);
    let startDateValue = new Date(project.startDate);
    let endDateValue = new Date(project.enddate);

    let durasiWaktu = endDateValue.getTime() - startDateValue.getTime();
    let durasiHari = durasiWaktu / (1000 * 3600 * 24);
    let durasiMinggu = Math.floor(durasiHari / 7);
    let durasiBulan = Math.floor(durasiHari / 30);
    let durasiProject = '';

    if (durasiHari <= 6) {
        durasiProject = 'Durasi' + ' ' + durasiHari + ' ' + 'Hari';
    } else if (durasiMinggu <= 3) {
        durasiProject = 'Durasi' + ' ' + durasiMinggu + ' ' + 'Minggu';
    } else if (durasiBulan >= 1) {
        durasiProject = 'Durasi' + ' ' + durasiBulan + ' ' + 'Bulan';
    }

    project = { ...project, durasiProject };

    console.log('project === ', project);
    res.render('project-detail', { project });
}

function submit(req, res) {
    console.log(req.body);
    let {
        title: title,
        startDate: startDate,
        enddate: endDate,
        Technologies: Technologies,
        Description: Description,
    } = req.body;
    console.log();
    console.log('title', 'startDate', 'endDate', 'Technologies', 'Description');

    //durasi
    let startDateValue = new Date(startDate);
    let endDateValue = new Date(endDate);

    let durasiWaktu = endDateValue.getTime() - startDateValue.getTime();
    let durasiHari = durasiWaktu / (1000 * 3600 * 24);
    let durasiMinggu = Math.floor(durasiHari / 7);
    let durasiBulan = Math.floor(durasiHari / 30);
    let durasiProject = '';

    if (durasiHari <= 6) {
        durasiProject = 'Durasi' + ' ' + durasiHari + ' ' + 'Hari';
    } else if (durasiMinggu <= 3) {
        durasiProject = 'Durasi' + ' ' + durasiMinggu + ' ' + 'Minggu';
    } else if (durasiBulan >= 1) {
        durasiProject = 'Durasi' + ' ' + durasiBulan + ' ' + 'Bulan';
    }

    const data = {
        id: projects.length + 1,
        title,
        startDate,
        endDate,
        durasiProject,
        Description,
        Technologies,
        postAt: new Date(),
        author: 'Arkanul Adelis',
    };

    projects.unshift(data);
    console.log(projects);
    console.log(req.body);

    res.redirect('/home');
}

function hapus(req, res) {
    const { id } = req.params;
    projects.splice(id, 1);
    res.redirect('/home');
    console.log(id);
}

function formatTanngal(dateString) {
    const dateObj = new Date(dateString);
    const formattedDate =
        dateObj.getFullYear() +
        '-' +
        (dateObj.getMonth() + 1).toString().padStart(2, '0') +
        '-' +
        dateObj.getDate().toString().padStart(2, '0');

    return formattedDate;
}

//edit projet
app.get('/project/edit/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    let blog = projects[id]

    // destructuring
    blog = {
        ...blog,
        startDate: formatTanngal(blog.startDate),
        enddate: formatTanngal(blog.enddate),
    };

    // 17 August 2023
    // YYYY-MM-DD
    // 2023-11-17

    console.log(blog);

    res.render('edit-project', {
        layout: 'edit-project',
        active: { Blog: true },
        blog,
    });
});
