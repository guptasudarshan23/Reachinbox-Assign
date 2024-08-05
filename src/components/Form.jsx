export default function Form(){
    return(
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-neutral-700 p-6 rounded-lg shadow-lg w-full max-w-md">
      <form>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email Address" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Password</label>
            <input type="password" className="w-full px-3 py-2 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Password" />
            <div className="flex justify-end mt-1">
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Sign In</button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-400">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a></p>
        </div>
      </div>
    </div>
    );
}