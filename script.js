const MyPictures = {
    data() {
        return {
            // first image is set to main picture
            mainPicture: './images/img1.jpg',

            // set of pictures
            images: ['./images/img1.jpg','./images/img2.jpg','./images/img3.jpg','./images/img4.jpg','./images/img5.jpg']
        };
    },

    // change main picture 
    methods: {
        changeMainPicture(index) {
            this.mainPicture = this.images[index];
        }
    }
};

// create new vue instance
const create = Vue.createApp(MyPictures);

// mount the vue instance to the element with the id "gallery"
const mount = create.mount('#gallery');