import React from 'react';

// here it is the Newsletter component. I made a separete component to make all the application readable and isolate a little bit better the css of this part of the page.
const NewsLetter = () => {

    return (
        <div >
            <div>
                <div className="central-cont-container-1">
                    <h3>Compartilhe a novidade</h3>
                </div>
                <div className="central-cont-container-2">
                    <p >Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
                </div>
                    <form action="">
                        {/* Even though this form is not sending data, I just start out making some pre configuration of prevent default, ids and names */}
                        <div className="form-order" onSubmit={(e) => e.preventDefault()}>
                            <div className="inside-form">
                                <label for="email" name="name">Nome do seu amigo:</label>
                                <br/>
                                <input type="text" />
                            </div>
                            <div className="inside-form">
                                <label for="email">E-mail:</label>
                                <br/>
                                {/* give a ''email'' type to the browser validate the user input */}
                                <input type="email" name="email"/>
                            </div>
                        </div>
                        <div className="central-cont-container-3">
                            <button type="submit" className="submit-button">Enviar agora!</button>
                        </div>
                    </form>
               
            </div>
            
        </div>
    );
}

export default NewsLetter;
