import React from 'react';

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
                        <div className="formOrder">
                            <div className="insideForm">
                                <label for="email">Nome do seu amigo:</label>
                                <br/>
                                <input type="email" id="email" name="email"/>
                            </div>
                            <div className="insideForm">
                                <label for="email">E-mail:</label>
                                <br/>
                                <input type="email" id="email" name="email"/>
                            </div>
                        </div>
                        <div className="central-cont-container-3">
                            <button type="submit" className="submitButton">Enviar agora!</button>
                        </div>
                    </form>
               
            </div>
            
        </div>
    );
}

export default NewsLetter;
