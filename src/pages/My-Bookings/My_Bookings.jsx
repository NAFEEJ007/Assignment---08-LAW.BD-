import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredLawyer } from '../../Utilities/addToDB';
import BookedLawyer from '../../components/BookedLawyer/BookedLawyer';

const My_Bookings = () => {
    const data = useLoaderData();
    const [lawyerList, setLawyerList] = useState([]);
    // console.log(data)
    useEffect(() => {
        // console.log('use effect running')
        const storedLawyerData = getStoredLawyer();
        // console.log("Raw storedLawyerData:", storedLawyerData);
        // console.log("Data from loader:", data);
        const ConvertedStoredLawyers = storedLawyerData.map(id => parseInt(id));
        // console.log(ConvertedStoredLawyers);
        const LawyerBookingList = data.filter(lawyer => storedLawyerData.includes(lawyer.id));
        setLawyerList(LawyerBookingList)
    }, [])
    return (
        <div>
            <div className=' text-center '>
                <div className='text-4xl font-bold mt-8'><h1>My Todays Appointments</h1></div>

                <div className='text-base mt-6	text-[#0F0F0F] font-light mb-8'><p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p></div>
            </div>

            <div className='flex flex-col gap-2'>
            {
                lawyerList.map(l => <BookedLawyer l={l} key={l.id}></BookedLawyer>)
            }

            </div>


        </div>
    );
};

export default My_Bookings;