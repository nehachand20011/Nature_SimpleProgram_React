import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
     <div className="container-fluid mt-2 mb-2">
        <div className="row d-flex justify-content-center">
            <div className='col-md-6 shadow p-3'>
    <form>
    <div className="text-center">
      <img className="mb-4" src="https://th.bing.com/th/id/R.a4133da816a7ce938c467bc782d822b3?rik=HFXoVigXYi9FwA&pid=ImgRaw&r=0" alt="" width="72" height="57"/>
    </div>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <div className="form-floating">
        <input type="text" className="form-control" id="floatingInput" placeholder="first name"/>
        <label for="floatingInput">First name</label>
      </div>
      <div className="form-floating">
        <input type="text"className="form-control"placeholder="xyz" id="last name"></input>
        <label for="floatingInput">Last name</label>

      </div>

      <div className="form-floating">
        <input type="date"className="form-control"placeholder="xyz" id="dob"/>
        <label for="floatingInput">Date of Birth</label>

      </div>

      <div className="form-floating">
        <div className="form-control d-flex justify-content-evenly">
            <div className="radio-input">
                <input type="radio" id="male " className="me-1" name="gender"/><label for="male">Male</label>

            </div>
            <div className="radio-input">
                <input type="radio" id="female " className="me-1" name="gender"/><label for="male">Female</label>

            </div>
            <div className="radio-input">
                <input type="radio" id="other "className="me-1" name="gender"/><label for="male">Other</label>

            </div>
        </div>
        <label>Gender</label>

      </div>
      <div className="form-floating">
        <select name="" id="add" className="form-control">
            <option value="">Select Address</option>
            <option value=" ktm">Kathmandu</option>
            <option value=" dhn"> Dhandagi</option>
            <option value="pkr">Pokhara</option>


        </select>

      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="phone" placeholder="phone"/>
        <label for="phone"> Phone Number</label>

      </div>
  
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Password</label>

      </div>
  
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingCPassword" placeholder=" confirm Password"/>
        <label for="floatingCPassword"> Confirm Password</label>

      </div>
  
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
      </div>
       
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">sign up</button>
      do you have an account?
      <Link to="/login">login</Link>

      <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </form>
    </div>
        </div>
    </div>
    </>
  )
}

export default Signup