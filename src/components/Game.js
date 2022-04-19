/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Violao from '../images/Violao.png';
import GameButton from './GameButton';

const Game = () => {
  const [notas, setNota] = useState([]);
  const [cifras, setCifra] = useState([]);
  const [buttonNota, setButtonNota] = useState('');
  const [buttonCifra, setButtonCifra] = useState('');
  const [ganhador, setGanhador] = useState(false);


  const notasMusicais = [ 'Lá', 'Si', 'Dó', 'Ré', 'Mi', 'Fá', 'Sol'];
  const arrayCifras = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
  
  const embaralhadoArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    setNota(embaralhadoArray(notasMusicais));
    setCifra(embaralhadoArray(arrayCifras));
  }, []);

  const checkResposta = () => {
    document.getElementById(buttonNota).className = 'button-green';
    document.getElementById(buttonCifra).className = 'button-green';
  }

  const vitoria = () => {
    const vitoriaButton = document.querySelectorAll('.button-green');
    const result = Array.from(vitoriaButton);
    if(result.length === 14) {
      setGanhador(true)
    }
  };

  useEffect(() => {
    const validaValue = () => {
      if (buttonNota === 'Lá' && buttonCifra === 'A') return checkResposta();
      if (buttonNota === 'Si' && buttonCifra === 'B') return checkResposta();
      if (buttonNota === 'Dó' && buttonCifra === 'C') return checkResposta();
      if (buttonNota === 'Ré' && buttonCifra === 'D') return checkResposta();
      if (buttonNota === 'Mi' && buttonCifra === 'E') return checkResposta();
      if (buttonNota === 'Fá' && buttonCifra === 'F') return checkResposta();
      if (buttonNota === 'Sol' && buttonCifra === 'G') return checkResposta();
    }; 
    validaValue();    
    vitoria();
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
          <h3>Selecione a nota e em seguidea a cifra correspondente</h3>
          <div className="game">
            <div>
    
              <p>Notas musicais</p>
              {
                notas.map((nota) => 
                  <GameButton
                    key={ nota }
                    label={ nota }
                    onClick={ ({target}) => {
                        setButtonNota(target.value);
                      }
                    }
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
                    onClick={ ({target}) => {
                        setButtonCifra(target.value);
                      }
                    }
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
