import { useState } from "react"



const Search = () => {
    const [formData, setFormData] = useState({
        search: "",
    
      });
      const [error, setError] = useState("field required");
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match!");
          return;
        }
        setError("");
        alert("Registration Successful!");
        console.log("Form Data: ", formData);
        // Add your integration logic here
      };
    
  return (
    <div>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Search</h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {error}
          </div>
        )}

        <div className="mb-4">
          
          <input
            type="text"
            name="search"
            value={formData.email}
            onChange={handleChange}
            size={20}
            required
            className="w-full p-3 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="button flex w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>
    </div>
    </div>
  )
}

export default Search
