import "../../assets/css/arjform.css";
import bannerImg from "../../assets/images/arjBG.png";

function ArjForm() {
// WhatsApp Handler
  const handleWhatsApp = () => {

    //const message = `नमस्कार,\n\nनाव: ${//name}\nमोबाईल: ${//mobile}\n\nमला सरकारी मोजणीसाठी अर्ज करायचा आहे.`;
    const message = `नमस्कार,\nमला सरकारी मोजणीसाठी अर्ज करायचा आहे.`;

    const whatsappUrl = `https://wa.me/917387484615?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };


    return (

        <section className="cstmBG">

            <h1 className="MainHeading text-center pt-4">सेवा माहिती व उपलब्धता</h1>
                        <div className="bar bar mb-5 mb-md-0">
                            <div className="bar-fill"></div>
                        </div>
                <div className="split-section">
                    <div className="container-fluid arjFullWidth">
                        <div className="row g-0 align-items-stretch split-row">

                            {/* LEFT IMAGE */}
                            <div className="col-lg-6 image-side"
                                style={{ backgroundImage: `url(${bannerImg})` }}
                            ></div>

                            {/* RIGHT SIDE BOX */}
                            <div className="col-lg-6 form-side d-flex align-items-center justify-content-center">

                                <div className="banner-wrapper-box">

                                    <div className="info-header fs-3">
                                        🔶 पुणे जिल्ह्यात सेवा सुरू आहे!
                                    </div>

                                    <ul className="info-list">
                                        <li>महाराष्ट्रातील पुणे जिल्ह्यासाठी अर्ज सुविधा उपलब्ध 🚀</li>
                                        <li>फक्त तुमचा तालुका निवडा आणि लगेच अर्ज करा!</li>
                                    </ul>

                                    <div className="info-stat">📊 55,486+ अर्ज पूर्ण</div>
                                    <div className="info-stat">✅ 98% ग्राहक समाधान</div>
                                    <div className="info-stat">📞 7387484615</div>

                                    <p className="timing">🕒 सकाळी 10 ते सायं 7</p>

                                    <button className="btn apply-btn w-100" onClick={handleWhatsApp}>
                                        👉 अर्ज करा
                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
        </section>                  
    )
}

export default ArjForm;