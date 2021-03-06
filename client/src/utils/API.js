import axios from "axios";

export default {
    //user related functions
    //login
    logIn: function () {
        return axios.get("/login");
    },
    // Gets the user with the given id
    getUser: function (id) {
        return axios.get("/api/user/" + id);
    },
    //update email and password for a user
    updateUser: function (id) {
        return axios.put("/api/user/" + id);
    },
    // Saves a new user to the database- Sign up
    createUser: function (userData) {
        console.log(userData);
        return axios.post("/api/user/newuser", userData);
    },
    authenticateUser: function (userData) {
        return axios("auth/signup", {
            methos: "post",
            data: userData,
            withCredentials: true
        })
    },
    logout: function () {
        return axios("/auth/logout")
    },


    //occasion related functions
    //create new occasion
    createOccasion: function (occasionData) {
        return axios.post("/api/occasion/newoccasion", occasionData);
    },
    //get occasion by id
    getOccasion: function (id) {
        return axios.get("/api/occasion/" + id);
    },
    // update occasion - edit the occasion listed
    updateOccasion: function (id) {
        return axios.put("/api/occasion/" + id);
    },
    // Deletes the book with the given id
    deleteOccasion: function (id) {
        return axios.delete("/api/occasion/" + id);
    },
};
