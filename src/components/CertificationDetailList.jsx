import { CertificationDetailCard } from "./CertificationDetailCard";
import reactCertificate from '../assets/certificates/react.PNG';
import designCertificate from '../assets/certificates/design.PNG';

export const CertificationDetailList = () => {
    const certificationList = [
        {
            imgSrc: reactCertificate,
            title: "Advanced React by Meta(Coursera)",
            year: "2024",
            url: "https://www.coursera.org/account/accomplishments/certificate/LQPVWKBFEPXQ"
        },
        {
            imgSrc: designCertificate,
            title: "Foundations of User Experience (UX) Design by Google(Coursera)",
            year: "2023",
            url: "https://www.coursera.org/account/accomplishments/certificate/E23VUST4ML3T"
        },
        
    ];
    return (
        <section id="certifications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#123f3a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">Certifications</h2>
            </div>
            <div>
                <ul className="group/list">
                    {certificationList.map((certification, index) =>
                        <li className="mb-12" key={index}>
                            <CertificationDetailCard
                             imgSrc={certification.imgSrc}
                             title={certification.title}
                             year={certification.year}
                             url={certification.url}
                            />
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}