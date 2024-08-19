import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { SiGooglecampaignmanager360 } from "react-icons/si";
import { useState } from "react";

const Dashboard = () => {
    const [images, setImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImages([...images, reader.result]);
            setIsModalOpen(false); // Close modal after upload
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="flex ">

            {/* dashboard side bar */}
            <div className="div w-1/3 md:w-64 min-h-screen bg-[#2A7CC7]">
                <ul className="menu p-3">

                    <li>
                        <NavLink to="/" className="md:text-xl font-bold text-white"><FaHome className="md:text-2xl text-xl " />Home</NavLink>
                    </li>
                    <li>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="md:text-xl font-bold flex items-center text-white"
                        >
                            <FaCloudUploadAlt className="md:text-2xl text-xl" />Add Photo
                        </button>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItems" className="md:text-xl font-bold text-white"> <SiGooglecampaignmanager360 className="md:text-2xl text-xl" /> Manage Items</NavLink>
                    </li>


                </ul>

            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">

                <h2 className="text-2xl text-center font-bold mb-4">Upload and Show All Images</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <img src="https://www.shutterstock.com/image-photo/blue-bird-ultramarine-flycatcher-superciliaris-600nw-508244377.jpg" alt="" className="border rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 mb-10 w-full h-[300px] md:h-[300px] lg:h-[500px]" />

                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Uploaded ${index}`} className="w-full h-[300px] md:h-[300px] lg:h-[500px]  rounded-md shadow-xl transition-transform duration-300 hover:scale-105" />
                    ))}
                </div>

                <Outlet></Outlet>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded shadow-lg">
                            <h3 className="text-xl mb-4">Upload a Photo</h3>
                            <input type="file" accept="image/*" onChange={handleImageUpload} />
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Dashboard;