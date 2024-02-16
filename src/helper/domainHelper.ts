//placeName var is here so testing can be possible
let placeName: string | undefined;

export const getPlaceName = ()=>{
    if (!placeName){
        // const domain = window.location.hostname;
        const domain = 'isplate.stankovci.hr';
        const pattern = /[ .,;-]+/;

        //old way of doing it, left just in case.
        // const firstWordLength = domain.substring(0, domain.indexOf('.')).length + 1; // +1 to include the dot
        // placeName = domain.substring(firstWordLength, domain.indexOf('.hr'));
        // const placeNameSegments = placeName.split(pattern);
        // placeName = placeNameSegments[placeNameSegments.length-1]

        const segments = domain.split('.');
        
        if (segments.length > 1) {
            const extractedString = segments[segments.length - 2];
            const extractedName = extractedString.split(pattern);
            placeName = extractedName[extractedName.length-1];
        } else {
            placeName = ''; // Return an empty string if the format is unexpected
        }

        //Only for local testing purposes
        if (placeName === "127."){
            placeName = "stankovci";
        }
    }
return placeName;
}
