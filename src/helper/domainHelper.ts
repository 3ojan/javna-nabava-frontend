let placeName: string | undefined;

export const getPlaceName = ()=>{
    if (!placeName){
        const domain = window.location.hostname;
        const firstWordLength = domain.substring(0, domain.indexOf('.')).length + 1; // +1 to include the dot
        placeName = domain.substring(firstWordLength, domain.indexOf('.hr'));

        //Only for local testing purposes
        if (placeName === "127."){
            placeName = "stankovci";
        }
    }
return placeName;
}
