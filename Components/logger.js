
const usageTrack = (req,res,next)=>{
	console.warn(`

		CPU USAGE : ${JSON.stringify(process.cpuUsage())}

	`);

	next();
}

const accessTime = (req,res,next)=>{
	console.info(Date.now())

	next();
}



module.exports.usageLogs = usageTrack;
module.exports.accessTime = accessTime;