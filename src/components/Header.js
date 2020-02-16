import React from 'react';

const Header = () => {
    return (
        <div>
           <header>
                <div className="inside-header">
                    <h3>uma seleção de produtos</h3>
                    <h1>especial para você</h1>
                    <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
                    <div>
                        <button className="button-header">Conheça a Linx</button>
                        <button className="button-header">Ajude o algoritmo</button>
                        <button className="button-header">Seus produtos</button>
                        <button className="button-header">Compartilhe</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
