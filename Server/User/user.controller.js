var mongoose    = require('../mongoose.config');
var UserSchema 	= mongoose.model('User');
var UserController = function() {

	this.add = function(userInstance) {
		return new Promise((resolve, reject) => {
			var user = new UserSchema({
                name: userInstance.name
            })
			user.save().then(() => {
				resolve({'status': 200, 'message':'added new user'});
			}).catch(err => {
				reject({'status': 404, 'message':'err:-'+err});
			})
		})
	}

	this.getAll = function() {
		return new Promise((resolve, reject) => {
			UserSchema.find().exec().then(data => {
                resolve({'status': 200, 'message':'get all data', 'data': data});
			}).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
			})
		})
	}

	this.getSingle = function(id) {
		return new Promise((resolve, reject) => {
			UserSchema.find({_id: id}).exec().then(data => {
                resolve({'status': 200, 'message':'get single data', 'data': data});
			}).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
		})
	}

	this.update = function(id, updateData) {
		return new Promise((resolve, reject) => {
			UserSchema.update({_id: id}, updateData).then(() => {
                resolve({'status': 200, 'message':'update user'});
			}).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
		})
	}

	this.delete = function(id) {
		return new Promise((resolve, reject) => {
			UserSchema.remove({_id: id}).then(() => {
                resolve({'status': 200, 'message':'delete user'});
			}).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
		})
	}

}

module.exports = new UserController();