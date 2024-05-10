import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Button, Checkbox, FileInput, Label, Radio } from 'flowbite-react'
import { addEmployee } from '../services/AllApi'
import { useNavigate } from 'react-router-dom'

function CreateEmployee() {

  const navigate=useNavigate()

  // state for holding normal inputs
  const [normalUserInput, setNormalUserInput] = useState({
    f_Name: "",
    f_Email: "",
    f_Mobile: "",
    f_Gender: "",
    f_Course: ""
  })

  // state for holding designation
  const [f_Designation, setf_Designation] = useState("")

  // state for holding image
  const [f_Image, setf_Image] = useState("")

  //create a State for previewing the image
  const [preview, setPreview] = useState("")

  // Define normal input function.
  const getandsetNormalInputs = (e) => {
    const { name, value } = e.target

    // using rest operator
    setNormalUserInput({ ...normalUserInput, [name]: value })
  }

  // function to handle image
  const handlefile = (e) => {
    setf_Image(e.target.files[0])
  }

  // Function to handle checkbox change
  const handleCheckboxChange = (value) => {
    setNormalUserInput({
      ...normalUserInput,
      f_Course: value
    });
  };

  useEffect(() => {

    if (f_Image) {
      URL.createObjectURL(f_Image)
      setPreview(URL.createObjectURL(f_Image))
    }

  }, [f_Image])

  // submit function
  const handleSubmit=async(e)=>{
    e.preventDefault()

    const{f_Name,f_Email,f_Mobile,f_Gender,f_Course}=normalUserInput

    if(!f_Name || !f_Email || !f_Mobile || !f_Designation || !f_Gender || !f_Course || !f_Image){
      alert("please fill the form completely")
    }else{
      // alert("form filled completely")

      // create form data
      const data= new FormData()
      data.append("f_Name",f_Name)
      data.append("f_Email",f_Email)
      data.append("f_Mobile",f_Mobile)
      data.append("f_Designation",f_Designation)
      data.append("f_Gender",f_Gender)
      data.append("f_Course",f_Course)
      data.append("f_Image",f_Image)

      // headers
      const headers={
        "content-type": "multipart/form-data"
      }

      // api call
      const response=await addEmployee(data,headers)

      // console.log(response);

      if(response.status==200){
        setNormalUserInput({
          ...normalUserInput,
          f_Name:"",
          f_Email:"",
          f_Mobile:"",
          f_Gender:"",
          f_Course:""
        })

        setf_Designation("")
        setf_Image("")
        navigate('/employee-list')
      }
    }
  }


  return (
    <div>
      <NavBar />

      <div className='xl:p-16 p-6 flex justify-center items-center'>


        <form >
          <h2 className='font-medium pb-5 text-4xl text-center'>Create Employee </h2>
          <div className='border p-3 rounded shadow-md md:p-10'>
            <div className="avatar flex justify-center pb-8">
              <div className="mask mask-squircle w-20 h-20 ">
                <img src={preview ? preview : "https://imgs.search.brave.com/s_11gCa04BgjwM6z5Mlo6svAbXyqeFYZwKvQIJh4uIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy85ODU0OTgtMjAw/LnBuZw"} alt="No Image" />
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">

              {/* Name */}
              <div>
                <label for="name" className="mb-2 text-sm font-medium text-gray-900">Full Name</label>
                <input type="text" id="name" name='f_Name' onChange={e => getandsetNormalInputs(e)} value={normalUserInput.value}
                  className="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-black  w-full p-2.5"
                  placeholder="Enter your name" required="" formControlName="name" />
              </div>

              {/* Email */}
              <div>
                <label for="email" className="mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="text" id="email" name='f_Email' onChange={e => getandsetNormalInputs(e)} value={normalUserInput.value}
                  className="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-black  w-full p-2.5"
                  placeholder="Enter your email" required="" formControlName="email" />
              </div>

              {/* Mobile No */}
              <div>
                <label for="mobile" className="mb-2 text-sm font-medium text-gray-900">Mobile No</label>
                <input type="text" id="mobile" name='f_Mobile' onChange={e => getandsetNormalInputs(e)} value={normalUserInput.value}
                  className="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-black  w-full p-2.5"
                  placeholder="Enter your mobile number" required="" formControlName="mobile" />
              </div>

              {/* Designation */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  <div className="label">
                    <span className="label-text font-medium">Designation</span>
                  </div>
                  <select onChange={e => setf_Designation(e.target.value)} className="text-sm font-medium border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-black  w-full p-2.5">
                    <option disabled selected>Please Select</option>
                    <option>HR</option>
                    <option>Manager</option>
                    <option>Sales</option>
                  </select>
                </label>
              </div>

              {/* Gender */}
              <fieldset className="flex max-w-md flex-col gap-4">
                <legend className="mb-2 font-medium text-gray-900">Choose your gender</legend>
                <div className='flex gap-5'>
                  <div className="flex items-center gap-2">
                    <Radio name="f_Gender" value={"Male"} onChange={e => getandsetNormalInputs(e)} />
                    <Label htmlFor="united-state">Male</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio name="f_Gender" value={"Female"} onChange={e => getandsetNormalInputs(e)} />
                    <Label>Female</Label>
                  </div>
                </div>
              </fieldset>

              {/* Course */}
              <div className="max-w-md flex-col gap-4">
                <legend className=" font-medium text-gray-900 mb-2">Choose your course</legend>
                <div className='flex gap-5'>
                  <div className="flex items-center gap-2">
                    <Checkbox name='f_Course' value={"MCA"} onChange={() => handleCheckboxChange("MCA")}
                      checked={normalUserInput.f_Course === "MCA"} />
                    <Label>
                      MCA
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox name='f_Course' value={"BCA"} onChange={() => handleCheckboxChange("BCA")}
                      checked={normalUserInput.f_Course === "BCA"} />
                    <Label>BCA</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox name='f_Course' value={"BSC"} onChange={() => handleCheckboxChange("BSC")}
                      checked={normalUserInput.f_Course === "BSC"} />
                    <Label>BSC</Label>
                  </div>
                </div>
              </div>

            </div>

            {/* Image */}
            <div>
              <div className="mb-1 block">
                <Label htmlFor="file-upload" value="Upload image" />
              </div>
              <FileInput id="file-upload" name='f_Image' onChange={e => handlefile(e)} />
            </div>
            <Button onClick={e=>handleSubmit(e)} type='submit' className='mt-8 w-full' color="success">Submit</Button>
          </div>
        </form>


      </div>

    </div>
  )
}

export default CreateEmployee