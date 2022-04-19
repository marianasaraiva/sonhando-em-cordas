/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Violao from '../images/Violao.png';
import GameButton from './GameButton';

const Game = () => {
  const [notas, setNotas] = useState([]);
  const [cifras, setCifras] = useState([]);
  const [buttonNota, setButtonNota] = useState('');
  const [buttonCifra, setButtonCifra] = useState('');
  const [ganhador, setGanhador] = useState(false);


  const arrayNotas = [ 'Lá', 'Si', 'Dó', 'Ré', 'Mi', 'Fá', 'Sol'];
  const arrayCifras = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
  
  const embaralharArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    setNotas(embaralharArray(arrayNotas));
    setCifras(embaralharArray(arrayCifras));
  }, []);

  const marcarGameButtons = () => {
    document.getElementById(buttonNota).className = 'button-green';
    document.getElementById(buttonCifra).className = 'button-green';
  }

  const checarVitoria = () => {
    const gameButtonsMarcados = document.querySelectorAll('.button-green');
    if(gameButtonsMarcadosresult.length === 14) {
      setGanhador(true)
    }
  };

  const validaResposta = (buttonNota, buttonCifra) => {
    if (buttonNota === 'Dó' && buttonCifra === 'C') return marcarGameButtons();
    if (buttonNota === 'Ré' && buttonCifra === 'D') return marcarGameButtons();
    if (buttonNota === 'Mi' && buttonCifra === 'E') return marcarGameButtons();
    if (buttonNota === 'Fá' && buttonCifra === 'F') return marcarGameButtons();
    if (buttonNota === 'Sol' && buttonCifra === 'G') return marcarGameButtons();
    if (buttonNota === 'Lá' && buttonCifra === 'A') return marcarGameButtons();
    if (buttonNota === 'Si' && buttonCifra === 'B') return marcarGameButtons();
  };

  useEffect(() => {
    validaResposta(buttonNota, buttonCifra);    
    checarVitoria();
  }, [buttonNota, buttonCifra]);

  const jogarNovamente = () => {
    setGanhador(false);
  };

  return (
    <div className="container-game">
      <div>
        <img src={ Violao } alt="violão" />
      </div>

      {ganhador ?
        <div className="vencedor">
          <h4>Você ganhou!!!</h4>
          <div>
            <button 
              className="button-play-again"
              onClick={() => jogarNovamente()}
            >
              Jogar novamente
            </button>
          </div>
        </div>
       :
        <div>
          <h3>Selecione a nota e em seguida a cifra correspondente</h3>
          <div className="game">
            <div>
              <p>Notas musicais</p>
              {
                notas.map((nota) => 
                  <GameButton
                    key={ nota }
                    label={ nota }
                    onClick={ ({target}) => { setButtonNota(target.value); } }
                  />
                )
              }
            </div>
            <div>
              <p>Cifras</p>
              {
                cifras.map((cifra, i) =>
                  <GameButton
                    key={ cifra }
                    label={ cifra }
                    onClick={ ({target}) => { setButtonCifra(target.value); } }
                  />
                )
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Game;
