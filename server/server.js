const { app } = require('./app');
const { initModels } = require('./models/initModels');

// Utils
const { db } = require('./utils/database.util');


db.authenticate()
	.then(() => console.log('Db authenticated'))
	.catch(err => console.log(err));

// Establish model's relations
initModels();	

db.sync()
	.then(() => console.log('Db synced'))
	.catch(err => console.log(err));
	
	const PORT = process.env.PORT || 4000;
	const HOST = process.env.HOST;
app.listen(PORT,HOST,  () => {
	console.log('Express app running!! on port '+PORT +' on host '+HOST +' NODE: ' +process.env.NODE_ENV );
});
