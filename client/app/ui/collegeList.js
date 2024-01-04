
const collegeList = () => 
{
    const list = [
        {
            src: "/images/ict.png",
            alt: "ICT"
        },
        {
            src: "/images/iitBombay.png",
            alt: "IIT Bombay"
        },
        {
            src: "/images/kjSomaiya.png",
            alt: "KJ Somaiya"
        },
        {
            src: "/images/pce.png",
            alt: "PCE"
        },
        {
            src: "/images/spit.png",
            alt: "SPIT Mumbai",
        },
        {
            src: "/images/vesit.png",
            alt: "VESIT",
        },
        {
            src: "/images/vjti.png",
            alt: "VJTI",
        }
    ];

    const colleges = list.map((college) => (
        <div key={college.alt}>
            <img src={college.src} alt={college.alt} className="max-h-[130px]"/>
        </div>
    ))

    return <div className="flex gap-20 overflow-scroll">
        {colleges}
    </div>
}

export default collegeList;
