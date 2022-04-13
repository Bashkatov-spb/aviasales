import React from 'react';
import format from 'date-fns/format';

const Item = ({ item }) => {
  const { price, segments } = item;
  const [segmentUp, segmentDown] = segments;
  const transfers = (arr) => {
    if (arr.length >= 1) {
      return arr.join(', ');
    }
    if (arr.length === 0) {
      return 'direct flight';
    }
  };
  const nameTransform = (num) => {
    if (num.length === 1) {
      return 'пересадка';
    }
    if (num.length === 0) {
      return 'пересадок';
    }
    if (num.length > 1) {
      return 'пересадки';
    }
  };
  const hoursUp = Math.floor(segmentUp.duration / 60);
  const minutesUp = segmentUp.duration - hoursUp * 60;
  const hoursDown = Math.floor(segmentDown.duration / 60);
  const minutesDown = segmentDown.duration - hoursDown * 60;
  const depTimeUp = format(new Date(segmentUp.date), 'HH:mm');
  const desTimeUp = format(
    new Date(+new Date(segmentUp.date) + +new Date(2022, 0, 0, hoursUp + 3, minutesUp)),
    'HH:mm'
  );
  const depTimeDown = format(new Date(segmentDown.date), 'HH:mm');
  const desTimeDown = format(
    new Date(+new Date(segmentDown.date) + +new Date(2022, 0, 0, hoursDown + 3, minutesDown)),
    'HH:mm'
  );
  const transferUp = transfers(segmentUp.stops);
  const transferDown = transfers(segmentDown.stops);
  const stopsUp = nameTransform(segmentUp.stops);
  const stopsDown = nameTransform(segmentDown.stops);

  return (
    <div className="items__item">
      <div className="items__item-header">
        <div className="items__item-price">{price}p</div>
        <div
          style={{ background: `url("https://pics.avs.io/99/36/${item.carrier}.png") no-repeat center` }}
          className="items__item-company"
        ></div>
      </div>
      <div className="items__item-info">
        <div className="items__item-onewayticket">
          <div className="items__item-clock">
            <p className="items__item-up">
              <span>{segmentUp.origin}</span> - <span>{segmentUp.destination}</span>
            </p>
            <p className="items__item-down">
              <span>{depTimeUp}</span> - <span>{desTimeUp}</span>
            </p>
          </div>
          <div className="items__item-duration">
            <p className="items__item-up">В пути</p>
            <p className="items__item-down">{`${hoursUp}ч ${minutesUp}м`}</p>
          </div>
          <div className="items__item-transfer">
            <p className="items__item-up">
              {segmentUp.stops.length} {stopsUp}
            </p>
            <p className="items__item-down">{transferUp}</p>
          </div>
        </div>
        <div className="items__item-twowayticket">
          <div className="items__item-clock">
            <p className="items__item-up">
              <span>{segmentDown.origin}</span> - <span>{segmentDown.destination}</span>
            </p>
            <p className="items__item-down">
              <span>{depTimeDown}</span> - <span>{desTimeDown}</span>
            </p>
          </div>
          <div className="items__item-duration">
            <p className="items__item-up">В пути</p>
            <p className="items__item-down">{`${hoursDown}ч ${minutesDown}м`}</p>
          </div>
          <div className="items__item-transfer">
            <p className="items__item-up">
              {segmentDown.stops.length} {stopsDown}
            </p>
            <p className="items__item-down">{transferDown}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
