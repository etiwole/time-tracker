const express = require("express");
const cors = require("cors");
const sequelize = require("./database")
const Task = require("./Model/Task")

const corsOptions = {
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
}

sequelize.sync().then(() => {
    console.log('db is ready');
});

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.post('/tasks', async (req, res) => {
    if (JSON.stringify(req.body) === '{}') {
        res.status(400).send('body is empty');
    }

    await Task.create(req.body);
    res.send('task has been created');
})

app.get('/tasks', async (req, res) => {
    const tasks = await Task.findAll();
    res.send(tasks);
})

app.get('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Task.findOne({ where: { id }});

    if (!task) {
        res.status(404).send('task not found');
    }

    res.send(task)
})

app.put('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Task.findOne({where: {id}});
    Object.keys(req.body).forEach(k => {
        task[k] = req.body[k];
    })
    await task.save();
    res.send('task has been updated');
})

app.delete('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    await Task.destroy({where: { id }})
    res.send('task has been deleted')
})

app.listen(3001, () => {
    console.log('app is running');
})