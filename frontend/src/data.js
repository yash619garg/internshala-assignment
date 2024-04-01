import aboutImg from "./images/Group 16.png";
import logo1 from "./images/s4-il-1 1.png"
import logo2 from "./images/s4-il-2 1.png"
import logo3 from "./images/s4-il-3 1.png"
import logo4 from "./images/s4-il-4 1.png"
import logo5 from "./images/s4-il-5 1.png"
import logo6 from "./images/s4-il-6 1.png"
import Profile1 from "./images/t4-img-1 1.png"
import Profile2 from "./images/t4-img-2 1.png"
import Profile3 from "./images/t4-img-3 1.png"

import process1 from "./images/Frame 68.png";
import process2 from "./images/Frame 69.png";
import process3 from "./images/Frame 70.png";

import man1 from "./images/gto-t5-img-1 1.png"
import man2 from "./images/gto-t5-img-2 1.png"

import update1 from "./images/Rectangle 30.png";
import update2 from "./images/Rectangle 30 (1).png";
import update3 from "./images/Rectangle 30 (2).png";
import update4 from "./images/Rectangle 30 (3).png";

import stars from "./images/Star Ratings.png";
export const about = [
    {
        title: "About Us",
        caption: " We Want To Give You The Best Service",
        description: "We are 100+ professional software engineers with more than 10 year of experience in delivering superior products Believe it because you have seen it.Here are real numbers",
        experience: "24",
        qualities: ["Product engineering", "digital services", "it consultancy", "digital services"],
        link: "/",
        imageUrl: aboutImg,

    }
]

export const services = [
    {
        id: 1,
        image: logo1,
        title: "Strategy & Planning",
        caption: "Lorem ipsum dolor sit amet bibendum elit sit finibus.Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
        link: "/"
    },
    {
        id: 2,
        image: logo2,
        title: "Planning & Strategy",
        caption: "Lorem ipsum dolor sit amet bibendum elit sit inibus.Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
        link: "/"
    },
    {
        id: 3,
        image: logo3,
        title: "Content Marketing",
        caption: "Lorem ipsum dolor sit amet bibendum elit sit finibus.Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
        link: "/"
    },
    {
        id: 4,
        image: logo4,
        title: "Seo Audits & Strategy",
        caption: "Lorem ipsum dolor sit amet bibendum elit sit finibus.Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
        link: "/"
    },
    {
        id: 5,
        image: logo5,
        title: "Design & Development",
        caption: "Lorem ipsum dolor sit amet bibendum elit sit finibus.Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
        link: "/"
    },
    {
        id: 6,
        image: logo6,
        title: "Seo Audits & Strategy",
        caption: "Lorem ipsum dolor sit amet bibendum elit sit finibus.Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
        link: "/"
    },
]

export const seo = [{
    title: "WITH SEO OPTIMIZATION",
    caption: " Marketing And Creative Solutions Seo",
    description: "We are 100+ professional software engineers with more than 10 year of experience in delivering superior products.",
    consulting: [
        {
            name: "Finance Consulting",
            percent: 80
        },
        {
            name: "Finance Consulting",
            percent: 80
        },
        {
            name: "Finance Consulting",
            percent: 80
        },
    ],
    link: "/"
}]

export const team = [{
    logo: Profile1,
    name: "RACHNA SHETH",
    role: "FULL STACK DEVELOPER"
},
{
    logo: Profile2,
    name: "RACHNA SHETH",
    role: "FULL STACK DEVELOPER"
},
{
    logo: Profile3,
    name: "RACHNA SHETH",
    role: "FULL STACK DEVELOPER"
},]

export const pro = {
    title: "OUR WORK PROCESS",
    caption: "A Simple, Yet Powerful And Efficient Process",
    pros: [
        {
            image: process1,
            heading: "MARKETING PLAN",
            description: "Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent. "
        },
        {
            image: process2,
            heading: "EXECUTION",
            description: "Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent. "
        },
        {
            image: process3,
            heading: "GROWTH & SCALE",
            description: "Lorem ipsum dolor sit amet natoque. Primis nam feugiat aptent vestibulum pulvinar torqu ent. "
        },
    ]
}

export const testimonials = {
    title: "OUR TESTIMONIAL",
    caption: "What Our Clients Say about Us",
    reviews: [
        {
            id: 1,
            image: man1,
            name: "ESTHER HOWARD",
            job: "FINANCE SPECIALIST",
            rating: stars,
            description: "“With Over A Decade Of Experie,We’ve Established Ourselves As One Of The Pioneering Agencies In The Region.Our Small, Flexible,Agile And Design- Led Structures Processes”"
        },
        {
            id: 2,
            image: man2,
            name: "ESTHER HOWARD",
            job: "FINANCE SPECIALIST",
            rating: stars,
            description: "“With Over A Decade Of Experie,We’ve Established Ourselves As One Of The Pioneering Agencies In The Region.Our Small, Flexible,Agile And Design- Led Structures Processes”"
        },
        {
            id: 3,
            image: man1,
            name: "ESTHER HOWARD",
            job: "FINANCE SPECIALIST",
            rating: stars,
            description: "“With Over A Decade Of Experie,We’ve Established Ourselves As One Of The Pioneering Agencies In The Region.Our Small, Flexible,Agile And Design- Led Structures Processes”"
        },
        {
            id: 4,
            image: man2,
            name: "ESTHER HOWARD",
            job: "FINANCE SPECIALIST",
            rating: stars,
            description: "“With Over A Decade Of Experie,We’ve Established Ourselves As One Of The Pioneering Agencies In The Region.Our Small, Flexible,Agile And Design- Led Structures Processes”"
        },

    ]
}

export const news = {
    title: "OUR BLOGS & NEWS",
    caption: "Get More Update For News",
    description: "We are 100+ professional software engineers with more than 10 years of experience in delivering super products it because you've seen it.",
    updates: [
        {
            image: update1,
            tag: "Design",
            date: "March 7, 2024",
            head: "Agency Needs To Embrace Social Media..",
            description1: "Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla",

        },
        {
            image: update1,
            tag: "Business",
            date: "March 7, 2024",
            head: "Lead Designer’s UI/UX Core Checklist.",
            description1: "Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla",

        },
        {
            image: update1,
            tag: "Development",
            date: "March 7, 2024",
            head: "Lead Designer’s UI/UX Core Checklist.",
            description1: "Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla",

        },
        {
            image: update1,
            tag: "Marketing",
            date: "March 7, 2024",
            head: "We Are Building Everything You Needed",
            description1: "Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla",

        },
    ]
} 