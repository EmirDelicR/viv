import { FaBeer } from 'react-icons/fa';

import './Card.scss';

export default function Card() {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <FaBeer />
        </div>
        <div className="card-info-wrapper">
          <div className="card-info">
            <FaBeer />
            <div className="card-info-title">
              <h3>Unicorns</h3>
              <h4>A single corn. Er, I mean horn.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
