import "../assets/css/footer.css";

function Footer() {

    const data = [
        {title:"कॉल करा",subtitle:"7387484615",icon:"fas fa-phone strip-icon ftrPhone"},
        // {title:"WhatsApp",subtitle:"WhatsApp वर चॅट करा",icon:"fab fa-whatsapp strip-icon whatsapp"},
        {title:"Email",subtitle:"aarjamitra@gmail.com",icon:"fa fa-envelope strip-icon whatsapp"},
        {title:"ऑफिसचा पत्ता",subtitle:"Aapla aarj Office no. 1, Yashodhan Building, Karve Nagar, Pune, Maharashtra – 411052",icon:"fas fa-map-marker-alt strip-icon ftrMap"},
        {title:"Working Hours",subtitle:"Mon–Sat: 10 AM – 7 PM",icon:"fas fa-clock strip-icon ftrForm"},
    ]


    return (
        <div className="footer-strip">
            <div className="container">
                <div className="row text-center text-md-start align-items-center g-4">


                {data.map((item,i)=>(
                    <div className=" col-md-3 col-sm-6" key={i}>
                         <div className="strip-item">
                            <span className="footerIcon"><i className={item.icon}></i></span>
                            <div>
                                <h6 className={i==0||data.length-2==i?"":"cstEngFont"}>{item.title}</h6>
                                <p className="cstEngFont">{item.subtitle}</p>
                                {/* {data.length-2==i || data.length-1==i ?"cstEngFont":""} */}
                            </div>
                        </div>
                    </div>
                ))}

                    {/* Call
                    <div className="col-12 col-md-3">
                        <div className="strip-item">
                            <span className="footerIcon"><i className="fas fa-phone-alt strip-icon"></i></span>
                            <div>
                                <h6>कॉल करा</h6>
                                <p>800789123545</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="strip-item">
                            <i className="fab fa-whatsapp strip-icon whatsapp"></i>
                            <div>
                                <h6>WhatsApp</h6>
                                <p>WhatsApp वर चॅट करा</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="strip-item">
                            <i className="fas fa-map-marker-alt strip-icon"></i>
                            <div>
                                <h6>ऑफिसचा पत्ता</h6>
                                <p>गट क्रमांक, नेवासा, नाशिक</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="strip-item">
                            <i className="fas fa-question-circle strip-icon"></i>
                            <div>
                                <h6>अर्ज फॉर्म भरायचा?</h6>
                                <p>मदत मिळवा</p>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Footer;