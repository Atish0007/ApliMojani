import "../../assets/css/process.css";
import one from "../../assets/images/process/one.png"
import two from "../../assets/images/process/two.png";
import three from "../../assets/images/process/three.png";

function Process() {
  const steps = [
   {title: "सेवा निवडा",subtitle:"सेवा निवडा आणि अर्ज सबमिट करा", icon:one},
   {title: "तज्ञाशी बोला",subtitle:"आमचा प्रतिनिधी तुमच्याशी संपर्क करेल",icon:two},
   {title: "काम सुरू",subtitle:"कागदपत्रे तपासून काम सुरू होते",icon:three}
  ];

  return (
    <section className="py-5 cstmBG">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                            <h1 className="MainHeading text-center pt-5">कार्य कसे चालते</h1>
                            <div className="bar">
                                <div className="bar-fill"></div>
                            </div>

                            <div className="row justify-content-center g-4 py-5">

                                {steps.map((item, i) => (
                                <div className="col-md-3 col-sm-6" key={i}>
                                    <div className="work-card text-center h-100">
                                    <img
                                        src={item.icon}
                                        alt="सेवा निवडा"
                                        className=" mb-3"
                                        width={i === steps.length - 1 ? 130 : 170} 
                                    />
                                    <h6 className="fs-2 fw-bold">{item.title}</h6>
                                    <p className="fs-6 small text-muted">
                                        {item.subtitle}
                                    </p>
                                    </div>
                                </div>
                                ))}
                            </div>

                            <div className="text-center mt-4">
                                <div className="row justify-content-center g-3">
                                    <div className="col-12 col-md-3">
                                    <button className="btn btn-success btn-lg w-100 fw-bold px-4">
                                        <i className="fa-solid fa-file-lines me-2"></i>
                                        अर्ज स्थिती पहा
                                    </button>
                                    </div>

                                    <div className="col-12 col-md-3">
                                    <button className="btn btn-warning btn-lg w-100 text-white fw-bold px-4">
                                        <i className="fa-solid fa-phone me-2"></i>
                                        तज्ञाशी बोला
                                    </button>
                                    </div>
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
