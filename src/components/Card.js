import React from "react";
import fort from "../assets/fortnite.jpg";
import freef from "../assets/freef.jpg";
import pubg from "../assets/pubgg.jpg";
import war from "../assets/warzone.jpg";

function Card() {
  return (
    <div >
      <div className="card">
        <img src={fort} alt="" />
        <div className="card-body">
          <h4 className="card-title">Fortnie Battle Royale</h4>
          <p className="card-text text-secondary">
          En un mundo donde una tormenta mortal amenaza con destruir todo a su paso, los jugadores se enfrentan en una isla remota en un desafío de 
          supervivencia y habilidad. Armados solo con su ingenio y un arsenal de armas, los competidore luchan hasta que solo uno queda en pie. 
          ¡Bienvenido a Fortnite, donde cada partida es<br /> 
          una batalla épica por la supremacía!
          </p>
          <a href="#" className="btn btn-success">
          DESCARGA AHORA!!
          </a>
        </div>
      </div>

      <div className="card">
        <img src={war} alt="" />
        <div className="card-body">
          <h4 className="card-title">WARZONE</h4>
          <p className="card-text text-secondary">
          "En un escenario de guerra moderna, donde el caos y la violencia son moneda corriente, los jugadores se lanzan en paracaídas hacia una zona de combate intensa y frenética. Equipados con armamento avanzado y tácticas estratégicas, deben luchar contra enemigos en un entorno dinámico y peligroso.<br />
          En Call of Duty: Warzone, la supervivencia no solo depende de la puntería, sino también de la astucia y la coordinación del equipo. ¡Prepárate para el combate más intenso y visceral que hayas experimentado!"
          </p>
          <a href="#" className="btn btn-danger">
          COMPRAR!
          </a>
        </div>
      </div>

      <div className="card">
        <img src={pubg} alt="" />
        <div className="card-body">
          <h4 className="card-title">PUBG BATTLEGROUNDS</h4>
          <p className="card-text text-secondary">
          "En un vasto y desolado campo de batalla, rodeado de paisajes variados y desafiantes, los jugadores se lanzan en paracaídas para enfrentarse en una lucha a vida o muerte. Equipados con armas realistas y vehículos tácticos, deben navegar por un terreno implacable mientras luchan contra otros competidores en una batalla por la supervivencia.<br />
          En PUBG (PlayerUnknown's Battlegrounds), la estrategia y la habilidad son clave para sobrevivir hasta el último momento y reclamar la victoria en este intenso juego de Battle Royale."
          </p>
          <a href="#" className="btn btn-danger">
          COMPRAR!
          </a>
        </div>
      </div>

      <div className="card">
        <img src={freef} alt="" />
        <div className="card-body">
          <h4 className="card-title">FREE FIRE</h4>
          <p className="card-text text-secondary">
          "En un mundo devastado por el caos y el desorden, los jugadores se enfrentan en una isla remota en busca de la gloria y la supervivencia. Armados hasta los dientes con una variedad de armas y habilidades únicas, deben luchar contra otros jugadores en un intenso juego de Battle Royale. <br />
          En Free Fire, la astucia, la estrategia y la habilidad son esenciales para ser el último hombre en pie. ¡Prepárate para una experiencia de combate emocionante y llena de acción donde solo los más valientes prevalecerán!"
          </p>
          <a href="#" className="btn btn-success">
          DESCARGA AHORA!
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
