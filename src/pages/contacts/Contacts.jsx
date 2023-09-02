import MainTitle from "../../components/main-title/MainTitle";

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__inner">
                    <MainTitle text={"Zapraszamy do kontaktu"} />

                    <div className="contacts__board">
                        <div className="block-contacts contacts__block-top">
                            <div className="contacts__board-name">
                                Nasz adres:
                            </div>
                            <div className="contacts__adress">
                                ul. Internetowa 404, 00-123 Warszawa
                            </div>
                        </div>

                        <div className="block-contacts contacts__block-middle">
                            <div className="contacts__board-name">
                                Nasze media społęcznościowe:
                            </div>
                            <div className="contacts__socials">
                                <a href="#!">Instagram</a>
                                <a href="#!">Facebook</a>
                            </div>
                        </div>

                        <div className="block-contacts contacts__block-bottom">
                            <div className="contacts__board-name">
                                Napisz do nas:
                            </div>
                            <a href="mailto:mail@internet.pl">mail@internet.pl</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;