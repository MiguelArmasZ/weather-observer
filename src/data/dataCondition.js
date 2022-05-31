import {
  faCloudRain,
  faDroplet,
  faTemperatureFull,
  faWind
} from '@fortawesome/free-solid-svg-icons'

export const dataCondition = [
  {
    icon: faTemperatureFull,
    symbol: 'º',
    modal: {
      heading: 'feels like',
      description:
        "Although the temperature of the air around us is the same, some days we feel colder than others. This is called 'feels like' and is closely related to the percentage of humidity in the place. The higher the humidity, the warmer the wind chill tends to be, i.e., the warmer we feel."
    }
  },
  {
    icon: faDroplet,
    symbol: '%',
    modal: {
      heading: 'humidity',
      description:
        'Humidity is a measure that indicates the amount of water vapor in the air. A high percentage will mean that the thermal sensation will be higher, in other words, we will feel that it is warmer with respect to the temperature of the place.'
    }
  },
  {
    icon: faCloudRain,
    symbol: 'mm',
    modal: {
      heading: 'precipitation',
      description:
        'It measures the amount of water precipitated at a given time and place in square meters, for example, if it has a value of 15 mm what it means is that if we could store all the rainwater (or snow) in a container of one square meter, it would measure 15 mm.'
    }
  },
  {
    icon: faWind,
    symbol: 'kph',
    modal: {
      heading: 'wind speed',
      description:
        'The speed at which the wind travels, expressed in kilometers per hour. If it marks below 12 it is a very light breeze. And from 21 it begins to have a remarkable intensity.'
    }
  }
]
