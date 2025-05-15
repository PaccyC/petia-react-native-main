import Category1Image from "@/assets/images/category-1.png"
import Category2Image from "@/assets/images/category-2.png"
import Category3Image from "@/assets/images/category-3.png"
import Category4Image from "@/assets/images/category-4.png"

import Service1Image from "@/assets/images/vaccination.png"
import Service2Image from "@/assets/images/vaccination.png"
import Service3Image from "@/assets/images/behavioral.png"
import Service4Image from "@/assets/images/dentistry.png"


import Doctor1Image from "@/assets/images/doctor-1.png"
import Doctor2Image from "@/assets/images/doctor2.png"

import gService1Image from "@/assets/images/gService1.png"
import gService2Image from "@/assets/images/gService2.png"
import gService3Image from "@/assets/images/gService3.png"
import gService4Image from "@/assets/images/gService4.png"
import gService5Image from "@/assets/images/gService5.png"
import gService6Image from "@/assets/images/gService6.png"


const categories = [
    {
        id: 1,
        title: "Veterinary",
        image: Category1Image
    },
    {
        id: 2,
        title: "Grooming",
        image: Category2Image
    },
    {
        id: 3,
        title: "Training",
        image: Category3Image
    },
    {
        id: 4,
        title: "Pet Store",
        image: Category4Image
    }
]




const services = [
    {
        id: 1,
        title: "Vaccinations",
        image: Service1Image
    },
    {
        id: 2,
        title: "Operations",
        image: Service2Image
    },
    {
        id: 3,
        title: "Behaviorals",
        image: Service3Image
    },
    {
        id: 4,
        title: "Dentistry",
        image: Service4Image
    }
]

const notifications = [
    {
        title: "Today",
        data: [
            {
                id: 1,
                body: "Your checkout is successfull, product is on tne way",
                type: "shopping",

            },
            {
                id: 2,
                body: "Your checkout is successfull, product is on tne way",
                type: "normal",

            }

        ]
    },
    {
        title: "Yesterday",
        data: [
            {
                id: 3,
                body: "Your checkout is successfull, product is on tne way",
                type: "shopping",

            },
            {
                id: 4,
                body: "Appointment request accepted",
                type: "normal",

            },
            {
                id: 5,
                body: "Vaccinate your pet timely",
                type: "advice",

            }

        ]

    },
    {
        title: "13 March",
        data: [
            {
                id: 6,
                body: "Your checkout is successfull, product is on tne way",
                type: "shopping",

            },
            {
                id: 7,
                body: "Appointment request accepted",
                type: "normal",

            },
        ]
    },
    {
        title: "12 March",
        data: [
            {
                id: 8,
                body: "Appointment request accepted",
                type: "normal",

            },
            {
                id: 9,
                body: "Vaccinate your pet timely",
                type: "advice",

            }
        ]
    }

]

const doctors = [
    {
        id: 1,
        name: "Dr. Anna Johanson",
        department: "Veterinary Behavioral",
        rating: 4.8,
        distanceFromYou: 1,
        image: Doctor1Image
    },
    {
        id: 2,
        name: "Dr. Vernon Chwe",
        department: "Veterinary Surgery",
        rating: 4.9,
        distanceFromYou: 1.5,
        image: Doctor2Image
    },
    {
        id: 3,
        name: "Dr. Anna Johanson",
        department: "Dentistry",
        rating: 4.8,
        distanceFromYou: 1,
        image: Doctor1Image
    },
]


const groomingServices = [
    {
        id: 1,
        title: "Bathing & Drying",
        image: gService1Image
    },
    {
        id: 2,
        title: "Hair Triming",
        image: gService2Image
    },
    {
        id: 3,
        title: "Nail Trimming",
        image: gService3Image
    },
    {
        id: 4,
        title: "Ear Cleaning",
        image: gService4Image
    },
    {
        id: 5,
        title: "Teeth Brushing",
        image: gService5Image
    },
    {
        id: 6,
        title: "Flea Treatment",
        image: gService6Image
    }

]


export const data = {
    categories,
    notifications,
    services,
    doctors,
    groomingServices
}