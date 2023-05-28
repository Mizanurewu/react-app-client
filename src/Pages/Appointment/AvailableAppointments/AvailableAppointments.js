import { format } from 'date-fns';
import React, {  useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading.js';
import BookingModals from '../BookingModals/BookingModals';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);//appointment name and slots

    const date=format(selectedDate,'PP');

    const {data:appointmentOptions=[],refetch, isLoading}=useQuery({//we dont want to use isLoading thats why we use =[]

        queryKey:['appointmentOptions',date],
        queryFn:()=>fetch(`https://doctors-portal-server-git-main-mizanurewu-gmailcom.vercel.app/appointmentOptions?date=${date}`)
        .then(res => res.json())
    });

    // useEffect(() => {
    //     fetch('https://doctors-portal-server-git-main-mizanurewu-gmailcom.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data));

    // }, [])
    if(isLoading){
        <Loading></Loading>
    }
    return (
        <section className='mt-16'>
            <p className='text-secondary text-2xl font-bold text-center'>You have selected :{format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment && //jodi treatment er man thake tahole dekhabo , noyto error khabo
                <BookingModals
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModals>
            }
        </section>
    );
};

export default AvailableAppointments;