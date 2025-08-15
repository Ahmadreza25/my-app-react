const PageCreateAccount = () => {
  return (
    <div>
      <div className="w-[100%] h-[1300px] flex items-center justify-center mt-[50px]">
        <div className="flex items-center justfy-center flex-col">
          <div className="text-center">
            <h2 className="font-[700] text-[25px]">Create an account</h2>
            <p className="text-[17px] font-[700] text-slate-600 mt-[20px]">
              Starbucks® Rewards
            </p>
            <p className="w-[550px] text-slate-600 mt-[20px]">
              Join Starbucks Rewards to earn Stars for free food and drinks, any
              way you pay. Get access to mobile ordering, a birthday Reward, and
              moremore.
            </p>
          </div>
          <div className="w-[550px] h-[1100px] shadow-[0_0_8px_2px_rgba(0,0,0,0.2)] mt-[50px] rounded-[10px] flex items-center justify-center flex-col">
            <div className="w-[450px] h-[1050px]">
              <p>* indicates required field</p>
              <div className="mt-[50px]">
                <h2 className="font-[700] text-[18px]">Personal Information</h2>
                <div className="mt-[20px]">
                  <p>
                    First name<span>*</span>
                  </p>
                  <input
                    type="text"
                    className="w-[400px] h-[50px] border-2 border-slate-700 rounded-[10px]"
                  />
                </div>
                <div className="mt-[20px]">
                  <p>Last name</p>
                  <input
                    type="text"
                    className="w-[400px] h-[50px] border-2 border-slate-700 rounded-[10px]"
                  />
                </div>
              </div>
              <div className="mt-[50px]">
                <h2 className="font-[700] text-[18px]">Account Security</h2>
                <div className="mt-[20px]">
                  <p>
                    Email address<span>*</span>
                  </p>
                  <input
                    type="text"
                    className="w-[400px] h-[50px] border-2 border-slate-700 rounded-[10px]"
                  />
                  <p>This will be your username</p>
                </div>
                <div className="mt-[20px]">
                  <p>Password</p>
                  <input
                    type="text"
                    className="w-[400px] h-[50px] border-2 border-slate-700 rounded-[10px]"
                  />
                  <p className="w-[350px]">
                    Create a password 8 to 25 characters long that includes at
                    least 1 uppercase and 1 lowercase letter, 1 number and 1
                    special character like an exclamation point or asterisk.
                  </p>
                </div>
              </div>
              <div className="mt-[30px]">
                <p className="mt-[20px] font-[600] text-[17px] text-green-700 border-b-2 border-green-700 w-[300px]">
                  Already have a Starbucks gift card?
                </p>
                <p className="text-slate-600 mt-[20px]">
                  Collect more Stars & Earn Rewards
                </p>
                <p className="mt-[20px]">
                  Email is a great way to know about offers and what’s new from
                  Starbucks.
                </p>
                <div className="flex items-center mt-[30px]">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-[30px] h-[30px]"
                  />
                  <p className="ml-[20px]">
                    Yes, I’d like email from Starbucks
                  </p>
                </div>
              </div>
              <div className="ml-[230px] mt-[30px]">
              <button className="w-[160px] h-[50px] text-slate-50 bg-green-700 text-[18px] font-[700] rounded-[50px]">
              Create account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCreateAccount;
