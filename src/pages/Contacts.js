const Contacts = () => {
    return (
        <main className="section" id="contacts">
            <div className="container">
                <h1 className="title-1">#Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Yerevan, Armenia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p>
                            <a href="tel:+79182074054">+7 (918) 207-40-54</a>
                        </p>
                        <p>
                            <a target="_blank" href="https://t.me/f4t_cat">@f4t_cat</a>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p>
                            <a href="mailto:shalaginov.dev@gmail.com">
                                shalaginov.dev@gmail.com
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Contacts;