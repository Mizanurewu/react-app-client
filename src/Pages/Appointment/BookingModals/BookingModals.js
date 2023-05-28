import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModals = ({ treatment, selectedDate, setTreatment,refetch }) => {
    const { name: treatmentName, slots, price} = treatment;
    const { user } = useContext(AuthContext);
    const date = format(selectedDate, 'PP');
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }

        fetch('https://doctors-portal-server-git-main-mizanurewu-gmailcom.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else{
                    toast.error(data.message)
                }
            })

        console.log(booking);

        // TODO: send data to server and save
        // close modal and show successfull tast

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <Form onSubmit={handleBooking} className='grid gap-7 grid-cols-1 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, index) => <option key={index} value={slot} >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full " />
                        <input name="email" type="text" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full " />
                        <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full " />
                        <input className='btn btn-accent w-full' type="submit" value="submit" />
                    </Form>
                </div>
            </div>

        </>
    );
};

export default BookingModals;