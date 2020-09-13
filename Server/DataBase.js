const { MongoClient, ObjectID } = require('mongodb')

const url = 'mongodb+srv://AlexanderR:HamsterGoHam2020!@hamsterwars0.hblqj.gcp.mongodb.net/HamsterGoHam?retryWrites=true&w=majority';
const dbName = 'HamsterGoHam';
const collectionName = 'Hamsters';

//functions to be called 
function getAllHamsters(callback) {
	get({}, callback)
}


// function deleteBoat(_id,callback){
// 	del(_id, callback)
// }

// function addBoat(reqestsBody,callback){
// 	addShip(reqestsBody, callback)
// }

//the functions called above
function get(filter, callback){
    MongoClient.connect(
		url,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if( error ) {
				callback('"connection problem"');
				return;  
			}
			const col = client.db(dbName).collection(collectionName);
			try {
				const cursor = await col.find(filter); //why is named cursor
				const array = await cursor.toArray()
				callback(array);

			} catch(error) {
				console.log('Query error: ' + error.message);
				callback('"ERROR!! Query error"');

			} finally {
				client.close();
			}
        }
		
	)
}

// function del(id, callback){
	
	
//     MongoClient.connect(
// 		url,
// 		{ useUnifiedTopology: true },
// 		async (error, client) => {
// 			if( error ) {
// 				callback('"connection problem"');
// 				return;  
// 			}
// 			const col = client.db(dbName).collection(collectionName);
// 			try {
// 				const result = await col.deleteOne( { "_id" : ObjectID(id) } );
// 				callback({
// 					result: result.result,
// 					ops: result.ops
// 				})
// 			} catch(error) {
// 				console.log('Query error: ' + error.message);
// 				callback('"ERROR!! Query error"');

// 			} finally {
// 				client.close();
// 			}
//         }
		
// 	)
// }

function search(query, callback) {
	console.log(query)
	const filter = {};
	if( query.name) {
		filter.name = { "$regex":query.name, $options: '-i'};
	}
	// if( query.order) {
	// 	filter.order = { $query: {}, $orderby: { price : 1 } }
	// }
	// if( query.maxprice) {
	// 	filter.price = {$lt: query.maxprice };
	// }
	// if(query.motorized === 'yes'){
	// 	filter.motorized = { $eq: query.motorized }
	// }
	// if(query.sail === 'yes'){
	// 	filter.sail = { $eq: query.sail }
	// }
	// if(query.madeafter){
		
	// 	filter.manifacturedYear  = { $gt: Number(query.madeafter) }
	// }
	// if(query.madebefore){
	// 	filter.manifacturedYear  = { $lt: Number(query.madebefore) }
	// }
	

	MongoClient.connect(
		url,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if( error ) {
				callback('"ERROR!! Could not connect"');
				return;  // exit the callback function
			}
			const col = client.db(dbName).collection(collectionName);
			try {
				console.log('what is the filter', filter)
				const cursor = await col.find(filter);
				const array = await cursor.toArray();
				
				callback(array);

			} catch(error) {
				console.log('Query error: ' + error.message);
				callback('"ERROR!! Query error"');

			} finally {
				client.close();
			}
		}// connect callback - async
	)//connect - async
}

// function addShip(reqestsBody, callback) {
// 	const doc = reqestsBody;
// 	MongoClient.connect(
// 		url,
// 		{ useUnifiedTopology: true},
// 		async (error, client) => {
// 			if( error ) {
// 				callback('"connection problem"');
// 				return;  
// 			}
// 			const col = client.db(dbName).collection(collectionName);
// 			try {
// 				const result = await col.insertOne(doc);
// 				callback({
// 					result: result.result,
// 					ops: result.ops
// 				})

// 			} catch(error) {
// 				console.error('addHat error: ' + error.message);
// 				callback('"ERROR!! Query error"');

// 			} finally {
// 				client.close();
// 			}
// 		}
// 	)
// }


module.exports = {
	getAllHamsters, search
}