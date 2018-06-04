const mongoose 	= require('mongoose');
const Schema 	= mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
        require: true
	}
});

mongoose.model('User', UserSchema);

mongoose.connect('mongodb://localhost:27017/user_demo', (err) => {
	if (err) {
		console.log(err);
		process.exit(-1);
	}
	console.log('Connected to the DB');
});

module.exports = mongoose;