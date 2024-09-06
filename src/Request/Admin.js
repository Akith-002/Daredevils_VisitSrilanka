import axios from 'axios';

export const getApplicantDetails = async () => {
    try {
        // Sending a GET request to the provided URL to retrieve applicant details
        const response = await axios.get('https://ec35-112-134-213-205.ngrok-free.app/applicant');

        // Parse the response data (already in JSON format)
        const applicantData = response.data;

        // Return the parsed applicant data
        return applicantData;
    } catch (error) {
        console.error('Error fetching applicant details:', error);
        // Handle the error appropriately
    }
};
