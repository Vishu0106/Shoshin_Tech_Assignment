import { Link } from "react-router-dom";
import Layout from "../components/Layout";
function Schedule() {
    return (
        <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 md:ml-16 lg:ml-64 mt-16 p-4">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Disclaimer: This Section is Not Part of My Assignment
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 animate-fadeIn mb-4">
              This is Vishnu Vardhan Kattameedi
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 animate-fadeIn mb-4">
              Email:
              <span className="font-bold text-black"> kattameedivishnu2003@gmail.com</span>
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 animate-fadeIn mb-4">
              Phone:
              <span className="font-bold text-black"> +91 9542614017</span>
            </h1>
            <div className="bg-gray-400 border border-orange-400 flex items-center justify-center p-6 sm:p-8 md:p-10 rounded-lg max-w-md mx-auto">
              <p className="text-sm sm:text-base">
                Hoping that you liked and identified the work that I have done. I am looking forward to working with <span className="text-orange-600 font-bold">Team of Shoshin Tech.</span>
              </p>
            </div>
            <div className="mb-4 mt-4">
              <Link to="https://github.com/Vishu0106" className="group">
                <button className="px-4 sm:px-6 py-2 text-black bg-orange-600 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 rounded-md">
                  View My Github
                </button>
              </Link>
            </div>
            <Link to="/" className="group">
              <button className="px-4 sm:px-6 py-2 text-slate-900 bg-[#f08651] hover:bg-[#f67337] focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 rounded-md">
                Back to Home Page
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    )
}

export default Schedule;