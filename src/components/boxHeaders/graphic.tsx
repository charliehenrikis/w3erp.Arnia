import Chart from 'react-apexcharts';

export type RadialBarProps = {
  percentageGraphic: number;
};

const colors = {
  azul2: '#3A8DFF', // Cor personalizada
  azul4: '#0052CC', // Cor personalizada
  white: '#FFFFFF', // Cor branca
};

const defaultOptions: ApexCharts.ApexOptions = {
  fill: { colors: [colors.azul2] },
  grid: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
  chart: {
    width: 70,
    height: 70,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '45%' },
      track: { background: colors.azul4 },
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: 5,
          fontSize: '12px',
          color: colors.white,
          fontWeight: 'bold',
        },
      },
    },
  },
};

export function RadialBarDasboard({ percentageGraphic }: RadialBarProps) {
  return (
    <Chart
      series={[percentageGraphic]}
      width={80}
      height={80}
      options={defaultOptions}
      type="radialBar"
    />
  );
}
