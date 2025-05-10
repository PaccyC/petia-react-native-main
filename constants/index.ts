import Category1Image from "@/assets/images/category-1.png"
import Category2Image from "@/assets/images/category-2.png"
import Category3Image from "@/assets/images/category-3.png"
import Category4Image from "@/assets/images/category-4.png"


const categories= [
    {
        id:1,
        title:"Veterinary",
        image:Category1Image
    },
    {
        id:2,
        title:"Grooming",
        image:Category2Image
    },
    {
        id:3,
        title:"Training",
        image:Category3Image
    },
    {
        id:4,
        title:"Pet Store",
        image:Category4Image
    }
]


const notifications=[
    {
        title:"Today",
            data:[
                {
                    id:1,
                    body: "Your checkout is successfull, product is on tne way",
                    type:"shopping",
                    
                },
                {
                    id:2,
                    body: "Your checkout is successfull, product is on tne way",
                    type:"normal",
                 
                }

            ]
        },
        {
        title: "Yesterday",
        data:[
            {
                id:3,
                body: "Your checkout is successfull, product is on tne way",
                type:"shopping",
                
            },
            {
                id:4,
                body: "Appointment request accepted",
                type:"normal",
              
            },
            {
                id:5,
                body: "Vaccinate your pet timely",
                type:"advice",
              
            }

        ]
        
    },
    {
        title:"13 March",
        data:[
            {
                id:6,
                body: "Your checkout is successfull, product is on tne way",
                type:"shopping",
                
            },
            {
                id:7,
                body: "Appointment request accepted",
                type:"normal",
              
            },
        ]
    },
    {
        title:"12 March",
        data:[
            {
                id:8,
                body: "Appointment request accepted",
                type:"normal",
              
            },
            {
                id:9,
                body: "Vaccinate your pet timely",
                type:"advice",
              
            }
        ]
    }

            
          
         
      
]
export const data={
    categories,
    notifications
}