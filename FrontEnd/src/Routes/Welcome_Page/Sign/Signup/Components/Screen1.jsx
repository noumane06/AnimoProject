import React from 'react' ;
const Screen1 = ({handlesubmit,handlechange,state})=>{

    return(
        <div className="menu">
                <title>Sign up | Animo</title>
                <h1>Sign up</h1>
                <div className="third_paties_Container">
                  <i className="fab fa-facebook-f iconf fa-lg"></i>
                  <button className="fb_submit" type="submit">
                    Sign up with facebook
                  </button>
                </div>
                <div className="third_paties_Container">
                  <i className="fab fa-google icong fa-lg"></i>
                  <button className="gl_submit" type="submit">
                    Sign up with google
                  </button>
                </div>
                <br />

                <p className="span">Or use your email</p>

                <form onSubmit={handlesubmit} method="post">
                  <label>First name : </label>
                  <div className="inputs">
                    <i className="fa fa-user icon"></i>
                    <input
                      className="field "
                      placeholder="Ex : mohammed"
                      onChange={handlechange}
                      required
                      type="text"
                      value={state.firstname}
                      id="firstname"
                    />
                    <br />
                  </div>
                  
                  <label>Last name : </label>
                  <div className="inputs">
                    <i className="fa fa-user icon"></i>
                    <input
                      placeholder="Ex : bencharqroun"
                      className="field "
                      onChange={handlechange}
                      value={state.lastname}
                      required
                      type="text"
                      id="lastname"
                    />
                    <br />
                  </div>
                  
                  <label>username : </label>
                  <div className="inputs">
                    <i className="fa fa-id-card icon"></i>
                    <input
                      placeholder="Ex : mohammed006"
                      className="field "
                      onChange={handlechange}
                      value={state.username}
                      required
                      type="text"
                      id="username"
                    />
                    <br />
                  </div>
                  
                  <label>Email : </label>
                  <div className="inputs">
                    <i className="fa fa-envelope icon"></i>
                    <input
                      className="field "
                      onChange={handlechange}
                      placeholder="Enter a valid email , you'll be ask to verify it later"
                      value={state.email}
                      required
                      type="email"
                      id="email"
                    />
                    <br />
                  </div>
                  <div className={state.isValid ? "val" : "inv_msg"}>
                    <i className="fa fa-close"></i>
                    <p>email already exist</p>
                  </div>
                  <div className={state.emailState ? "val" : "inv_msg"}>
                    <i className="fa fa-close"></i>
                    <p>You have entered an invalid email address!</p>
                  </div>
                  <label>Password : </label>
                  <div className="inputs">
                    <i className="fa fa-lock icon"></i>
                    <input
                      className="field "
                      onChange={handlechange}
                      value={state.password}
                      required
                      type="password"
                      id="password"
                    />
                    <br />
                  </div>
                  <div className="gender">
                      <label>Gender : </label>
                      <div className="radio one">
                        <input type="radio" id="gender" name="gender" value="male" onChange={handlechange} checked={state.gender === "male"}/>
                        <label style={{fontWeight : "normal"}}>Male</label>
                      </div>
                      <div className="radio two">
                      <input type="radio" id="gender" value="female" onChange={handlechange} checked={state.gender === "female"}/>
                      <label style={{ fontWeight: "normal" }}>Female</label>
                      </div>
                  </div>
                      
                  <div className="submitContainer">
                    <button
                      type="submit"
                      className={state.isLoading  ? "loading" : "Submitbutton"}
                      disabled={state.isLoading}
                      style={{ textAlign: "center" }}
                    >
                      {state.isLoading ? "Loading..." : "Sign Up"}
                    </button>
                    <br />
                    <span className="descr">Already have an account ?</span>
                    <br />
                    <a href="/account/signin">Sign in now</a>
                  </div>
                </form>
              </div>
    )
}
export default Screen1;