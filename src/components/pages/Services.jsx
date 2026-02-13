import "../../assets/css/services.css";
import survey from "../../assets/images/services/land_survey.png";
import land from "../../assets/images/services/land.png";
import online_application from "../../assets/images/services/online_application.png";
import house from "../../assets/images/services/house.png";

function Services(){


    const services = [
        {icon: survey, title:"जमीन मोजणी\nअर्ज", color:"green"},
        {icon: land, title:"जुने 7/12 – काढणे", color:"yellow"},
        {icon: online_application, title:"जुने फेरफार काढणे", color:"blue"},
        {icon: house, title:"PM आवास\nयोजना अर्ज", color:"purple"}
    ]

        return (
            <section className="py-1 cstmBG">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                                <h1 className="MainHeading text-center pt-3 pt-md-5">आमच्या सेवा</h1>
                                <div className="bar mb-3 mb-md-3">
                                    <div className="bar-fill"></div>
                                </div>


                                <div className="row g-3 py-2 pb-0 mb-4 justify-content-center">
                                {services.map((item, i) => (
                                     <div className={i==0?"col-6 col-md-6 col-lg-3 mt-3 mt-md-3":"col-6 col-md-6 col-lg-3 mt-3 mt-md-3"} key={i} style={{ whiteSpace: "pre-line" }}>
                                            <a href="#" className={`service-card ${item.color}`}>
                                                <img src={item.icon} alt={item.title} />
                                        <span className="fs-5">{item.title} </span>
                                            </a>
                                    </div>
                                ))}

                                </div>


                                 {/* <div className="row py-5 justify-content-center">
                                    {services.map((item, i) => (
                                        <div className="col-12 col-sm-6 col-md-3 mb-4" key={i}>
                                            <div className="card text-center CstmShadow service-card">
                                                <div className="card-body d-flex flex-column align-items-center">
                                                    <img src={item.icon} className="service-icon mb-3" alt={item.title}/>
                                                    <div className="service-title mb-2">
                                                        {item.title}
                                                    </div>
                                                    <button className="btn btn-outline-primary mt-auto service-btn fw-bold">
                                                        अधिक माहिती
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div> */}

                        </div>
                    </div>
                </div>    
            </section>
        );
}

export default Services;