import '../../assets/css/home.css';
import ful from "../../assets/images/ful.PNG";

function Home(){

    return(
        <>
        <section className="d-flex align-items-center homeBG">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-md-6 text-center">
                        <div className="brandWrap animated-label">
                            <h1 className="homeHeading hmheadful hmbar">
                                <img className="fulimg" src={ful} alt="ApliMojani" />
                                <span className='MainHeading cstEngFont'>Apli Mojani</span>
                            </h1>
                            {/* <h1 className="homeHeading"><img src={ful} className="fulimg" alt="ApliMojani" height="60px" /> Apli Mojani</h1> */}
                            <h2 className="homeHeading hmbar tagline">शासकीय मोजणी अर्जासाठी विश्वासार्ह सहाय्य</h2>
                            <p>शेतजमीन | प्लॉट | वडिलोपार्जित जमीन</p>
                            <h5 className="homeHeading tagline">Online अर्ज • कागदपत्र मार्गदर्शन • Status सहाय्य</h5>
                            <small><span className='text-success'>✔</span> Citizen Assistance Service | <span className='text-success'>✔</span> Maharashtra Wide</small>
                        </div>
                        <div className="btns">
                            <button className="btn btn-success cstEngFont"><i className="fa-brands fa-whatsapp"></i> WhatsApp Apply करा</button>
                            {/* <button className="btn btn-primary"><i className="fa-solid fa-envelope"></i> Online अर्ज करा</button> */}
                            <button className="btn btn-dark cstEngFont"><i className="fa-solid fa-phone"></i> Call करा</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default Home;