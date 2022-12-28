const cars = [
    {
        id:1,
        "Name": "Tata Tiago Ev",
        Color: "Light blue",
        price: "8.49Lakh",
        img:'https://media.zigcdn.com/media/model/2022/Sep/tiago-ev-2_360x240.jpg'
    }
    ,
    {
        id:2,
        "Name": "Maruti Grand Vitara",
        Color: "Light blue",
        price: "10 Lak",
        img:'https://media.zigcdn.com/media/model/2022/Sep/grand-1_360x240.jpg'

    },
    {
        id:3,
        "Name": "Honda City",
        Color: "Red",
        price: "9.49 Lac",
        img:'https://media.zigcdn.com/media/model/2022/Jul/city-4th_360x240.jpg'
    },
    {
        id:4,
        "Name": "Mahindra KUV100",
        Color: "Red",
        price: "7 Lac",
        img:'https://media.zigcdn.com/media/model/2019/Sep/mahindra-kuv100-nxt_360x240.jpg'
    },
    {
        id:5,
        "Name": "Maruti Suzuki ",
        Color: "Blue",
        price: " 5Lac",
        img:'https://media.zigcdn.com/media/model/2020/Jun/suzuki-ignis_930x620_360x240.jpg'
    }, {
        id:6,
        "Name": "Mahindra E Verito ",
        Color: "white",
        price: " 9 Lac",
        img:'https://media.zigcdn.com/media/model/2020/Oct/e-verito_195x130.jpg'
    },
    {
        id:7,
        "Name": " Nissan Kicks",
        Color: "Blue",
        price: "  9 Lac",
        img:'https://img.gaadicdn.com/images/car-images/930x620/Nissan/Kicks/7826/1594208349285/Night-Shade_555555.jpg'
    },
    {
        id:8,
        "Name": "Hyundai Santro ",
        Color: "Silver",
        price: " 5 Lac",
        img:'https://img.gaadicdn.com/images/car-images/930x620/Hyundai/Santro/7460/1644319919105/224_Imperial-Beige_7a695d.jpg'
    },
    {
        id:9,
        "Name": "Maruti Suzuki S ",
        Color: "Red",
        price: " 4 Lac",
        img:'https://img.gaadicdn.com/images/car-images/930x620/Maruti/S-Presso/7177/1655806028079/224_pearl-starry-blue_0070e0.jpg'
    },
    {
        id:10,
        "Name": "Renault Triber",
        Color: "Yellow",
        price: " 6 Lac",
        img:'https://media.zigcdn.com/media/model/2022/Jul/triberdt_360x240.jpg'
    },
    {
        id:11,
        "Name": "Datsun GO",
        Color: "Amber-Orange",
        price: " 5Lac",
        img:'https://media.zigcdn.com/media/model/2019/Sep/datsun-go_360x240.jpg'
    },
    {
        id:12,
        "Name": "Datsun GO",
        Color: "Silver",
        price: " 5.5 Lac",
        img:'https://img.gaadicdn.com/images/car-images/930x620/Datsun/Datsun-GO/6649/1559556696839/224_SILVER_cccccc.jpg'
    },
    {
        id:13,
        "Name": "Datsun GO Plus",
        Color: "Black",
        price: "  4 Lac",
        img:'https://img.gaadicdn.com/images/car-images/930x620/Datsun/Datsun-GO-Plus/6654/222_Grey_474644.jpg'
    },
    {
        id:14,
        "Name": "Honda Jazz ",
        Color: "Red",
        price: " 8 Lac",
        img:'https://media.zigcdn.com/media/model/2020/Aug/jazz-2020-5_360x240.jpg'
    },
    {
        id:15,
        "Name": "Kia Seltos ",
        Color: "Red",
        price: " 10 Lac",
        img:'https://media.zigcdn.com/media/model/2022/Apr/seltos-6_360x240.jpg'
    },
    {
        id:16,
        "Name": "Tata Harrier",
        Color: "Blue",
        price: " 14 Lac",
        img:'https://images10.gaadicdn.com/usedcar_image/medium_srp/used_car_2615958_1668326435.jpg'
    },

]

for (i of cars) {
    const cardetails=document.createElement('div');
    cardetails.innerHTML=`  <img src="${i.img}" alt=""><h2>${i.Name}</h2> <h4>Price: ${i.price}</h4> 
    <h4>id:${i.id}</h4><button onclick="getName(${i.id})">Buy Now</button> `;
    document.getElementById('details').appendChild(cardetails); 

}


// function car"Name"(){
//     for( j of cars)
//    alert(j."Name")
// }
function getName(a){
const namePosition=a-1;
alert(cars[namePosition].Name)

}

