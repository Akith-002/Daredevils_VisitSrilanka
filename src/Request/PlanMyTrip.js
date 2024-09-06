import axios from 'axios';

export const planMyTrip = async (prompt) => {
    try {
        const response = await axios.post('/api/plan-trip', tripData);
        console.log(response.data);
        // Handle the response data here
    } catch (error) {
        console.error(error);
        // Handle the error here
    }
};

