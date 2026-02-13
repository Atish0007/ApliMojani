import "../../assets/css/process.css";
import one from "../../assets/images/process/one.png"
import two from "../../assets/images/process/two.png";
import three from "../../assets/images/process/three.png";
import { FaClipboardCheck, FaSmile, FaFileAlt, FaMapMarkerAlt  } from "react-icons/fa";

function Process() {
    const steps = [
        { title: "सेवा निवडा", subtitle: "सेवा निवडा आणि कागदपत्र\nसबमिट करा.", icon: one },
        { title: "तज्ञाशी बोला", subtitle: "आमचा प्रतिनिधी तुमच्याशी संपर्क करेल व फॉर्म भरेल.", icon: two },
        { title: "काम सुरू", subtitle: "कागदपत्रे तपासून काम सुरू होते व फॉर्म whatsapp वर पाठवण्यात येतो.", icon: three }
    ];

    const stats = [
        {
            icon: <FaClipboardCheck />,
            number: "5000+",
            text: "नोंदणी अर्ज"
        },
        {
            icon: <FaSmile />,
            number: "99%",
            text: "ग्राहक समाधान"
        },
        {
            icon: <FaFileAlt />,
            number: "15+",
            text: "सेवा"
        },
        {
            icon: <FaMapMarkerAlt />,
            number: "15+",
            text: "कार्यक्षेत्र तालुके"
        }
    ];

    return (
        <section className="py-1 pb-2 cstmBG">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1 className="MainHeading text-center pt-1 pt-md-4">कार्य कसे चालते</h1>
                        <div className="bar">
                            <div className="bar-fill"></div>
                        </div>

                        <div className="row justify-content-center g-4 py-2">

                            {steps.map((item, i) => (
                                <div className="col-12 col-sm-6 col-lg-4" key={i} style={i === 0 ? { whiteSpace: "pre-line" } : {}}>
                                    <div className="work-card text-center h-100">
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className=" mb-3"
                                            width={i === steps.length - 1 ? 130 : 170}
                                        />
                                        <h6 className="fs-3 fw-bold">{item.title}</h6>
                                        <p className={steps.length - 1 ==i ? "fs-6 small text-muted m-1": "fs-6 small text-muted"}>
                                            {item.subtitle}
                                        </p>
                                        <div className="circleWrapper">
                                            <div className="cstmCircle">
                                                <h6 className="numbersCss">{i + 1}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* <div className="text-center mt-4">
                                <div className="row justify-content-center g-3">
                                    <div className="col-12 col-md-6 col-lg-3">
                                    <button className="btn btn-success btn-lg w-100 fw-bold px-4">
                                        <i className="fa-solid fa-file-lines me-2"></i>
                                        अर्ज स्थिती पहा
                                    </button>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-3">
                                    <button className="btn btn-warning btn-lg w-100 text-white fw-bold px-4">
                                        <i className="fa-solid fa-phone me-2"></i>
                                        तज्ञाशी बोला
                                    </button>
                                    </div>
                                </div>
                            </div> */}


                        <div className="my-4 my-md-5">
                            <div className="stats-box position-relative">
                                <div className="row g-3 g-md-0">

                                    {stats.map((item, index) => (
                                        <div
                                            key={index}
                                            className="col-6 col-md-3 col-sm-12 stat-col"
                                        >
                                            <div className="stat-item">
                                                <div className="icon-box">{item.icon}</div>
                                                <div>
                                                    <h4 className="stat-number">{item.number}</h4>
                                                    <p className="stat-text">{item.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                                <div className="green-curve"></div>
                            </div>
                        </div>

                        {/* <p className="text-center font-weight-bold fs-5 fst-italic text-success"> <small>⏱️ कालावधी शासकीय प्रक्रियेवर अवलंबून</small> </p> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process;
