const SEATS = {
    id:null,
    seatType: [
        { type: "BALCONY" , title: "Balcony",price:190},
        { type: "GOLD" , title: "Gold",price:150},
        { type: "SILVER" , title: "Silver",price:110},
    ],
    seatPrice: {balcony:190, gold:150, silve:110},
    maxSeatAllowed:10,
    seatStructure : {
        BALCONY:[
            {
                row:"K",
                seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                totalPlaces:16
            }
        ],
        GOLD:[
            {
                row:"J",
                seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                totalPlaces:21
            },{
                row:"I",
                seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                totalPlaces:21
            },{
                row:"H",
                seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                totalPlaces:21
            },
            {
                row:"G",
                seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                totalPlaces:21
            },
            {
                row:"F",
                seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                totalPlaces:21
            }
        ],
        SILVER:[
            {
                row:"E",
                seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                totalPlaces:21
            },
            {
                row:"D",
                seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                totalPlaces:21
            },
            {
                row:"C",
                seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                totalPlaces:21
            },
            {
                row:"B",
                seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                totalPlaces:21
            },
            {
                row:"A",
                seats: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                totalPlaces:21
            }
        ]
    }
}

export const galleryImages = [
    'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_60.jpg',
    'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_59.jpg',
    'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_58.jpg',
    'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_57.jpg',
    'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_56.jpg',
    'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_55.jpg',
    'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_54.jpg',
    'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_53.jpg',
    'http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_52.jpg'
]

export default SEATS;