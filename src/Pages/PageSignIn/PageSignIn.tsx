const PageSignIn = () => {
  return (
    <div>
      <div className="w-[100%] h-[700px] flex items-center justify-center mt-[50px]">
        <div className="flex items-center justfy-center flex-col">
          <div>
            <h2 className="font-[700] text-[25px]">
              Sign in or create an account
            </h2>
          </div>
          <div className="w-[550px] h-[600px] shadow-[0_0_8px_2px_rgba(0,0,0,0.2)] mt-[50px] rounded-[10px] flex items-center justify-center flex-col">
            <div className="w-[500px] h-[550px]">
              <h2>* indicates required field</h2>
              <div className="mt-[50px]">
                <div>
                  <p>
                    UserName
                    <span className="text-green-700 font-[700] text-[20px]">
                      *
                    </span>
                  </p>
                  <input
                    type="text"
                    className="w-[450px] h-[50px] border-2 border-slate-700 rounded-[10px]"
                  />
                </div>
                <div className="mt-[30px]">
                  <p>
                    Password
                    <span className="text-green-700 font-[700] text-[20px]">
                      *
                    </span>
                  </p>
                  <input
                    type="text"
                    className="w-[450px] h-[50px] border-2 border-slate-700 rounded-[10px]"
                  />
                </div>
              </div>
              <div className="flex items-center mt-[30px]">
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-[30px] h-[30px] rounded-[10px]"
                  />
                </div>
                <div className="ml-[20px]">
                  <p>
                    Keep me signed in.
                    <span className="font-[700] text-[18px] text-green-700 border-b-2 border-green-700">
                      Details
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-[20px]">
                <p className="font-[700] text-[18px] text-green-700 border-b-2 border-green-700 w-[200px]">
                  Forgot your username?
                </p>
                <p className="font-[700] text-[18px] text-green-700 border-b-2 border-green-700 w-[200px] mt-[10px]">
                  Forgot your password?
                </p>
              </div>
              <div className="ml-[380px] mt-[50px]">
                <button className="w-[120px] h-[50px] text-slate-50 bg-green-700 text-[18px] font-[700] rounded-[50px]">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSignIn;
