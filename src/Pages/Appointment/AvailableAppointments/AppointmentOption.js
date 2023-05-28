import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots, price } = appointmentOption;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(user);
    return (
        <div className="card shadow-xl mt-10">
            <div className="card-body text-center">
                <h2 className="text-center text-secondary text-2xl font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p>{slots.length}{slots.length > 1 ? ' spaces' : ' space'} available</p>
                <p><small>Price $ {price}</small></p>
                {/* {
                    user && user.email && <p className="text-success">You are logged in</p>
                } */}
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}// disabled booking button when slot is 0
                        htmlFor="booking-modal"
                        onClick={() => {
                            !user && navigate('/login')
                            setTreatment(appointmentOption);
                        }}
                        className="btn btn-primary text-white"
                    >Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;