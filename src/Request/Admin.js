import axios from 'axios';

export const getApplicantDetails = async () => {
    try {
        // Sending a GET request with 'application/json' header
        const response = await axios.get('https://ec35-112-134-213-205.ngrok-free.app/applicant', {
            headers: {
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "69420"  // Use only when using ngrok

            }
        });

        // Parse the response data (already in JSON format)
        const applicantData = response.data;
        console.log(response.data);
        
        // Return the parsed applicant data
        return applicantData;
    } catch (error) {
        console.error('Error fetching applicant details:', error);
        // Handle the error appropriately
    }
};
