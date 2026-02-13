import "../../assets/css/Sevashetra.css";
import gatno from "../../assets/images/seva/gatno.svg";
import aadharcard from "../../assets/images/seva/aadharcard.svg";
import sadhekagad from "../../assets/images/seva/sadhekagad.svg";
import phone from "../../assets/images/seva/phone.svg";
import shield from "../../assets/images/seva/shield.svg";
import map from "../../assets/images/map.png";
import google from "../../assets/images/google.png";

function Sevashetra() {

    const items = [
        { icon: gatno, text: "गट नंबर मागा", color: "warning" },
        { icon: aadharcard, text: "आधार कार्ड", color: "success" },
        { icon: sadhekagad, text: "साधे कागद / कागद", color: "warning" },
        { icon: phone, text: "मोबाईल नंबर", color: "primary" }
    ];

    return (

        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center">



                    <div className="col-md-12">


                        <h1 className="MainHeading text-center pt-5">सेवा माहिती व उपलब्धता</h1>
                        <div className="bar">
                            <div className="bar-fill"></div>
                        </div>

                        <div className="premium-wrapper">

                            <div className="row g-3">

                                {/* LEFT BOX */}
                                {/* <div className="col-md-6">
                                    <div className="info-box h-100">
                                        <h6 className="cstmColor fs-3 fw-bold mb-2 text-md-start text-center">
                                            आवश्यक कागदपत्रे
                                        </h6>

                                        <ul className="list-unstyled mb-0">
                                            {items.map((item, i) => (
                                                <li key={i} className="d-flex align-items-start mb-2">
                                                    <img
                                                        src={item.icon}
                                                        alt="icon"
                                                        width="24"
                                                        height="24"
                                                        className={`me-2 text-${item.color}`}
                                                    />
                                                    <span className="fs-5">{item.text}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="border rounded-3 p-3 mt-3 bg-light shadow-sm">
                                            <div className="d-flex align-items-center justify-content-center justify-content-md-start text-center text-md-start">
                                                <img
                                                    src={shield}
                                                    alt="Shield"
                                                    width="30"
                                                    className="me-2"
                                                />
                                                <h6 className="fw-bold mb-0 fs-4">
                                                    तुमची सर्व कागदपत्रे सुरक्षित ठेवली जातील
                                                </h6>
                                            </div>
                                        </div>

                                    </div>
                                </div> */}

                                {/* RIGHT BOX */}
                                {/* <div className="col-md-6">
                                    <div className="map-box h-100">

                                        <h6 className="cstmColor fs-3 fw-bold mb-2 text-md-start text-center">
                                            सेवा उपलब्ध क्षेत्र
                                        </h6>

                                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-start text-center text-md-center mb-3">
                                            <img
                                                src={map}
                                                className="sevaImg me-2"
                                                alt="India Map"
                                            />
                                            <p className="text-center">
                                                <span className="fs-5">महाराष्ट्रातील सर्व</span><br />
                                                <span className="fs-4 fw-bold">तालुके व गावे</span><br />
                                                <small className="text-muted">(काही दुर्गम भाग वगळून)</small>
                                            </p>
                                        </div>

                                        <div className="download-strip">
                                            <div className="row align-items-center justify-content-center text-center text-md-start">
                                                <div className="col-12 col-md-auto mb-0">
                                                    <img
                                                        src={google}
                                                        className="GPImage"
                                                        height="60"
                                                        alt="Google Play"
                                                    />
                                                </div>
                                                <div className="col-12 col-md-auto mt-3 mt-md-0">
                                                    <span className="fw-bold text-white fs-1">
                                                        80102 80102
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div> */}
                            </div>

                            <div className="row g-4 pt-5">

                                <div className="col-12 col-lg-6">
                                    <div className="premium-card">
                                        <div className="accent-strip"></div>

                                        <div className="card-content">
                                            <h3 className="cstmColor fs-3 fw-bold">सेवा उपलब्ध वेळ</h3>
                                            <h2 className="phone">80102 80102</h2>
                                            <p className="timing">सकाळी 9 ते सायं 7 (सोम - शनि)</p>

                                            <div className="price-badge">₹300 शुल्क</div>

                                            <ul className="feature-list">
                                                <li><span className='text-success'>✔</span> थेट संपर्क - दलाल नाही</li>
                                                <li><span className='text-success'>✔</span> संपूर्ण मार्गदर्शन</li>
                                                <li><span className='text-success'>✔</span> Receipt दिली जाईल</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <div className="premium-card">
                                        <div className="accent-strip blue"></div>

                                        <div className="card-content">
                                            <h3 className="cstmColor fs-3 fw-bold">ग्राहक सहाय्य</h3>
                                            <h2 className="phone">80102 80102</h2>
                                            <p className="timing">24x7 सपोर्ट उपलब्ध</p>

                                            <div className="price-badge secure">सुरक्षित सेवा</div>

                                            <ul className="feature-list">
                                                <li><span className='text-success'>✔</span> सरकारी प्रमाणित सेवा</li>
                                                <li><span className='text-success'>✔</span> त्वरित प्रतिसाद</li>
                                                <li><span className='text-success'>✔</span> डेटा सुरक्षितता</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </section>


    );
}

export default Sevashetra;
