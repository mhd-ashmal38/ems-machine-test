const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        let filename=`Image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

const filefilter = (req,file,callback) => {
    if(file.mimetype==="image/png"||file.mimetype==="image/jpg"||file.mimetype==="image/jpeg"){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error("Only jpg/jpeg/png files are allowed"))
    }
}

const multerConfig = multer({
    storage,
    filefilter
})

module.exports = multerConfig