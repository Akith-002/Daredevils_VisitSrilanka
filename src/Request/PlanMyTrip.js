import axios from 'axios';

export const planMyTrip = async (prompt) => {
    try {

        const reqBody = {
            "prompt": prompt,
        }
        const response = await axios.post('https://ec35-112-134-213-205.ngrok-free.app/question', reqBody);
        // finalData=JSON.parse(response.data);
        const finalData = JSON.parse(response.data.answer);
        return finalData;
    } catch (error) {
        console.error(error);
        // Handle the error here
    }
};


export const Directionsfetch = async (coordinates) => {
    try {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        const origin = `${coordinates[0].lat},${coordinates[0].lon}`;
        const destination = `${coordinates[coordinates.length - 1].lat},${coordinates[coordinates.length - 1].lon}`;
        const waypoints = coordinates.slice(1, coordinates.length - 1).map(coord => `${coord.lat},${coord.lon}`).join('|');
        const directionsUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&waypoints=${waypoints}&key=${apiKey}`;
        

        const response = await axios.get(directionsUrl);
        console.log(response.data); // Handle the directions data
        return response.data;
    } catch (error) {
        console.error('Error fetching directions:', error);

    }

}

