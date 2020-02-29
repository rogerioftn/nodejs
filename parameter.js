const users = sequelize.define('users', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    email: Sequelize.STRING
});

app.post('/test', function (request, response) {
    return users.create({
        id: request.body.id,
        name: request.body.name,
        role: request.body.role,
        email: request.body.email
    }).then(function (users) {
        if (users) {
            response.send(users);
        } else {
            response.status(400).send('Error in insert new record');
        }
    });
});

app.listen(3001, function () {
    console.log('Express server is listening on port 3000');
});