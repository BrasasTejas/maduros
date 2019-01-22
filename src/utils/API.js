import axios from "axios";

//coorespond to backend (in cigar.js in api folder)
export default {
  // Gets all cigars
  getCigars: function() {
    return axios.get("/api/cigars");
  },
  // Gets the cigar with the given id
  getCigar: function(id) {
    return axios.get("/api/cigars/" + id);
  },
  // Deletes the cigar with the given id
  deleteCigar: function(id) {
    return axios.delete("/api/cigars/" + id);
  }
  // Saves a cigar to the database
  // saveCigar: function(Data) {
  //   return axios.post("/api/cigars", cigarData);
  // }
};
