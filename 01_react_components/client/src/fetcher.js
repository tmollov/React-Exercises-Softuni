const BASE_URL = 'http://localhost:9999';

export default {
    endpoints:{
        roster: "/roster",
        character: function(id){
            return `/character/${id}`;
        },
        episodePreview: function(id){
            return `/episodePreview/${id}`;
        }
    },  
    get: (endpoint, callback) => 
        fetch(BASE_URL + endpoint)
            .then(data => data.json())
            .then(callback)
            .catch(console.log)
}