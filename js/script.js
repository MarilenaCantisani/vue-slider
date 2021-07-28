console.log("Vue test", Vue);

// Configuration to activate "Vue" on the web inspector
Vue.config.devtools = true;

// Variable to activate "Vue"
const root = new Vue({
    el: "#root",
    /* ---------------------------------- DATA ---------------------------------- */
    data: {
        //* Array of images for the carousel
        image: [
            "./images/image1.jpg",
            "./images/image2.jpg",
            "./images/image3.jpg",
            "./images/image4.jpg",
        ],
        //* Current image array element
        currentIndex: 0,
    },
    /* --------------------------------- METHODS -------------------------------- */
    methods: {
        //* Function that controls if the current element is equal to the index
        isActiveImage(index) {
            return this.currentIndex === index ? "active" : "";
        },

    }
}
);