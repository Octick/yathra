exports.getData = async (req, res) => {
    try{
        res.status(200).json({
            message: "success"
        });
    } catch(err){
        res.status(404).json({
            message: "Error"
        })
    }
}

exports.postData = async (req, res) => {
    try{
        let testData = req.body.testData;
        res.status(200).json({
            message: testData
        });
    } catch(err){
        res.status(404).json({
            message: "Error"
        })
    }
}