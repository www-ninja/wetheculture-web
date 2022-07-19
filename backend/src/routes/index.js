import authRoute from './auth';
import contactRoute from './contact';
import userRoute from './user';
import memberRoute from './member';

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Welcome to backend API serivce!');
    })
    app.use('/auth', authRoute);
    app.use('/contact', contactRoute);
    app.use('/members', memberRoute);
    app.use('/users', userRoute);
};
