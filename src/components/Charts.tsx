"use client";
import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

interface ChartProps {
  callOutcomes: { [key: string]: number };
  hangupReasons: { [key: string]: number };
  callDurations: number[];
  answeredCalls: number;
  unansweredCalls: number;
  voicemailCalls: number;
}

export default function Charts({ 
  callOutcomes, 
  hangupReasons, 
  callDurations, 
  answeredCalls, 
  unansweredCalls, 
  voicemailCalls 
}: ChartProps) {
  const chartRef = useRef<ChartJS>(null);

  // Call Outcomes Doughnut Chart
  const callOutcomesData = {
    labels: Object.keys(callOutcomes).map(key => 
      key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')
    ),
    datasets: [
      {
        data: Object.values(callOutcomes),
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',   // Green for success
          'rgba(251, 191, 36, 0.8)',  // Yellow for no interest
          'rgba(239, 68, 68, 0.8)',   // Red for wrong number
          'rgba(59, 130, 246, 0.8)',  // Blue for follow-up required
          'rgba(107, 114, 128, 0.8)', // Gray for other
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(251, 191, 36, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(107, 114, 128, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // Hang-up Reasons Bar Chart
  const hangupReasonsData = {
    labels: Object.keys(hangupReasons).map(key => 
      key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')
    ),
    datasets: [
      {
        label: 'Count',
        data: Object.values(hangupReasons),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',  // Blue for user end
          'rgba(251, 191, 36, 0.8)',  // Yellow for AI timeout
          'rgba(239, 68, 68, 0.8)',   // Red for system drop
          'rgba(107, 114, 128, 0.8)', // Gray for other
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(251, 191, 36, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(107, 114, 128, 1)',
        ],
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  // Call Status Distribution Doughnut Chart
  const callStatusData = {
    labels: ['Answered', 'Unanswered', 'Voicemail'],
    datasets: [
      {
        data: [answeredCalls, unansweredCalls, voicemailCalls],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',  // Green for answered
          'rgba(251, 191, 36, 0.8)', // Yellow for unanswered
          'rgba(59, 130, 246, 0.8)', // Blue for voicemail
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(251, 191, 36, 1)',
          'rgba(59, 130, 246, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // Call Duration Distribution (if we have duration data)
  const durationLabels = callDurations.length > 0 
    ? ['0-30s', '30s-1m', '1-2m', '2-5m', '5m+']
    : [];
  
  const durationData = callDurations.length > 0 
    ? [
        callDurations.filter(d => d <= 30).length,
        callDurations.filter(d => d > 30 && d <= 60).length,
        callDurations.filter(d => d > 60 && d <= 120).length,
        callDurations.filter(d => d > 120 && d <= 300).length,
        callDurations.filter(d => d > 300).length,
      ]
    : [];

  const callDurationData = {
    labels: durationLabels,
    datasets: [
      {
        label: 'Number of Calls',
        data: durationData,
        backgroundColor: 'rgba(147, 51, 234, 0.8)',
        borderColor: 'rgba(147, 51, 234, 1)',
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 12,
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Call Outcomes Chart */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          Call Outcomes Distribution
        </h3>
        <div className="h-64">
          <Doughnut data={callOutcomesData} options={doughnutOptions} />
        </div>
      </div>

      {/* Hang-up Reasons Chart */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <span className="text-2xl">📞</span>
          Hang-up Reasons
        </h3>
        <div className="h-64">
          <Bar data={hangupReasonsData} options={chartOptions} />
        </div>
      </div>

      {/* Call Status Chart */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <span className="text-2xl">📊</span>
          Call Status Distribution
        </h3>
        <div className="h-64">
          <Doughnut data={callStatusData} options={doughnutOptions} />
        </div>
      </div>

      {/* Call Duration Chart */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <span className="text-2xl">⏱️</span>
          Call Duration Distribution
        </h3>
        <div className="h-64">
          {callDurations.length > 0 ? (
            <Bar data={callDurationData} options={chartOptions} />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-300/70">
              No duration data available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

