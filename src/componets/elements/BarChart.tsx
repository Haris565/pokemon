"use client";
import { useMemo } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

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
    <Container>
      <Chart options={options} series={series} type="bar" width="600" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
