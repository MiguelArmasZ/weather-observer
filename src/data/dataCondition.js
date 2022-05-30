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
      heading: 'sensación termica',
      description:
        'SENSACION Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur voluptates reiciendis voluptatem distinctio perspiciatis illo esse numquam iste molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur voluptates reiciendis voluptatem distinctio perspiciatis illo esse numquam iste molestiae!'
    }
  },
  {
    icon: faDroplet,
    symbol: '%',
    modal: {
      heading: 'humedad',
      description:
        'HUMEDAD Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur voluptates reiciendis voluptatem distinctio perspiciatis illo esse numquam iste molestiae!'
    }
  },
  {
    icon: faCloudRain,
    symbol: 'mm',
    modal: {
      heading: 'precipitacion',
      description:
        'PRECIPITACION Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur voluptates reiciendis voluptatem distinctio perspiciatis illo esse numquam iste molestiae!'
    }
  },
  {
    icon: faWind,
    symbol: 'kph',
    modal: {
      heading: 'velocidad del viento',
      description:
        'VIENTO Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur voluptates reiciendis voluptatem distinctio perspiciatis illo esse numquam iste molestiae!'
    }
  }
]
