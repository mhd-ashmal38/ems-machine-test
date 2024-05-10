const t_employees = require('../Modals/employeeSchema')

// add employee
exports.addEmployee = async (req, res) => {
    console.log('inside add emp');

    const { f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course } = req.body

    try {
        const preEmployee = await t_employees.findOne({ f_Email })

        if (preEmployee) {
            res.status(406).json("Employee already exist")
        } else {
            // Get the next available employeeId
            const lastEmployee = await t_employees.findOne().sort({ f_Id: -1 });
            let nextEmployeeId = lastEmployee ? lastEmployee.f_Id + 1 : 101;
            const currentDate = new Date(); // Get current date
            const newEmployee = new t_employees({
                f_Id: nextEmployeeId,
                f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course, f_Image: req.file.filename, f_Createdate: currentDate
            })

            // save data in mongodb
            await newEmployee.save()
            res.status(200).json(newEmployee)
        }
    } catch (err) {
        res.status(501).json("Error:" + err)
    }
}


// get employees
exports.getAllEmployees = async (req, res) => {

    // using query parameter
    const search = req.query.search

    const query = {
        f_Name: { $regex: search, $options: "i" }
    }

    try {
        const allEmployess = await t_employees.find(query)
        res.status(200).json(allEmployess)
    } catch (err) {
        res.status(406).json(err)
    }
}


// delete employee
exports.deleteEmployee = async (req, res) => {
    // req id
    const { id } = req.params

    try {
        const removeData = await t_employees.findByIdAndDelete({ _id: id })
        res.status(200).json(removeData)
    } catch (err) {
        res.status(401).json(err)
    }
}


// edit employee
exports.editEmployee = async (req, res) => {
    const { id } = req.params;
    const { f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course, f_Image } = req.body;
    const file = req.file ? req.file.filename : f_Image; // If no new image is uploaded, set file to null

    try {
        const updateEmployee = await t_employees.findByIdAndUpdate({_id:id},{
            f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course, f_Image: file
        }, { new: true });

        await updateEmployee.save()
        res.status(200).json(updateEmployee)

    } catch (err) {
        // Handle any errors that occur during the update process
        res.status(401).json(err)
    }
};