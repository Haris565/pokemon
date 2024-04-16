"use client";
import { useMemo } from "react";
import Chart from "react-apexcharts";

type BarChartProps = {
  stats: {
    stat: {
      name: string;
    };
    base_stat: number;
  }[];
};

export default function BarChart({ stats }: BarChartProps) {
  const options = useMemo(() => {
    if (!stats) return {};
    return {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: stats.map((stat) => stat.stat.name),
      },
    };
  }, [stats]);

  const series = useMemo(() => {
    if (!stats) return [];
    return [
      {
        name: "Stats",
        data: stats.map((stat) => stat.base_stat),
      },
    ];
  }, [stats]);

  return (
    <div className="mixed-chart">
      <Chart options={options} series={series} type="bar" width="500" />
    </div>
  );
}
