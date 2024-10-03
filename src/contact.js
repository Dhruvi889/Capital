import "./contact.css"

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

export function Contact() {
    return (
        <div className="superb">
           
            <div class="sale">
                <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <u>Shop Now</u></p>
            </div>
            <div className='homecbg'>
                <h1>Contact</h1>
                <p className='homepara'>Home_Contact</p>
            </div>
            <div className="maillastsub">
                <div className="maingetin">
                    <h2 className="Get">Get in Touch</h2>

                    <input className="msginput" type="text" placeholder="Enter Message" />

                    <div className="mainnameidvs">
                        <input className="namedivs" type="text" placeholder="Enter your name" />
                        <input className="namedivs" type="text" placeholder="Email" />
                    </div>
                    <input className="sub" type="text" placeholder="Enter Subject" />
                    <button className="btnsendb">Send</button>
                </div>
                <div className="mainfirstsvgs">
                    <div className="firstsvgs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                        </svg>
                        <div>
                            <h4>Buttonwood, California.</h4>
                            <p className="Rosemead"> Rosemead, CA 91770</p>
                        </div>
                    </div>
                    <div className="firstsvgs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                        <div>
                            <h3>+1 253 565 2365</h3>
                            <p className="Rosemead">Mon to Fri 9am to 6pm</p>
                        </div>
                    </div>
                    <div className="firstsvgs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                        <div>
                            <h3>support@colorlib.com</h3>
                            <p className="Rosemead">Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
            </div>
            


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

        </div>
    )
}