const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{

	res.send('GET Route on THE MAIN..')
})

router.post('/',(req,res)=>{

	res.send('POST Route on THE MAIN..')
})


module.exports = router;