import React from 'react'
import NavBar from './NavBar'
import { Button, Checkbox, FileInput, Label, Radio } from 'flowbite-react'

function CreateEmployee() {
  return (
    <div>
      <NavBar />

      <div className='xl:p-16 p-6 flex justify-center items-center'>


        <form >
          <h2 className='font-medium pb-5 text-4xl text-center'>Create Employee </h2>
          <div className='border p-3 rounded shadow-md md:p-10'>
            <div className="avatar flex justify-center pb-8">
              <div className="mask mask-squircle w-20 h-20 ">
                <img src="https://imgs.search.brave.com/s_11gCa04BgjwM6z5Mlo6svAbXyqeFYZwKvQIJh4uIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy85ODU0OTgtMjAw/LnBuZw" alt="No Image" />
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">

              {/* Name */}
              <div>
                <label for="name" className="mb-2 text-sm font-medium text-gray-900">Full Name</label>
                <input type="text" id="name"
                  className="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-black  w-full p-2.5"
                  placeholder="Enter your name" required="" formControlName="name" />
              </div>

              {/* Email */}
              <div>
                <label for="email" className="mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="text" id="email"
                  className="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-black  w-full p-2.5"
                  placeholder="Enter your email" required="" formControlName="email" />
              </div>

              {/* Mobile No */}
              <div>
                <label for="mobile" className="mb-2 text-sm font-medium text-gray-900">Mobile No</label>
                <input type="text" id="mobile"
                  className="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-black  w-full p-2.5"
                  placeholder="Enter your mobile number" required="" formControlName="mobile" />
              </div>

              {/* Designation */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  <div className="label">
                    <span className="label-text font-medium">Designation</span>
                  </div>
                  <select className="text-sm font-medium border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-black  w-full p-2.5">
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
                    <Radio name="gender" />
                    <Label htmlFor="united-state">Male</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio name="gender" />
                    <Label>Female</Label>
                  </div>
                </div>
              </fieldset>

              {/* Course */}
              <div className="max-w-md flex-col gap-4">
                <legend className=" font-medium text-gray-900 mb-2">Choose your course</legend>
                <div className='flex gap-5'>
                  <div className="flex items-center gap-2">
                    <Checkbox name='course' />
                    <Label>
                      MCA
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox name='course' />
                    <Label>BCA</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox name='course' />
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
              <FileInput id="file-upload" />
            </div>
            <Button className='mt-8 w-full' color="success">Submit</Button>
          </div>
        </form>


      </div>

    </div>
  )
}

export default CreateEmployee